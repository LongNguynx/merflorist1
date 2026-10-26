import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Camera, 
  ArrowUp 
} from 'lucide-react';
import { shopInfo } from '../../data/products.js';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Slogan */}
          <div className="footer-col">
            <div className="brand-logo-link" style={{ marginBottom: 'var(--space-3)' }}>
              <div className="brand-logo-mark">🌸</div>
              <div className="brand-logo-text">
                <span className="brand-title">Mer Florist</span>
                <span className="brand-tagline">Lãng mạn không hề đắt</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Tiệm hoa tươi nghệ thuật phong cách Hàn Quốc tại Đà Nẵng. Chúng tôi tin rằng mỗi đóa hoa trao đi là một lời thì thầm của cảm xúc chân thành, luôn sẵn sàng đồng hành cùng bạn trong mọi khoảnh khắc đáng nhớ.
            </p>
            <div className="footer-social-links">
              <a
                href={shopInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
                aria-label="Fanpage Facebook Mer Florist Đà Nẵng"
              >
                FB
              </a>
              <a
                href={shopInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
                aria-label="Instagram Mer Florist Đà Nẵng"
              >
                IG
              </a>
              <a
                href={shopInfo.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
                aria-label="TikTok Mer Florist"
              >
                TT
              </a>
              <a
                href={shopInfo.socials.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
                aria-label="Zalo CSKH Mer Florist"
              >
                ZL
              </a>
            </div>
          </div>

          {/* Column 2: Quick Catalog Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">Danh Mục Hoa Tươi</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#catalog-bo-hoa" onClick={(e) => { e.preventDefault(); onNavigate?.('catalog', { category: 'bo-hoa-tuoi' }); }}>
                  Bó hoa tươi truyền thống
                </a>
              </li>
              <li>
                <a href="#catalog-canh-buom" onClick={(e) => { e.preventDefault(); onNavigate?.('catalog', { category: 'bo-hoa-canh-buom' }); }}>
                  Bó hoa cánh bướm Hàn Quốc
                </a>
              </li>
              <li>
                <a href="#catalog-oc-que" onClick={(e) => { e.preventDefault(); onNavigate?.('catalog', { category: 'bo-hoa-oc-que' }); }}>
                  Bó hoa ốc quế mini xinh xắn
                </a>
              </li>
              <li>
                <a href="#catalog-hop-hoa" onClick={(e) => { e.preventDefault(); onNavigate?.('catalog', { category: 'hop-hoa-vali-hoa' }); }}>
                  Hộp hoa & Vali hoa mica trong suốt
                </a>
              </li>
              <li>
                <a href="#catalog-gio-hoa" onClick={(e) => { e.preventDefault(); onNavigate?.('catalog', { category: 'gio-lang-hoa' }); }}>
                  Giỏ mây & Lẵng hoa khai trương
                </a>
              </li>
              <li>
                <a href="#custom-bouquet" onClick={(e) => { e.preventDefault(); onNavigate?.('custom-bouquet'); }} style={{ color: '#b86b7b', fontWeight: 600 }}>
                  ✨ Tự thiết kế bó hoa riêng
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Policies & Guarantees */}
          <div className="footer-col">
            <h3 className="footer-col-title">Chính Sách & Hỗ Trợ</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#policy-delivery" onClick={(e) => e.preventDefault()}>
                  <Truck size={14} aria-hidden="true" />
                  <span>Giao nhanh 60-90 phút tại Đà Nẵng</span>
                </a>
              </li>
              <li>
                <a href="#policy-photo" onClick={(e) => e.preventDefault()}>
                  <Camera size={14} aria-hidden="true" />
                  <span>Chụp ảnh thành phẩm trước khi giao</span>
                </a>
              </li>
              <li>
                <a href="#policy-fresh" onClick={(e) => e.preventDefault()}>
                  <ShieldCheck size={14} aria-hidden="true" />
                  <span>Cam kết hoa tươi trên 3 ngày</span>
                </a>
              </li>
              <li>
                <a href="#policy-card" onClick={(e) => e.preventDefault()}>
                  <Sparkles size={14} aria-hidden="true" />
                  <span>Miễn phí thiệp viết tay & nơ voan</span>
                </a>
              </li>
              <li>
                <a href="#policy-guide" onClick={(e) => e.preventDefault()}>
                  <Heart size={14} aria-hidden="true" />
                  <span>Hướng dẫn chăm sóc hoa tại nhà</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Store Info in Da Nang */}
          <div className="footer-col">
            <h3 className="footer-col-title">Tiệm Hoa Tại Đà Nẵng</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={18} aria-hidden="true" />
                <div>
                  <strong>Địa chỉ:</strong>
                  <div>{shopInfo.address}</div>
                </div>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} aria-hidden="true" />
                <div>
                  <strong>Hotline đặt hoa:</strong>
                  <div>
                    <a href={`tel:${shopInfo.hotline.replace(/\s+/g, '')}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                      {shopInfo.hotline}
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-contact-item">
                <Clock size={18} aria-hidden="true" />
                <div>
                  <strong>Giờ mở cửa:</strong>
                  <div>{shopInfo.workingHours}</div>
                </div>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} aria-hidden="true" />
                <div>
                  <strong>Email:</strong>
                  <div>{shopInfo.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; 2026 <strong>Mer Florist Đà Nẵng</strong> • Định vị thương hiệu: <em>"Lãng mạn không hề đắt"</em> • Học phần Phân tích & Thiết kế Web
          </div>
          <div className="d-flex align-items-center gap-3">
            <span>Thanh toán: COD / QR Napas 24/7</span>
            <button
              type="button"
              className="action-btn"
              onClick={scrollToTop}
              aria-label="Cuộn lên đầu trang"
              title="Lên đầu trang"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
