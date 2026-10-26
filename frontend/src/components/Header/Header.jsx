import React, { useState } from 'react';
import { 
  Heart, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Sparkles, 
  Clock, 
  Truck 
} from 'lucide-react';
import LiveSearch from '../Search/LiveSearch.jsx';
import MegaMenu from './MegaMenu.jsx';
import { useCart } from '../../context/CartContext.jsx';
import { shopInfo } from '../../data/products.js';

export default function Header({ currentRoute = 'home', onNavigate }) {
  const { totalItemsCount, wishlist, setIsMiniCartOpen } = useCart();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSelectSearchProduct = (product) => {
    if (onNavigate) onNavigate('product-detail', { id: product.id, product });
  };

  const handleSearchSubmit = (query) => {
    if (onNavigate) onNavigate('catalog', { q: query });
  };

  const handleSelectCategory = (filterPayload) => {
    if (onNavigate) onNavigate('catalog', filterPayload);
  };

  return (
    <header className="site-header">
      {/* 1. Top Announcement Bar */}
      <div className="top-announcement-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <Truck size={13} aria-hidden="true" />
              <span>Giao hoa hỏa tốc 60–90 phút tại nội thành Đà Nẵng</span>
            </span>
            <span className="top-bar-item hidden-mobile">
              <Clock size={13} aria-hidden="true" />
              <span>Mở cửa: 07:30 – 21:30 hàng ngày</span>
            </span>
          </div>
          <div className="top-bar-right">
            <a
              href={`tel:${shopInfo.hotline.replace(/\s+/g, '')}`}
              className="top-bar-item"
              style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}
            >
              <Phone size={13} aria-hidden="true" />
              <span>Hotline tư vấn: {shopInfo.hotline}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Header Tier (Spacious Flexbox: Left Logo, Middle Search, Right Actions) */}
      <div className="header-main">
        <div className="container header-main-grid">
          {/* Left: Brand Logo */}
          <a
            href="#home"
            className="brand-logo-link"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.('home');
            }}
            aria-label="Mer Florist - Về trang chủ"
          >
            <div className="brand-logo-mark" aria-hidden="true">🌸</div>
            <div className="brand-logo-text">
              <span className="brand-title">Mer Florist</span>
              <span className="brand-tagline">Lãng mạn không hề đắt</span>
            </div>
          </a>

          {/* Middle: Live Search Bar (Desktop & Tablet) */}
          <div className="hidden-mobile" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <LiveSearch
              onSelectProduct={handleSelectSearchProduct}
              onSearchSubmit={handleSearchSubmit}
            />
          </div>

          {/* Right: Actions (Wishlist, Cart with Counter, Account, Mobile Toggle) */}
          <div className="header-actions">
            {/* Wishlist */}
            <button
              type="button"
              className="action-btn"
              onClick={() => onNavigate?.('wishlist')}
              aria-label={`Danh sách yêu thích (${wishlist.length} mẫu hoa)`}
              title="Mẫu hoa yêu thích"
            >
              <Heart size={22} />
              {wishlist.length > 0 && (
                <span className="action-badge badge-accent">{wishlist.length}</span>
              )}
            </button>

            {/* Cart with Animated Badge */}
            <button
              type="button"
              className="action-btn cart-action-btn"
              onClick={() => setIsMiniCartOpen(true)}
              aria-label={`Mở giỏ hàng (${totalItemsCount} sản phẩm)`}
              title="Giỏ hàng"
            >
              <ShoppingBag size={22} />
              {totalItemsCount > 0 && (
                <span className="action-badge">{totalItemsCount}</span>
              )}
            </button>

            {/* Account */}
            <button
              type="button"
              className="action-btn hidden-mobile"
              onClick={() => onNavigate?.('auth')}
              aria-label="Tài khoản cá nhân hoặc đăng nhập"
              title="Tài khoản"
            >
              <User size={22} />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              className="action-btn visible-mobile-only"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Mở menu điều hướng trên thiết bị di động"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Live Search on Mobile (Full width under logo) */}
        <div className="container visible-mobile-only">
          <LiveSearch
            isMobile
            onSelectProduct={handleSelectSearchProduct}
            onSearchSubmit={handleSearchSubmit}
          />
        </div>
      </div>

      {/* 3. Sticky Navigation Bar (Bottom Tier) */}
      <nav className="sticky-nav-bar hidden-mobile" aria-label="Điều hướng chính của trang web">
        <div className="container d-flex justify-content-between align-items-center">
          <ul className="nav-links-list">
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link ${currentRoute === 'home' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('home');
                }}
              >
                Trang chủ
              </a>
            </li>

            {/* Mega Menu Trigger */}
            <li 
              className="nav-item mega-menu-trigger"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
            >
              <a
                href="#catalog"
                className={`nav-link ${currentRoute === 'catalog' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('catalog');
                }}
                aria-haspopup="true"
                aria-expanded={isMegaMenuOpen}
              >
                <span>Danh mục hoa tươi</span>
                <ChevronDown size={14} aria-hidden="true" />
              </a>

              <MegaMenu
                isOpen={isMegaMenuOpen}
                onClose={() => setIsMegaMenuOpen(false)}
                onSelectCategory={handleSelectCategory}
                onGoToCustomBouquet={() => onNavigate?.('custom-bouquet')}
              />
            </li>

            <li className="nav-item">
              <a
                href="#catalog-featured"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('catalog', { sort: 'popular' });
                }}
              >
                Mẫu bán chạy
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#catalog-occasions"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('catalog', { group: 'occasions' });
                }}
              >
                Hoa theo dịp
              </a>
            </li>

            {/* ✨ Custom Bouquet Highlight Entry */}
            <li className="nav-item">
              <a
                href="#custom-bouquet"
                className={`nav-link has-badge ${currentRoute === 'custom-bouquet' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('custom-bouquet');
                }}
              >
                <span className="nav-link-badge">
                  <Sparkles size={12} />
                  <span>✨ Tự phối hoa</span>
                </span>
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#about"
                className={`nav-link ${currentRoute === 'about' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('about');
                }}
              >
                Câu chuyện Mer
              </a>
            </li>
          </ul>

          {/* Quick hotline link on sticky bar */}
          <div className="d-flex align-items-center gap-2">
            <span className="badge badge-sage">
              Đà Nẵng: 0905 123 456
            </span>
          </div>
        </div>
      </nav>

      {/* 4. Mobile Navigation Drawer */}
      <div 
        className={`drawer-backdrop ${isMobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <div 
        className={`mobile-nav-drawer ${isMobileMenuOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu điều hướng di động"
      >
        <div className="mobile-drawer-header">
          <div className="d-flex align-items-center gap-2">
            <span style={{ fontSize: '1.25rem' }}>🌸</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--color-primary)' }}>
              Mer Florist
            </span>
          </div>
          <button
            type="button"
            className="action-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Đóng menu di động"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mobile-drawer-body">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  onNavigate?.('home');
                }}
              >
                Trang chủ
              </a>
            </li>
            <li className="mobile-nav-item">
              <a
                href="#catalog"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  onNavigate?.('catalog');
                }}
              >
                Tất cả hoa tươi
              </a>
            </li>
            <li className="mobile-nav-item">
              <a
                href="#custom-bouquet"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  onNavigate?.('custom-bouquet');
                }}
                style={{ color: '#b86b7b', fontWeight: 600 }}
              >
                <span>✨ Tự thiết kế bó hoa</span>
                <span className="badge badge-rose">Hot</span>
              </a>
            </li>
            <li className="mobile-nav-item">
              <a
                href="#sinh-nhat"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  onNavigate?.('catalog', { occasion: 'sinh-nhat' });
                }}
              >
                Hoa chúc mừng sinh nhật
              </a>
            </li>
            <li className="mobile-nav-item">
              <a
                href="#khai-truong"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  onNavigate?.('catalog', { occasion: 'khai-truong' });
                }}
              >
                Hoa chúc mừng khai trương
              </a>
            </li>
            <li className="mobile-nav-item">
              <a
                href="#ky-niem"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  onNavigate?.('catalog', { occasion: 'ky-niem-tinh-yeu' });
                }}
              >
                Kỷ niệm & Tình yêu
              </a>
            </li>
            <li className="mobile-nav-item">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  onNavigate?.('about');
                }}
              >
                Về thương hiệu Mer
              </a>
            </li>
          </ul>

          <div style={{ marginTop: 'var(--space-6)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              📍 124/8 Lê Hồng Phong, Hải Châu, Đà Nẵng
            </div>
            <a
              href={`tel:${shopInfo.hotline.replace(/\s+/g, '')}`}
              className="btn btn-primary btn-block"
              style={{ fontSize: '0.9rem' }}
            >
              <Phone size={16} />
              <span>Gọi ngay {shopInfo.hotline}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
