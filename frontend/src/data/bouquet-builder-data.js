/**
 * Mer Florist Custom Bouquet Builder Dataset
 * 4-Step Interactive Layering System:
 * Step 1: Wrap & Container (Giấy gói / Hộp / Lẵng)
 * Step 2: Primary Flowers (Hoa chính)
 * Step 3: Secondary Flowers & Fillers (Hoa phụ & Lá phụ)
 * Step 4: Accessories, Ribbons & Free Greeting Card
 */

export const bouquetBuilderSteps = [
  {
    stepNumber: 1,
    id: 'wrapper',
    title: 'Bước 1: Chọn Giấy Gói hoặc Hộp/Lẵng',
    subtitle: 'Nền tảng định hình phong cách cho bó hoa của bạn',
    options: [
      { id: 'wrap-kraft', name: 'Giấy Kraft Mộc Vintage', price: 20000, color: '#C8A97E', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80', description: 'Cổ điển, mộc mạc và thân thiện môi trường' },
      { id: 'wrap-pink-korean', name: 'Giấy Lụa Mờ Hàn Quốc Hồng Phấn', price: 35000, color: '#F6CED5', image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=300&q=80', description: 'Ngọt ngào, nữ tính chuẩn style Seoul' },
      { id: 'wrap-cream-silk', name: 'Giấy Lụa Kem Trắng Tinh Tế', price: 35000, color: '#FDFBF7', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=300&q=80', description: 'Thanh lịch, làm nổi bật màu hoa tươi' },
      { id: 'wrap-butterfly', name: 'Giấy Gấp Xòe Cánh Bướm Cao Cấp', price: 50000, color: '#E8EFEA', image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=300&q=80', description: 'Nếp gấp cánh bướm bồng bềnh độc quyền Mer' },
      { id: 'wrap-basket', name: 'Giỏ Mây Đan Tay Thủ Công', price: 75000, color: '#D4B996', image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=300&q=80', description: 'Đậm chất thơ, dễ dàng để bàn chăm sóc' }
    ]
  },
  {
    stepNumber: 2,
    id: 'primary-flowers',
    title: 'Bước 2: Chọn Hoa Chính (1 – 3 loại)',
    subtitle: 'Linh hồn tạo nên thông điệp và sắc thái chủ đạo',
    isMultiSelect: true,
    maxSelect: 3,
    options: [
      { id: 'flower-rose-ohara', name: 'Hồng Ohara Đà Lạt (Thơm ngát)', unitPrice: 25000, defaultQty: 5, color: '#F6CED5', image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=300&q=80', description: 'Hương thơm nồng nàn, form cánh cúp tinh xảo' },
      { id: 'flower-rose-red', name: 'Hồng Đỏ Nhung Ecuador', unitPrice: 35000, defaultQty: 5, color: '#C0392B', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80', description: 'Đỏ thắm kiêu sa, biểu tượng tình yêu vĩnh cửu' },
      { id: 'flower-tulip-white', name: 'Tulip Trắng Hà Lan Nhập', unitPrice: 38000, defaultQty: 5, color: '#FFFFFF', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=300&q=80', description: 'Dáng hoa thanh mảnh, thuần khiết quý phái' },
      { id: 'flower-sunflower', name: 'Hướng Dương Rạng Rỡ', unitPrice: 22000, defaultQty: 3, color: '#F39C12', image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=300&q=80', description: 'Sắc vàng tươi sáng mang năng lượng tích cực' },
      { id: 'flower-peony-chrysanthemum', name: 'Cúc Mẫu Đơn Khổng Lồ', unitPrice: 65000, defaultQty: 2, color: '#EAA9B5', image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=300&q=80', description: 'Bông to tròn kiêu sa, độ bền trên 10 ngày' }
    ]
  },
  {
    stepNumber: 3,
    id: 'secondary-flowers',
    title: 'Bước 3: Chọn Hoa & Lá Đi Kèm',
    subtitle: 'Điểm xuyết thêm chiều sâu và sự hài hòa cho bó hoa',
    isMultiSelect: true,
    maxSelect: 3,
    options: [
      { id: 'filler-baby-white', name: 'Hoa Baby Trắng Nhập Khẩu', price: 40000, image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=300&q=80', description: 'Tựa như những bông tuyết nhỏ bồng bềnh' },
      { id: 'filler-tana', name: 'Cúc Tana Mộc Mạc', price: 35000, image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=300&q=80', description: 'Nhẹ nhàng thanh thuần đậm chất đồng nội' },
      { id: 'filler-eucalyptus', name: 'Lá Bạc Khuynh Diệp Bạc', price: 25000, image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=300&q=80', description: 'Màu xanh khói sang trọng thoang thoảng tinh dầu' },
      { id: 'filler-hydrangea-dry', name: 'Cẩm Tú Cầu Xanh Bơ Điểm', price: 45000, image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=300&q=80', description: 'Tạo độ nở đầy đặn và chuyển màu uyển chuyển' }
    ]
  },
  {
    stepNumber: 4,
    id: 'accessories',
    title: 'Bước 4: Nơ Ruy Băng, Đèn & Thiệp Trao Gửi',
    subtitle: 'Hoàn thiện chi tiết cuối cùng và ghi lời nhắn yêu thương',
    options: [
      { id: 'ribbon-voile', name: 'Nơ Ruy Băng Voan Thêu Mer Florist', price: 0, description: 'Miễn phí tặng kèm bó hoa' },
      { id: 'ribbon-satin-gold', name: 'Nơ Ruy Băng Satin Ánh Kim Cao Cấp', price: 15000, description: 'Bóng bẩy, sang trọng cho các dịp kỷ niệm' },
      { id: 'acc-fairy-lights', name: 'Dây Đèn Đom Đóm Ấm Áp (Kèm pin)', price: 30000, description: 'Lung linh huyền ảo khi tặng vào buổi tối' },
      { id: 'acc-mini-bear', name: 'Gấu Bông Mini Cử Nhân / Trái Tim', price: 45000, description: 'Phụ kiện đáng yêu gắn vào hoa' }
    ]
  }
];
