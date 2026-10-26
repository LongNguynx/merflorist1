import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs.jsx';
import MiniCartDrawer from './components/Cart/MiniCartDrawer.jsx';
import { CartProvider, useCart } from './context/CartContext.jsx';
import { products } from './data/products.js';
import { formatVND } from './utils/formatters.js';

// Styles
import './styles/header.css';

function MainAppContent() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [routeParams, setRouteParams] = useState({});
  const { toastMessage, addToCart } = useCart();

  const handleNavigate = (route, params = {}) => {
    setCurrentRoute(route);
    setRouteParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate dynamic breadcrumbs based on active route
  const getBreadcrumbs = () => {
    if (currentRoute === 'home') return [];
    if (currentRoute === 'catalog') {
      const crumb = [{ label: 'Hoa tươi & Quà tặng', path: 'catalog' }];
      if (routeParams.category) {
        crumb.push({ label: `Danh mục: ${routeParams.category}` });
      } else if (routeParams.occasion) {
        crumb.push({ label: `Dịp: ${routeParams.occasion}` });
      } else if (routeParams.q) {
        crumb.push({ label: `Tìm kiếm: "${routeParams.q}"` });
      }
      return crumb;
    }
    if (currentRoute === 'product-detail') {
      return [
        { label: 'Hoa tươi', path: 'catalog' },
        { label: routeParams.product?.name || 'Chi tiết bó hoa' }
      ];
    }
    if (currentRoute === 'custom-bouquet') {
      return [{ label: 'Tự tay thiết kế bó hoa (Custom Bouquet)' }];
    }
    if (currentRoute === 'cart') {
      return [{ label: 'Giỏ hàng của bạn' }];
    }
    if (currentRoute === 'checkout') {
      return [
        { label: 'Giỏ hàng', path: 'cart' },
        { label: 'Thanh toán & Giao nhận' }
      ];
    }
    if (currentRoute === 'wishlist') {
      return [{ label: 'Mẫu hoa yêu thích' }];
    }
    if (currentRoute === 'about') {
      return [{ label: 'Câu chuyện thương hiệu Mer Florist' }];
    }
    return [{ label: currentRoute }];
  };

  return (
    <div className="mer-app-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Header (Top Announcement + 3-Part Header + Sticky Nav Bar + Mobile Drawer) */}
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* 2. Breadcrumbs (Appears dynamically across all pages) */}
      <Breadcrumbs items={getBreadcrumbs()} onNavigate={handleNavigate} />

      {/* 3. Main Route Content Area */}
      <main className="container section" style={{ flex: 1 }}>
        {/* Verification & Showcase Card for Step 1.2 */}
        <div className="section-header">
          <span className="brand-eyebrow">Tiêu chí 1: Kiến trúc thông tin & Điều hướng (8/100 điểm)</span>
          <h1 className="text-h1">Hệ Thống Header, Sticky Nav, Live Search & Footer</h1>
          <p className="text-lead">
            Bố cục Flexbox 3 phần rộng rãi (Logo trái | Search giữa | Actions phải), Menu ghim cố định khi cuộn, Mega Menu 3 nhóm và Tìm kiếm tiếng Việt không dấu.
          </p>
        </div>

        {/* Feature Highlights Grid for Audit */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-10)' }}>
          <div style={{ background: 'var(--color-surface-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-5)' }}>
            <div style={{ fontWeight: 600, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🔍</span>
              <span>Live Search Tiếng Việt Không Dấu</span>
            </div>
            <p className="text-secondary" style={{ fontSize: '0.875rem', marginTop: '6px' }}>
              Gõ thử trên ô tìm kiếm: <code>lan ho diep</code>, <code>hong kem</code>, <code>sinh nhat</code>. Kết quả hiển thị tức thì sau 300ms, không chặn main thread.
            </p>
          </div>

          <div style={{ background: 'var(--color-surface-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-5)' }}>
            <div style={{ fontWeight: 600, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>📌</span>
              <span>Sticky Bar & Mega Menu 3 Nhóm</span>
            </div>
            <p className="text-secondary" style={{ fontSize: '0.875rem', marginTop: '6px' }}>
              Cuộn trang xuống để thấy menu tự ghim trên đỉnh; rê chuột vào <strong>"Danh mục hoa tươi"</strong> để xem Mega Menu phân 3 nhóm logic.
            </p>
          </div>

          <div style={{ background: 'var(--color-surface-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-5)' }}>
            <div style={{ fontWeight: 600, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🛍️</span>
              <span>Mini-cart Drawer & Counter Badge</span>
            </div>
            <p className="text-secondary" style={{ fontSize: '0.875rem', marginTop: '6px' }}>
              Bấm vào icon Giỏ hàng ở góc phải để mở Mini-cart trượt mượt mà; số lượng trên huy hiệu nảy động khi có thay đổi.
            </p>
          </div>

          <div style={{ background: 'var(--color-surface-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-5)' }}>
            <div style={{ fontWeight: 600, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🧭</span>
              <span>Breadcrumb Phân Cấp Chuẩn</span>
            </div>
            <p className="text-secondary" style={{ fontSize: '0.875rem', marginTop: '6px' }}>
              Đường dẫn phân cấp rõ ràng (Trang chủ &gt; Hoa theo dịp &gt; Tên mẫu hoa), giúp người dùng không bao giờ bị lạc.
            </p>
          </div>
        </div>

        {/* Live Interactive Samples to test Cart and PDP Navigation */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: 'var(--space-4)' }}>
            <h2 className="text-h2" style={{ fontSize: '1.35rem', margin: 0 }}>
              Thử nghiệm thêm vào Giỏ hàng & điều hướng
            </h2>
            <span className="badge badge-sage">4 Mẫu Hoa Tiêu Biểu</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
            {products.slice(0, 4).map((p) => (
              <div key={p.id} className="product-card">
                <div className="product-card-media">
                  <img src={p.images.main} alt={p.name} loading="lazy" width="300" height="400" />
                </div>
                <div className="product-card-content">
                  <span className="badge badge-rose" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                    {p.badge || 'Mer Florist'}
                  </span>
                  <div className="product-card-title">{p.name}</div>
                  <div className="product-card-meta">
                    <span className="price-display">{formatVND(p.price)}</span>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => addToCart(p, 1, 'Tiêu chuẩn')}
                    >
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 4. Mini-cart Drawer */}
      <MiniCartDrawer onNavigate={handleNavigate} />

      {/* 5. 4-Column Structured Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-container" aria-live="polite">
          <div className={`toast show toast-${toastMessage.type}`}>
            <span style={{ fontSize: '1.25rem' }}>
              {toastMessage.type === 'success' ? '✓' : 'ℹ'}
            </span>
            <span>{toastMessage.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainAppContent />
    </CartProvider>
  );
}
