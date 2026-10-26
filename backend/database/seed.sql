-- ====================================================================
-- DATABASE SEED DATA: MER FLORIST DA NANG
-- System: MySQL 8.0+
-- ====================================================================

USE merflorist_db;

-- 1. Insert Categories
INSERT INTO categories (id, name, slug, group_id, group_title, badge, is_featured) VALUES
('bo-hoa-tuoi', 'Bó hoa tươi truyền thống', 'bo-hoa-tuoi', 'packaging-styles', 'Kiểu dáng & Đóng gói', NULL, TRUE),
('bo-hoa-canh-buom', 'Bó hoa cánh bướm', 'bo-hoa-canh-buom', 'packaging-styles', 'Kiểu dáng & Đóng gói', 'Trend 2026', TRUE),
('bo-hoa-oc-que', 'Bó hoa ốc quế mini', 'bo-hoa-oc-que', 'packaging-styles', 'Kiểu dáng & Đóng gói', 'Hot', FALSE),
('hop-hoa-vali-hoa', 'Hộp hoa & Vali hoa mica', 'hop-hoa-vali-hoa', 'packaging-styles', 'Kiểu dáng & Đóng gói', 'Cao cấp', FALSE),
('gio-lang-hoa', 'Giỏ mây & Lẵng hoa để bàn', 'gio-lang-hoa', 'packaging-styles', 'Kiểu dáng & Đóng gói', NULL, TRUE),
('ke-hoa-lon', 'Kệ hoa nghệ thuật cỡ lớn', 'ke-hoa-lon', 'packaging-styles', 'Kiểu dáng & Đóng gói', NULL, FALSE),

('sinh-nhat', 'Hoa chúc mừng sinh nhật', 'sinh-nhat', 'occasions', 'Dịp trao tặng', NULL, TRUE),
('ky-niem-tinh-yeu', 'Kỷ niệm & Tình yêu ngọt ngào', 'ky-niem-tinh-yeu', 'occasions', 'Dịp trao tặng', NULL, TRUE),
('khai-truong', 'Chúc mừng khai trương đại phát', 'khai-truong', 'occasions', 'Dịp trao tặng', NULL, TRUE),
('tot-nghiep', 'Hoa lễ tốt nghiệp & Vinh danh', 'tot-nghiep', 'occasions', 'Dịp trao tặng', NULL, FALSE),
('chia-buon', 'Hoa kính viếng & Chia buồn', 'chia-buon', 'occasions', 'Dịp trao tặng', NULL, FALSE),

('tet-binh-ngo', 'Bộ sưu tập Tết Bính Ngọ 2026', 'tet-binh-ngo', 'special-collections', 'Đặc biệt & Sự kiện', 'Mới', TRUE),
('set-hoa-banh', 'Set Hoa tươi & Bánh kem mini', 'set-hoa-banh', 'special-collections', 'Đặc biệt & Sự kiện', 'Hot', TRUE),
('hoa-cuoi', 'Hoa cưới cầm tay nghệ thuật', 'hoa-cuoi', 'special-collections', 'Đặc biệt & Sự kiện', NULL, FALSE);

-- 2. Insert Products
INSERT INTO products (id, name, slug, price, original_price, category_id, occasion, flower_type, tone, badge, in_stock, prep_time, height_cm, width_cm, meaning, description, main_flowers, secondary_flowers, images, rating, reviews_count) VALUES
(
  'mer-01',
  'Bó Hoa Nắng Hạ Dịu Dàng',
  'bo-hoa-nang-ha-diu-dang',
  380000,
  420000,
  'bo-hoa-tuoi',
  'sinh-nhat',
  'noi-dia',
  'pink',
  'Mẫu Yêu Thích',
  TRUE,
  '60 - 90 phút',
  '48cm',
  '36cm',
  'Sự ngọt ngào, lời chúc khởi đầu tuổi mới ngập tràn hạnh phúc và ấm áp tựa ánh nắng ban mai.',
  'Bó hoa được thiết kế theo phong cách Hàn Quốc tối giản với tone hồng kem dịu ngọt. Từng bông hồng Ohara tuyển chọn kỹ lưỡng, kết hợp hài hòa cùng giấy gói lụa chống thấm cao cấp và nơ ruy băng voan thêu tinh tế.',
  '["Hoa hồng pastel Đà Lạt", "Hoa cúc tana", "Hoa cẩm chướng viền hồng"]',
  '["Baby trắng", "Lá khuynh diệp (bạc)"]',
  '{"main": "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80", "gallery": ["https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80", "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80", "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80"]}',
  4.9,
  38
),
(
  'mer-02',
  'Bó Hoa Cánh Bướm Mộng Mơ',
  'bo-hoa-canh-buom-mong-mo',
  520000,
  NULL,
  'bo-hoa-canh-buom',
  'ky-niem-tinh-yeu',
  'nhap-khau',
  'pink',
  'Trend 2026',
  TRUE,
  '60 - 90 phút',
  '52cm',
  '42cm',
  'Biểu tượng của nét đẹp bay bổng, lãng mạn như đôi cánh bướm chao nghiêng trong vườn hoa xuân.',
  'Thiết kế nếp gấp giấy gói tạo hình cánh bướm xòe mềm mại độc quyền tại Mer Florist Đà Nẵng. Sự kết hợp giữa hoa hồng ngoại kiêu sa và phối màu pastel mang lại vẻ sang trọng khó rời mắt.',
  '["Hồng Juliet nhập khẩu", "Hoa cúc mẫu đơn", "Hồng Ohara"]',
  '["Cỏ đuôi thỏ", "Cẩm tú cầu khô", "Ruy băng lụa tơ tằm"]',
  '{"main": "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=700&q=80", "gallery": ["https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=700&q=80", "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=700&q=80", "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80"]}',
  5.0,
  29
),
(
  'mer-03',
  'Bó Hoa Ốc Quế Baby Cầu Vồng',
  'bo-hoa-oc-que-baby-cau-vong',
  180000,
  200000,
  'bo-hoa-oc-que',
  'tot-nghiep',
  'noi-dia',
  'pink',
  'Giá Tốt',
  TRUE,
  '45 - 60 phút',
  '35cm',
  '22cm',
  'Năng lượng trẻ trung, sự đáng yêu và lời động viên dễ thương cho ngày lễ tốt nghiệp hoặc cuộc hẹn đầu.',
  'Mẫu hoa cầm tay nhỏ nhắn xinh xắn mô phỏng que kem ốc quế ngọt ngào. Baby Hà Lan bền màu giữ tươi từ 7 - 10 ngày, là món quà check-in chụp ảnh cực kỳ ăn hình.',
  '["Baby trắng nhập khẩu phun màu pastel"]',
  '["Giấy kraft tạo hình ốc quế", "Nơ ruy băng carô"]',
  '{"main": "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80", "gallery": ["https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80", "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80"]}',
  4.8,
  42
),
(
  'mer-04',
  'Hộp Mica Trong Suốt Bloom Box',
  'hop-mica-trong-suot-bloom-box',
  680000,
  NULL,
  'hop-hoa-vali-hoa',
  'ky-niem-tinh-yeu',
  'nhap-khau',
  'red',
  'Cao Cấp',
  TRUE,
  '90 - 120 phút',
  '32cm',
  '28cm',
  'Tình yêu nồng nàn được nâng niu bảo bọc trọn vẹn trong chiếc hộp ký ức trong suốt.',
  'Hộp mica acrylic trong suốt chuẩn xuất khẩu, gắn quai xách da sang trọng. Bên trong lót mút xốp dưỡng ẩm giữ hoa tươi tắn cả tuần, kèm hệ thống đèn LED lung linh khi mở vào buổi tối.',
  '["Hồng đỏ Ecuador nhung mịn", "Lan hồ điệp trắng mini"]',
  '["Lá sen đá bạc", "Đèn LED đom đóm ấm áp đi kèm"]',
  '{"main": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80", "gallery": ["https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80", "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=700&q=80"]}',
  5.0,
  19
),
(
  'mer-05',
  'Giỏ Mây Khởi Sắc Phát Tài',
  'gio-may-khoi-sac-phat-tai',
  650000,
  700000,
  'gio-lang-hoa',
  'khai-truong',
  'noi-dia',
  'yellow-orange',
  'Đại Cát',
  TRUE,
  '60 - 90 phút',
  '55cm',
  '45cm',
  'Sắc vàng cam rực rỡ thu hút tài lộc, chúc doanh nghiệp buôn may bán đắt và thịnh vượng bền lâu.',
  'Giỏ mây tre đan tay mộc mạc đậm chất văn hóa Việt, phối cùng hoa tươi gam màu ấm nóng rực rỡ. Phù hợp đặt bàn lễ tân, quầy thu ngân trong ngày khai trương.',
  '["Hoa hướng dương tuyển chọn", "Hoa hồng vàng ánh kim", "Đồng tiền cam"]',
  '["Lan vũ nữ hoàng kim", "Lá trắc bách diệp may mắn"]',
  '{"main": "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=700&q=80", "gallery": ["https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=700&q=80", "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80"]}',
  4.9,
  31
),
(
  'mer-06',
  'Bó Hoa Cúc Tana Mộc Mạc',
  'bo-hoa-cuc-tana-moc-mac',
  260000,
  NULL,
  'bo-hoa-tuoi',
  'sinh-nhat',
  'noi-dia',
  'white',
  'Mộc Mạc',
  TRUE,
  '45 - 60 phút',
  '42cm',
  '30cm',
  'Nét tinh khôi, giản dị nhưng tràn đầy sức sống của tình bạn thanh xuân trong trẻo.',
  'Những đóa cúc tana nhỏ xinh mang hương thơm ngai ngái dịu ngọt của đồng nội. Món quà hoàn hảo cho những cô nàng yêu thích vẻ đẹp tự nhiên, không phô trương cầu kỳ.',
  '["Cúc Tana Hà Lan thuần khiết"]',
  '["Giấy báo Vintage Paris", "Dây thừng gai mộc"]',
  '{"main": "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80", "gallery": ["https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80", "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80"]}',
  4.8,
  45
);

-- 3. Insert Product Sizes
INSERT INTO product_sizes (product_id, size_key, name, price_diff) VALUES
('mer-01', 'standard', 'Tiêu chuẩn (12 bông)', 0),
('mer-01', 'deluxe', 'Nâng cao (18 bông + phụ kiện)', 120000),
('mer-02', 'standard', 'Tiêu chuẩn (Form vừa)', 0),
('mer-02', 'deluxe', 'Size Đại (Form xòe lộng lẫy)', 180000),
('mer-03', 'standard', 'Size Mini Ốc Quế', 0),
('mer-03', 'double', 'Size Đôi (2 Vị Kem)', 90000),
('mer-04', 'standard', 'Hộp Vuông 25x25cm', 0),
('mer-04', 'deluxe', 'Hộp Lớn 30x30cm (Kèm nước hoa mini)', 250000);

-- 4. Insert Reviews
INSERT INTO reviews (id, customer_name, avatar, product_name, rating, date_label, content, tag) VALUES
('rev-01', 'Phương Linh (@linhlinh.danang)', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', 'Bó Hoa Nắng Hạ Dịu Dàng', 5, '2 ngày trước', 'Shop cắm hoa xinh xỉu luôn á! Tone màu pastel y hệt ảnh trên web, ship đến Hải Châu hoa vẫn tươi rói và thơm nức. Bạn mình nhận được thích mê, chụp ảnh sống ảo cả buổi chiều!', 'Feedback Instagram Story'),
('rev-02', 'Minh Hoàng (Đại học Bách Khoa ĐN)', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', 'Bó Hoa Hướng Dương Tri Thức', 5, '1 tuần trước', 'Đặt hoa gấp cho lễ tốt nghiệp của bạn gái lúc 8h sáng, đúng 9h15 đã giao tận sảnh trường. Thiệp viết tay nét chữ nắn nót rất có tâm. Giá sinh viên mà hoa xịn thực sự!', 'Đã mua hàng tại shop'),
('rev-03', 'Thu Thảo (@thaole.coffee)', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80', 'Bó Hoa Cánh Bướm Mộng Mơ', 5, '2 tuần trước', 'Mẫu cánh bướm này ở Đà Nẵng thấy mỗi Mer làm chuẩn form Hàn Quốc nhất. Giấy gấp tinh tế, hoa hồng nở vừa độ rất thơm. Chắc chắn sẽ ủng hộ shop dài dài!', 'Feedback Instagram Story');

-- 5. Insert Custom Bouquet Options
INSERT INTO custom_bouquet_options (id, step_number, step_name, name, price, unit_price, color_code, image_url, description) VALUES
('wrap-kraft', 1, 'Giấy Gói & Lẵng', 'Giấy Kraft Mộc Vintage', 20000, 0, '#C8A97E', 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80', 'Cổ điển, mộc mạc và thân thiện môi trường'),
('wrap-pink-korean', 1, 'Giấy Gói & Lẵng', 'Giấy Lụa Mờ Hàn Quốc Hồng Phấn', 35000, 0, '#F6CED5', 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=300&q=80', 'Ngọt ngào, nữ tính chuẩn style Seoul'),
('flower-rose-ohara', 2, 'Hoa Chính', 'Hồng Ohara Đà Lạt (Thơm ngát)', 0, 25000, '#F6CED5', 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=300&q=80', 'Hương thơm nồng nàn, form cánh cúp tinh xảo'),
('flower-tulip-white', 2, 'Hoa Chính', 'Tulip Trắng Hà Lan Nhập', 0, 38000, '#FFFFFF', 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=300&q=80', 'Dáng hoa thanh mảnh, thuần khiết quý phái'),
('filler-baby-white', 3, 'Hoa & Lá Phụ', 'Hoa Baby Trắng Nhập Khẩu', 40000, 0, NULL, 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=300&q=80', 'Tựa như những bông tuyết nhỏ bồng bềnh'),
('ribbon-voile', 4, 'Phụ Kiện & Thiệp', 'Nơ Ruy Băng Voan Thêu Mer Florist', 0, 0, NULL, NULL, 'Miễn phí tặng kèm bó hoa'),
('acc-fairy-lights', 4, 'Phụ Kiện & Thiệp', 'Dây Đèn Đom Đóm Ấm Áp (Kèm pin)', 30000, 0, NULL, NULL, 'Lung linh huyền ảo khi tặng vào buổi tối');
