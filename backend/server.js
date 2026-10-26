import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool, { testConnection, isDbConnected } from './config/db.js';

// Fallback data imported from data definitions
import { products, shopInfo } from '../frontend/src/data/products.js';
import { megaMenuGroups, quickOccasions, filterOptions } from '../frontend/src/data/categories.js';
import { customerReviews } from '../frontend/src/data/reviews.js';
import { bouquetBuilderSteps } from '../frontend/src/data/bouquet-builder-data.js';
import { matchesQuery, removeVietnameseTones } from '../frontend/src/utils/search-helper.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory orders store when running without active MySQL instance
const memoryOrders = [];

// ====================================================================
// 1. HEALTH CHECK & STATUS
// ====================================================================
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    brand: 'Mer Florist Đà Nẵng',
    slogan: 'Lãng mạn không hề đắt',
    databaseConnected: isDbConnected(),
    timestamp: new Date().toISOString()
  });
});

// ====================================================================
// 2. SHOP INFO & METADATA
// ====================================================================
app.get('/api/shop-info', (req, res) => {
  res.json({ success: true, data: shopInfo });
});

// ====================================================================
// 3. CATEGORIES & MEGA MENU
// ====================================================================
app.get('/api/categories', async (req, res) => {
  try {
    if (isDbConnected()) {
      const [rows] = await pool.query('SELECT * FROM categories ORDER BY group_id, id');
      return res.json({ success: true, data: rows });
    }
  } catch (err) {
    console.error('MySQL query error:', err.message);
  }
  
  res.json({
    success: true,
    data: {
      megaMenuGroups,
      quickOccasions,
      filterOptions
    }
  });
});

// ====================================================================
// 4. PRODUCTS API (Filter, Search, Sort, Pagination)
// ====================================================================
app.get('/api/products', async (req, res) => {
  try {
    const { category, occasion, flower_type, tone, min_price, max_price, q, sort } = req.query;
    
    // Fallback/In-memory filtering with full Vietnamese diacritics support
    let result = [...products];

    // Filter: Category
    if (category && category !== 'all') {
      result = result.filter(p => p.category === category);
    }

    // Filter: Occasion
    if (occasion && occasion !== 'all') {
      result = result.filter(p => p.occasion === occasion);
    }

    // Filter: Flower Type
    if (flower_type && flower_type !== 'all') {
      result = result.filter(p => p.flowerType === flower_type);
    }

    // Filter: Tone
    if (tone && tone !== 'all') {
      result = result.filter(p => p.tone === tone);
    }

    // Filter: Min Price
    if (min_price) {
      const min = parseInt(min_price, 10);
      if (!isNaN(min)) result = result.filter(p => p.price >= min);
    }

    // Filter: Max Price
    if (max_price) {
      const max = parseInt(max_price, 10);
      if (!isNaN(max)) result = result.filter(p => p.price <= max);
    }

    // Filter: Search Query (Accented & Unaccented Vietnamese)
    if (q) {
      result = result.filter(p => 
        matchesQuery(p.name, q) || 
        matchesQuery(p.description, q) ||
        matchesQuery(p.meaning, q) ||
        (p.mainFlowers && p.mainFlowers.some(f => matchesQuery(f, q)))
      );
    }

    // Sorting
    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'newest') {
      // Keep or reverse
      result.reverse();
    }

    res.json({
      success: true,
      total: result.length,
      data: result
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Single Product Detail
app.get('/api/products/:idOrSlug', (req, res) => {
  const { idOrSlug } = req.params;
  const product = products.find(p => p.id === idOrSlug || p.slug === idOrSlug);
  
  if (!product) {
    return res.status(404).json({ success: false, message: 'Không tìm thấy sản phẩm' });
  }

  // Get related products (same category or occasion)
  const related = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.occasion === product.occasion))
    .slice(0, 4);

  res.json({
    success: true,
    data: product,
    related
  });
});

// ====================================================================
// 5. REVIEWS API
// ====================================================================
app.get('/api/reviews', (req, res) => {
  res.json({
    success: true,
    total: customerReviews.length,
    data: customerReviews
  });
});

// ====================================================================
// 6. CUSTOM BOUQUET BUILDER API
// ====================================================================
app.get('/api/bouquet-builder/options', (req, res) => {
  res.json({
    success: true,
    steps: bouquetBuilderSteps
  });
});

// ====================================================================
// 7. ORDERS API (Checkout & Validation)
// ====================================================================
app.post('/api/orders', (req, res) => {
  const {
    sender,
    receiver,
    deliveryDate,
    deliveryTimeSlot,
    cardMessage,
    paymentMethod,
    items,
    subtotal,
    shippingFee,
    totalAmount
  } = req.body;

  // Real-time Form Validations
  if (!sender || !sender.name || !sender.phone) {
    return res.status(400).json({
      success: false,
      message: 'Vui lòng cung cấp đầy đủ họ tên và số điện thoại người đặt'
    });
  }

  if (!receiver || !receiver.name || !receiver.phone || !receiver.address) {
    return res.status(400).json({
      success: false,
      message: 'Vui lòng cung cấp đầy đủ thông tin người nhận hoa và địa chỉ tại Đà Nẵng'
    });
  }

  if (!deliveryDate || !deliveryTimeSlot) {
    return res.status(400).json({
      success: false,
      message: 'Vui lòng chọn ngày và khung giờ giao hoa mong muốn'
    });
  }

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Giỏ hàng của bạn đang trống'
    });
  }

  // Generate unique order code (e.g. MER-20261026-8921)
  const orderCode = `MER-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${Math.floor(1000 + Math.random() * 9000)}`;
  
  const newOrder = {
    id: `ord-${Date.now()}`,
    orderCode,
    sender,
    receiver,
    deliveryDate,
    deliveryTimeSlot,
    cardMessage: cardMessage || '',
    paymentMethod: paymentMethod || 'cod',
    items,
    subtotal: subtotal || 0,
    shippingFee: shippingFee || 0,
    totalAmount: totalAmount || subtotal || 0,
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  memoryOrders.unshift(newOrder);

  res.status(201).json({
    success: true,
    message: 'Đặt hoa thành công!',
    order: newOrder
  });
});

// Get order by code
app.get('/api/orders/:orderCode', (req, res) => {
  const { orderCode } = req.params;
  const order = memoryOrders.find(o => o.orderCode === orderCode || o.id === orderCode);
  
  if (!order) {
    return res.status(404).json({ success: false, message: 'Không tìm thấy đơn hàng' });
  }

  res.json({ success: true, data: order });
});

// Start Server
app.listen(PORT, async () => {
  console.log(`====================================================`);
  console.log(`🌸 Mer Florist Backend Server running on port ${PORT}`);
  console.log(`📍 Endpoint: http://localhost:${PORT}/api/health`);
  console.log(`====================================================`);
  await testConnection();
});
