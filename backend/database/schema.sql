-- ====================================================================
-- DATABASE SCHEMA: MER FLORIST DA NANG
-- System: MySQL 8.0+
-- Project: Redesign Website Mer Florist (merflorist.top)
-- Slogan: "Lãng mạn không hề đắt"
-- ====================================================================

CREATE DATABASE IF NOT EXISTS merflorist_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE merflorist_db;

-- 1. Table: categories (Danh mục sản phẩm & Mega Menu)
CREATE TABLE IF NOT EXISTS categories (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  slug VARCHAR(150) NOT NULL UNIQUE,
  group_id VARCHAR(50) NOT NULL, -- packaging-styles, occasions, special-collections
  group_title VARCHAR(100) NOT NULL,
  badge VARCHAR(50) DEFAULT NULL,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Table: products (Sản phẩm hoa tươi)
CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  slug VARCHAR(200) NOT NULL UNIQUE,
  price INT NOT NULL,
  original_price INT DEFAULT NULL,
  category_id VARCHAR(50) NOT NULL,
  occasion VARCHAR(50) NOT NULL, -- sinh-nhat, ky-niem-tinh-yeu, khai-truong, tot-nghiep, chia-buon
  flower_type VARCHAR(50) NOT NULL, -- noi-dia, nhap-khau, sap-lua
  tone VARCHAR(50) NOT NULL, -- pink, white, red, yellow-orange, blue-purple
  badge VARCHAR(50) DEFAULT NULL,
  in_stock BOOLEAN DEFAULT TRUE,
  prep_time VARCHAR(100) DEFAULT '60 - 90 phút',
  height_cm VARCHAR(20) DEFAULT '45cm',
  width_cm VARCHAR(20) DEFAULT '35cm',
  depth_cm VARCHAR(20) DEFAULT NULL,
  meaning TEXT,
  description TEXT,
  main_flowers JSON,
  secondary_flowers JSON,
  images JSON, -- { main: string, gallery: string[] }
  rating DECIMAL(2,1) DEFAULT 5.0,
  reviews_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- 3. Table: product_sizes (Biến thể kích thước / phiên bản)
CREATE TABLE IF NOT EXISTS product_sizes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id VARCHAR(50) NOT NULL,
  size_key VARCHAR(50) NOT NULL, -- standard, deluxe, etc.
  name VARCHAR(100) NOT NULL,
  price_diff INT DEFAULT 0,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- 4. Table: reviews (Đánh giá thực tế từ khách hàng)
CREATE TABLE IF NOT EXISTS reviews (
  id VARCHAR(50) PRIMARY KEY,
  customer_name VARCHAR(100) NOT NULL,
  avatar VARCHAR(255),
  product_id VARCHAR(50),
  product_name VARCHAR(200),
  rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  date_label VARCHAR(50),
  content TEXT NOT NULL,
  tag VARCHAR(100) DEFAULT 'Feedback Instagram Story',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Table: custom_bouquet_options (Thành phần tự phối hoa theo 4 bước)
CREATE TABLE IF NOT EXISTS custom_bouquet_options (
  id VARCHAR(50) PRIMARY KEY,
  step_number INT NOT NULL, -- 1: Wrapper, 2: Primary Flower, 3: Secondary Flower, 4: Accessories
  step_name VARCHAR(100) NOT NULL,
  name VARCHAR(150) NOT NULL,
  price INT NOT NULL DEFAULT 0,
  unit_price INT DEFAULT 0,
  color_code VARCHAR(20) DEFAULT NULL,
  image_url VARCHAR(255),
  description TEXT
);

-- 6. Table: orders (Đơn đặt hoa - Tách thông tin người đặt & người nhận)
CREATE TABLE IF NOT EXISTS orders (
  id VARCHAR(50) PRIMARY KEY,
  order_code VARCHAR(30) NOT NULL UNIQUE,
  
  -- Sender info (Người đặt)
  sender_name VARCHAR(100) NOT NULL,
  sender_phone VARCHAR(20) NOT NULL,
  sender_email VARCHAR(100),
  
  -- Receiver info (Người nhận tại Đà Nẵng)
  receiver_name VARCHAR(100) NOT NULL,
  receiver_phone VARCHAR(20) NOT NULL,
  receiver_address TEXT NOT NULL,
  
  -- Delivery Schedule (Ngày & Khung giờ mong muốn)
  delivery_date DATE NOT NULL,
  delivery_time_slot VARCHAR(50) NOT NULL, -- morning (8h-11h30), afternoon (13h30-17h30), evening (18h-21h)
  greeting_card_message TEXT,
  
  -- Payment & Pricing
  payment_method VARCHAR(50) NOT NULL, -- cod, qr_napas
  subtotal INT NOT NULL,
  shipping_fee INT NOT NULL DEFAULT 0,
  total_amount INT NOT NULL,
  
  -- Order Status
  status VARCHAR(50) DEFAULT 'pending', -- pending, preparing, delivering, completed, cancelled
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Table: order_items (Chi tiết món hàng trong đơn)
CREATE TABLE IF NOT EXISTS order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id VARCHAR(50) NOT NULL,
  product_id VARCHAR(50),
  product_name VARCHAR(200) NOT NULL,
  selected_size VARCHAR(100),
  quantity INT NOT NULL DEFAULT 1,
  unit_price INT NOT NULL,
  total_price INT NOT NULL,
  custom_components JSON DEFAULT NULL, -- if custom bouquet
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);
