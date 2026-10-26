/**
 * Mer Florist Product Catalog Dataset
 * Real florist items based on Mer Florist (Da Nang, Vietnam)
 * Slogan: "Lãng mạn không hề đắt"
 * Features: High-res WebP photography, dimensions, prep times, meaning & multiple gallery angles.
 */

export const products = [
  {
    id: 'mer-01',
    name: 'Bó Hoa Nắng Hạ Dịu Dàng',
    slug: 'bo-hoa-nang-ha-diu-dang',
    price: 380000,
    originalPrice: 420000,
    category: 'bo-hoa-tuoi',
    occasion: 'sinh-nhat',
    flowerType: 'noi-dia',
    tone: 'pink',
    badge: 'Mẫu Yêu Thích',
    inStock: true,
    prepTime: '60 - 90 phút',
    dimensions: { height: '48cm', width: '36cm' },
    meaning: 'Sự ngọt ngào, lời chúc khởi đầu tuổi mới ngập tràn hạnh phúc và ấm áp tựa ánh nắng ban mai.',
    mainFlowers: ['Hoa hồng pastel Đà Lạt', 'Hoa cúc tana', 'Hoa cẩm chướng viền hồng'],
    secondaryFlowers: ['Baby trắng', 'Lá khuynh diệp (bạc)'],
    description: 'Bó hoa được thiết kế theo phong cách Hàn Quốc tối giản với tone hồng kem dịu ngọt. Từng bông hồng Ohara tuyển chọn kỹ lưỡng, kết hợp hài hòa cùng giấy gói lụa chống thấm cao cấp và nơ ruy băng voan thêu tinh tế.',
    images: {
      main: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80'
      ]
    },
    sizes: [
      { id: 'standard', name: 'Tiêu chuẩn (12 bông)', priceDiff: 0 },
      { id: 'deluxe', name: 'Nâng cao (18 bông + phụ kiện)', priceDiff: 120000 }
    ],
    rating: 4.9,
    reviewsCount: 38
  },
  {
    id: 'mer-02',
    name: 'Bó Hoa Cánh Bướm Mộng Mơ',
    slug: 'bo-hoa-canh-buom-mong-mo',
    price: 520000,
    originalPrice: null,
    category: 'bo-hoa-canh-buom',
    occasion: 'ky-niem-tinh-yeu',
    flowerType: 'nhap-khau',
    tone: 'pink',
    badge: 'Trend 2026',
    inStock: true,
    prepTime: '60 - 90 phút',
    dimensions: { height: '52cm', width: '42cm' },
    meaning: 'Biểu tượng của nét đẹp bay bổng, lãng mạn như đôi cánh bướm chao nghiêng trong vườn hoa xuân.',
    mainFlowers: ['Hồng Juliet nhập khẩu', 'Hoa cúc mẫu đơn', 'Hồng Ohara'],
    secondaryFlowers: ['Cỏ đuôi thỏ', 'Cẩm tú cầu khô', 'Ruy băng lụa tơ tằm'],
    description: 'Thiết kế nếp gấp giấy gói tạo hình cánh bướm xòe mềm mại độc quyền tại Mer Florist Đà Nẵng. Sự kết hợp giữa hoa hồng ngoại kiêu sa và phối màu pastel mang lại vẻ sang trọng khó rời mắt.',
    images: {
      main: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80'
      ]
    },
    sizes: [
      { id: 'standard', name: 'Tiêu chuẩn (Form vừa)', priceDiff: 0 },
      { id: 'deluxe', name: 'Size Đại (Form xòe lộng lẫy)', priceDiff: 180000 }
    ],
    rating: 5.0,
    reviewsCount: 29
  },
  {
    id: 'mer-03',
    name: 'Bó Hoa Ốc Quế Baby Cầu Vồng',
    slug: 'bo-hoa-oc-que-baby-cau-vong',
    price: 180000,
    originalPrice: 200000,
    category: 'bo-hoa-oc-que',
    occasion: 'tot-nghiep',
    flowerType: 'noi-dia',
    tone: 'pink',
    badge: 'Giá Tốt',
    inStock: true,
    prepTime: '45 - 60 phút',
    dimensions: { height: '35cm', width: '22cm' },
    meaning: 'Năng lượng trẻ trung, sự đáng yêu và lời động viên dễ thương cho ngày lễ tốt nghiệp hoặc cuộc hẹn đầu.',
    mainFlowers: ['Baby trắng nhập khẩu phun màu pastel'],
    secondaryFlowers: ['Giấy kraft tạo hình ốc quế', 'Nơ ruy băng carô'],
    description: 'Mẫu hoa cầm tay nhỏ nhắn xinh xắn mô phỏng que kem ốc quế ngọt ngào. Baby Hà Lan bền màu giữ tươi từ 7 - 10 ngày, là món quà check-in chụp ảnh cực kỳ ăn hình.',
    images: {
      main: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80'
      ]
    },
    sizes: [
      { id: 'standard', name: 'Size Mini Ốc Quế', priceDiff: 0 },
      { id: 'double', name: 'Size Đôi (2 Vị Kem)', priceDiff: 90000 }
    ],
    rating: 4.8,
    reviewsCount: 42
  },
  {
    id: 'mer-04',
    name: 'Hộp Mica Trong Suốt Bloom Box',
    slug: 'hop-mica-trong-suot-bloom-box',
    price: 680000,
    originalPrice: null,
    category: 'hop-hoa-vali-hoa',
    occasion: 'ky-niem-tinh-yeu',
    flowerType: 'nhap-khau',
    tone: 'red',
    badge: 'Cao Cấp',
    inStock: true,
    prepTime: '90 - 120 phút',
    dimensions: { height: '32cm', width: '28cm', depth: '28cm' },
    meaning: 'Tình yêu nồng nàn được nâng niu bảo bọc trọn vẹn trong chiếc hộp ký ức trong suốt.',
    mainFlowers: ['Hồng đỏ Ecuador nhung mịn', 'Lan hồ điệp trắng mini'],
    secondaryFlowers: ['Lá sen đá bạc', 'Đèn LED đom đóm ấm áp đi kèm'],
    description: 'Hộp mica acrylic trong suốt chuẩn xuất khẩu, gắn quai xách da sang trọng. Bên trong lót mút xốp dưỡng ẩm giữ hoa tươi tắn cả tuần, kèm hệ thống đèn LED lung linh khi mở vào buổi tối.',
    images: {
      main: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80'
      ]
    },
    sizes: [
      { id: 'standard', name: 'Hộp Vuông 25x25cm', priceDiff: 0 },
      { id: 'deluxe', name: 'Hộp Lớn 30x30cm (Kèm nước hoa mini)', priceDiff: 250000 }
    ],
    rating: 5.0,
    reviewsCount: 19
  },
  {
    id: 'mer-05',
    name: 'Giỏ Mây Khởi Sắc Phát Tài',
    slug: 'gio-may-khoi-sac-phat-tai',
    price: 650000,
    originalPrice: 700000,
    category: 'gio-lang-hoa',
    occasion: 'khai-truong',
    flowerType: 'noi-dia',
    tone: 'yellow-orange',
    badge: 'Đại Cát',
    inStock: true,
    prepTime: '60 - 90 phút',
    dimensions: { height: '55cm', width: '45cm' },
    meaning: 'Sắc vàng cam rực rỡ thu hút tài lộc, chúc doanh nghiệp buôn may bán đắt và thịnh vượng bền lâu.',
    mainFlowers: ['Hoa hướng dương tuyển chọn', 'Hoa hồng vàng ánh kim', 'Đồng tiền cam'],
    secondaryFlowers: ['Lan vũ nữ hoàng kim', 'Lá trắc bách diệp may mắn'],
    description: 'Giỏ mây tre đan tay mộc mạc đậm chất văn hóa Việt, phối cùng hoa tươi gam màu ấm nóng rực rỡ. Phù hợp đặt bàn lễ tân, quầy thu ngân trong ngày khai trương.',
    images: {
      main: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80'
      ]
    },
    sizes: [
      { id: 'standard', name: 'Giỏ Để Bàn Vừa', priceDiff: 0 },
      { id: 'deluxe', name: 'Lẵng 2 Tầng Bề Thế', priceDiff: 300000 }
    ],
    rating: 4.9,
    reviewsCount: 31
  },
  {
    id: 'mer-06',
    name: 'Bó Hoa Cúc Tana Mộc Mạc',
    slug: 'bo-hoa-cuc-tana-moc-mac',
    price: 260000,
    originalPrice: null,
    category: 'bo-hoa-tuoi',
    occasion: 'sinh-nhat',
    flowerType: 'noi-dia',
    tone: 'white',
    badge: 'Mộc Mạc',
    inStock: true,
    prepTime: '45 - 60 phút',
    dimensions: { height: '42cm', width: '30cm' },
    meaning: 'Nét tinh khôi, giản dị nhưng tràn đầy sức sống của tình bạn thanh xuân trong trẻo.',
    mainFlowers: ['Cúc Tana Hà Lan thuần khiết'],
    secondaryFlowers: ['Giấy báo Vintage Paris', 'Dây thừng gai mộc'],
    description: 'Những đóa cúc tana nhỏ xinh mang hương thơm ngai ngái dịu ngọt của đồng nội. Món quà hoàn hảo cho những cô nàng yêu thích vẻ đẹp tự nhiên, không phô trương cầu kỳ.',
    images: {
      main: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80'
      ]
    },
    sizes: [
      { id: 'standard', name: 'Bó Vừa (Dễ thương)', priceDiff: 0 },
      { id: 'deluxe', name: 'Bó Ôm Lớn (Cực ăn ảnh)', priceDiff: 110000 }
    ],
    rating: 4.8,
    reviewsCount: 45
  },
  {
    id: 'mer-07',
    name: 'Bó Hoa Tulip Trắng Thanh Khiết',
    slug: 'bo-hoa-tulip-trang-thanh-khiet',
    price: 490000,
    originalPrice: 550000,
    category: 'bo-hoa-tuoi',
    occasion: 'ky-niem-tinh-yeu',
    flowerType: 'nhap-khau',
    tone: 'white',
    badge: 'Nhập Khẩu',
    inStock: true,
    prepTime: '60 phút',
    dimensions: { height: '40cm', width: '28cm' },
    meaning: 'Sự tha thứ, tình yêu chân thành và lòng ngưỡng mộ sâu sắc dành cho người phụ nữ bạn thương.',
    mainFlowers: ['Tulip trắng Hà Lan nhập khẩu'],
    secondaryFlowers: ['Lá măng mềm', 'Giấy lụa mờ mờ màng sương'],
    description: '10 đóa Tulip trắng muốt kiêu sa nhập thẳng từ vườn Hà Lan. Dáng hoa thanh thoát, thân mềm uốn lượn tự nhiên, toát lên thần thái sang trọng đậm phong cách Bắc Âu.',
    images: {
      main: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=700&q=80'
      ]
    },
    sizes: [
      { id: 'standard', name: 'Bó 10 Bông Tulip', priceDiff: 0 },
      { id: 'deluxe', name: 'Bó 20 Bông Tulip Kiêu Sa', priceDiff: 380000 }
    ],
    rating: 4.9,
    reviewsCount: 22
  },
  {
    id: 'mer-08',
    name: 'Kệ Hoa Khai Trương Tấn Tài Tấn Lộc',
    slug: 'ke-hoa-khai-truong-tan-tai-tan-loc',
    price: 1150000,
    originalPrice: null,
    category: 'ke-hoa-lon',
    occasion: 'khai-truong',
    flowerType: 'nhap-khau',
    tone: 'red',
    badge: 'Bề Thế',
    inStock: true,
    prepTime: '120 - 180 phút',
    dimensions: { height: '175cm', width: '85cm' },
    meaning: 'Lời chúc làm ăn phát đạt, tiền vào như nước, vạn sự hanh thông trên thương trường.',
    mainFlowers: ['Hồng đỏ môn', 'Hoa thiên điểu kiêu hãnh', 'Hồng Ohara nhung'],
    secondaryFlowers: ['Lá trầu bà nam mỹ xẻ', 'Lan Mokara đỏ rực'],
    description: 'Kệ hoa 3 chân gỗ vững chãi được cắm tròn đầy, bung tỏa sinh khí mạnh mẽ. Tone màu đỏ rực rỡ và cam vàng đem lại may mắn tột đỉnh cho gia chủ trong ngày khai mạc.',
    images: {
      main: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=700&q=80'
      ]
    },
    sizes: [
      { id: 'standard', name: 'Kệ 1 Tầng Cao Cấp (1m75)', priceDiff: 0 },
      { id: 'deluxe', name: 'Kệ 2 Tầng Đại Lộc (2m05)', priceDiff: 450000 }
    ],
    rating: 5.0,
    reviewsCount: 14
  },
  {
    id: 'mer-09',
    name: 'Bó Hoa Hướng Dương Rạng Ngời Tri Thức',
    slug: 'bo-hoa-huong-duong-rang-ngoi-tri-thuc',
    price: 320000,
    originalPrice: 350000,
    category: 'bo-hoa-tuoi',
    occasion: 'tot-nghiep',
    flowerType: 'noi-dia',
    tone: 'yellow-orange',
    badge: 'Tốt Nghiệp',
    inStock: true,
    prepTime: '60 phút',
    dimensions: { height: '50cm', width: '35cm' },
    meaning: 'Niềm tin, hy vọng và sức mạnh kiên định luôn hướng về phía ánh sáng mặt trời.',
    mainFlowers: ['Hướng dương Đà Lạt bông lớn', 'Cúc calimero xanh'],
    secondaryFlowers: ['Baby trắng', 'Lá trắc bách diệp', 'Giấy xi măng vintage'],
    description: '5 đóa hướng dương nở rộ rực rỡ kết hợp cùng chú gấu tốt nghiệp mini đáng yêu. Món quà truyền cảm hứng tuyệt vời chúc các tân cử nhân vững bước tương lai.',
    images: {
      main: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80'
      ]
    },
    sizes: [
      { id: 'standard', name: 'Bó 5 Bông Hướng Dương', priceDiff: 0 },
      { id: 'deluxe', name: 'Bó 7 Bông + Gấu Bông Cử Nhân', priceDiff: 90000 }
    ],
    rating: 4.9,
    reviewsCount: 51
  },
  {
    id: 'mer-10',
    name: 'Lẵng Hoa Lan Hồ Điệp Trắng Kính Viếng',
    slug: 'lang-hoa-lan-ho-diep-trang-kinh-vieng',
    price: 850000,
    originalPrice: null,
    category: 'gio-lang-hoa',
    occasion: 'chia-buon',
    flowerType: 'noi-dia',
    tone: 'white',
    badge: 'Trang Trọng',
    inStock: true,
    prepTime: '90 phút',
    dimensions: { height: '70cm', width: '50cm' },
    meaning: 'Lời tiễn biệt trang nghiêm, thanh khiết và niềm tiếc thương vô hạn gửi người đã khuất.',
    mainFlowers: ['Lan hồ điệp trắng tinh', 'Hoa cúc trắng', 'Hoa ly trắng'],
    secondaryFlowers: ['Lá cau kiểng', 'Lá dương xỉ pháp'],
    description: 'Thiết kế trang trọng, lịch thiệp, gửi trọn tấm lòng chia sẻ chân thành cùng gia quyến trong những giây phút thiêng liêng nhất.',
    images: {
      main: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80'
      ]
    },
    sizes: [
      { id: 'standard', name: 'Lẵng Vừa Trang Trọng', priceDiff: 0 },
      { id: 'deluxe', name: 'Kệ Kính Viếng Cỡ Lớn', priceDiff: 400000 }
    ],
    rating: 5.0,
    reviewsCount: 12
  },
  {
    id: 'mer-11',
    name: 'Set Hoa Tươi & Bánh Bento Sinh Nhật',
    slug: 'set-hoa-tuoi-va-banh-bento-sinh-nhat',
    price: 580000,
    originalPrice: 620000,
    category: 'set-hoa-banh',
    occasion: 'sinh-nhat',
    flowerType: 'noi-dia',
    tone: 'pink',
    badge: 'Set Quà Tặng',
    inStock: true,
    prepTime: '90 - 120 phút',
    dimensions: { height: '22cm', width: '38cm', depth: '24cm' },
    meaning: 'Nhân đôi niềm vui với sự hòa quyện giữa hương hoa thơm ngát và chiếc bánh ngọt ngào.',
    mainFlowers: ['Hồng Juliet', 'Cẩm tú cầu hồng', 'Cúc pingpong'],
    secondaryFlowers: ['Bánh bento kem phô mai handmade 10cm', 'Nến số tuổi'],
    description: 'Hộp quà đôi gồm nửa ngăn hoa tươi tone pastel rực rỡ và nửa ngăn bánh kem bento vị vani cốt dâu tây tươi. Giải pháp quà tặng sinh nhật hoàn hảo, không cần mua bánh riêng.',
    images: {
      main: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80'
      ]
    },
    sizes: [
      { id: 'standard', name: 'Set Bánh Bento 10cm + Khay Hoa', priceDiff: 0 },
      { id: 'deluxe', name: 'Set Bánh 14cm + Khay Hoa Lớn', priceDiff: 190000 }
    ],
    rating: 4.9,
    reviewsCount: 34
  },
  {
    id: 'mer-12',
    name: 'Bó Hoa Hồng Kem Dâu Thơ Mộng',
    slug: 'bo-hoa-hong-kem-dau-tho-mong',
    price: 450000,
    originalPrice: null,
    category: 'bo-hoa-tuoi',
    occasion: 'ky-niem-tinh-yeu',
    flowerType: 'noi-dia',
    tone: 'pink',
    badge: 'Mới Về',
    inStock: true,
    prepTime: '60 phút',
    dimensions: { height: '46cm', width: '34cm' },
    meaning: 'Nét thơ mộng của tình đầu trong trẻo và lời hứa bên nhau bình yên qua năm tháng.',
    mainFlowers: ['Hồng kem dâu Đà Lạt', 'Hồng trắng cồ', 'Cẩm chướng hồng'],
    secondaryFlowers: ['Lá tai thỏ', 'Hoa tuyết mai baby'],
    description: 'Sự kết hợp màu sắc như một ly kem dâu mát lạnh ngày hè Đà Nẵng. Phong cách bó tròn thoải mái, giữ trọn nét tự nhiên của hoa cỏ thiên nhiên.',
    images: {
      main: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80'
      ]
    },
    sizes: [
      { id: 'standard', name: 'Tiêu chuẩn (15 bông)', priceDiff: 0 },
      { id: 'deluxe', name: 'Bó Lớn (25 bông cao cấp)', priceDiff: 170000 }
    ],
    rating: 4.9,
    reviewsCount: 27
  }
];

export const shopInfo = {
  name: 'Mer Florist',
  tagline: 'Lãng mạn không hề đắt',
  address: '124/8 Lê Hồng Phong, Q. Hải Châu, TP. Đà Nẵng',
  hotline: '0905 123 456',
  email: 'merflorist.danang@gmail.com',
  workingHours: '07:30 - 21:30 (Tất cả các ngày trong tuần)',
  socials: {
    facebook: 'https://facebook.com/merflorist.danang',
    instagram: 'https://instagram.com/merflorist.danang',
    tiktok: 'https://tiktok.com/@merflorist',
    zalo: 'https://zalo.me/0905123456'
  },
  deliveryPolicy: {
    city: 'Đà Nẵng',
    prepTime: '60 - 90 phút',
    freeShipThreshold: 500000,
    shippingSlots: [
      { id: 'morning', label: 'Buổi sáng (08:00 – 11:30)' },
      { id: 'afternoon', label: 'Buổi chiều (13:30 – 17:30)' },
      { id: 'evening', label: 'Buổi tối (18:00 – 21:00)' }
    ]
  }
};
