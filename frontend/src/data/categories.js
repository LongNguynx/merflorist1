/**
 * Mer Florist Category Taxonomy & Navigation Hierarchy
 * Structured strictly according to Section 2.4 & 4.1 in Specification
 */

export const megaMenuGroups = [
  {
    id: 'packaging-styles',
    title: 'Kiểu dáng & Đóng gói',
    icon: 'flower-tulip',
    items: [
      { id: 'bo-hoa-tuoi', name: 'Bó hoa tươi truyền thống', slug: 'bo-hoa-tuoi', count: 18, isFeatured: true },
      { id: 'bo-hoa-canh-buom', name: 'Bó hoa cánh bướm', slug: 'bo-hoa-canh-buom', count: 12, isNew: true },
      { id: 'bo-hoa-oc-que', name: 'Bó hoa ốc quế mini', slug: 'bo-hoa-oc-que', count: 8, badge: 'Hot' },
      { id: 'hop-hoa-vali-hoa', name: 'Hộp hoa & Vali hoa mica', slug: 'hop-hoa-vali-hoa', count: 10 },
      { id: 'gio-lang-hoa', name: 'Giỏ mây & Lẵng hoa để bàn', slug: 'gio-lang-hoa', count: 14 },
      { id: 'ke-hoa-lon', name: 'Kệ hoa nghệ thuật cỡ lớn', slug: 'ke-hoa-lon', count: 9 }
    ]
  },
  {
    id: 'occasions',
    title: 'Dịp trao tặng',
    icon: 'calendar-heart',
    items: [
      { id: 'sinh-nhat', name: 'Hoa chúc mừng sinh nhật', slug: 'sinh-nhat', count: 24, isFeatured: true },
      { id: 'ky-niem-tinh-yeu', name: 'Kỷ niệm & Tình yêu ngọt ngào', slug: 'ky-niem-tinh-yeu', count: 20 },
      { id: 'khai-truong', name: 'Chúc mừng khai trương đại phát', slug: 'khai-truong', count: 16 },
      { id: 'tot-nghiep', name: 'Hoa lễ tốt nghiệp & Vinh danh', slug: 'tot-nghiep', count: 11 },
      { id: 'chia-buon', name: 'Hoa kính viếng & Chia buồn', slug: 'chia-buon', count: 6 }
    ]
  },
  {
    id: 'special-collections',
    title: 'Đặc biệt & Sự kiện',
    icon: 'sparkles',
    items: [
      { id: 'tet-binh-ngo', name: 'Bộ sưu tập Tết Bính Ngọ 2026', slug: 'tet-binh-ngo', count: 8, badge: 'Mới' },
      { id: 'set-hoa-banh', name: 'Set Hoa tươi & Bánh kem mini', slug: 'set-hoa-banh', count: 9, isFeatured: true },
      { id: 'hoa-cuoi', name: 'Hoa cưới cầm tay nghệ thuật', slug: 'hoa-cuoi', count: 7 },
      { id: 'tu-thiet-ke', name: 'Tự phối hoa theo ý muốn', slug: 'custom-bouquet', link: 'custom-bouquet.html', badge: '✨ Trải nghiệm' }
    ]
  }
];

export const quickOccasions = [
  {
    id: 'sinh-nhat',
    name: 'Sinh nhật',
    slug: 'sinh-nhat',
    icon: '🎁',
    description: 'Rạng rỡ & Ấm áp',
    tagline: 'Gửi ngàn lời chúc tuổi mới yêu thương'
  },
  {
    id: 'ky-niem-tinh-yeu',
    name: 'Tình yêu & Kỷ niệm',
    slug: 'ky-niem-tinh-yeu',
    icon: '💖',
    description: 'Ngọt ngào & Tinh tế',
    tagline: 'Thay lời trái tim muốn nói'
  },
  {
    id: 'khai-truong',
    name: 'Khai trương',
    slug: 'khai-truong',
    icon: '🎉',
    description: 'Tài lộc & Đại phát',
    tagline: 'Khởi đầu hồng phát, vạn sự hanh thông'
  },
  {
    id: 'tot-nghiep',
    name: 'Lễ tốt nghiệp',
    slug: 'tot-nghiep',
    icon: '🎓',
    description: 'Tự hào & Vươn xa',
    tagline: 'Chúc mừng chặng đường tri thức mới'
  },
  {
    id: 'bo-hoa-canh-buom',
    name: 'Bó cánh bướm',
    slug: 'bo-hoa-canh-buom',
    icon: '🦋',
    description: 'Dịu dàng xu hướng',
    tagline: 'Mẫu thiết kế hot trend Hàn Quốc'
  },
  {
    id: 'hop-hoa-vali-hoa',
    name: 'Vali hoa sang trọng',
    slug: 'hop-hoa-vali-hoa',
    icon: '💼',
    description: 'Hiện đại & Đẳng cấp',
    tagline: 'Món quà bất ngờ gói trọn cảm xúc'
  }
];

export const filterOptions = {
  priceRanges: [
    { id: 'under-300', label: 'Dưới 300.000đ', min: 0, max: 300000 },
    { id: '300-600', label: '300.000đ – 600.000đ', min: 300000, max: 600000 },
    { id: 'above-600', label: 'Trên 600.000đ', min: 600000, max: 99999999 }
  ],
  flowerTypes: [
    { id: 'noi-dia', label: 'Hoa tươi nội địa (Đà Lạt)' },
    { id: 'nhap-khau', label: 'Hoa nhập khẩu cao cấp' },
    { id: 'sap-lua', label: 'Hoa sáp & Hoa khô nghệ thuật' }
  ],
  tones: [
    { id: 'pink', label: 'Hồng phấn pastel', hex: '#F6CED5' },
    { id: 'white', label: 'Trắng tinh khôi', hex: '#FFFFFF' },
    { id: 'red', label: 'Đỏ nhung sang trọng', hex: '#C0392B' },
    { id: 'yellow-orange', label: 'Vàng nắng & Cam ấm', hex: '#F39C12' },
    { id: 'blue-purple', label: 'Xanh bơ & Tím thơ', hex: '#8E44AD' }
  ],
  sortOptions: [
    { id: 'popular', label: 'Phổ biến nhất' },
    { id: 'price-asc', label: 'Giá: Thấp đến cao' },
    { id: 'price-desc', label: 'Giá: Cao đến thấp' },
    { id: 'newest', label: 'Mới nhất' }
  ]
};
