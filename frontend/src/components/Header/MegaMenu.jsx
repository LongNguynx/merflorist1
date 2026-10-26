import React from 'react';
import { ArrowRight, Sparkles, Gift, Heart, Calendar } from 'lucide-react';
import { megaMenuGroups } from '../../data/categories.js';

export default function MegaMenu({ isOpen, onClose, onSelectCategory, onGoToCustomBouquet }) {
  return (
    <div 
      className={`mega-menu-dropdown ${isOpen ? 'is-open' : ''}`}
      role="menu"
      aria-label="Danh mục sản phẩm chi tiết"
      onMouseLeave={onClose}
    >
      <div className="mega-menu-grid">
        {megaMenuGroups.map((group) => (
          <div key={group.id} className="mega-group-col">
            <div className="mega-group-title">
              {group.id === 'packaging-styles' && <Gift size={16} />}
              {group.id === 'occasions' && <Heart size={16} />}
              {group.id === 'special-collections' && <Sparkles size={16} />}
              <span>{group.title}</span>
            </div>

            <ul className="mega-items-list" role="none">
              {group.items.map((item) => (
                <li key={item.id} role="none">
                  {item.link ? (
                    <a
                      href={`#${item.slug}`}
                      className="mega-item-link"
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        onGoToCustomBouquet();
                      }}
                      style={{ color: 'var(--color-primary-dark)', fontWeight: 600 }}
                    >
                      <span className="d-flex align-items-center gap-1">
                        <span>{item.name}</span>
                        {item.badge && <span className="badge badge-rose">{item.badge}</span>}
                      </span>
                      <ArrowRight size={14} />
                    </a>
                  ) : (
                    <a
                      href={`#catalog-${item.slug}`}
                      className="mega-item-link"
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        onSelectCategory(group.id === 'occasions' ? { occasion: item.id } : { category: item.id });
                      }}
                    >
                      <span>{item.name}</span>
                      {item.badge ? (
                        <span className="badge badge-rose">{item.badge}</span>
                      ) : (
                        <span className="mega-item-count">{item.count} mẫu</span>
                      )}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Interactive Bouquet Builder Promotional Banner inside Mega Menu */}
      <div className="mega-menu-banner">
        <div>
          <div className="mega-banner-title d-flex align-items-center gap-1">
            <Sparkles size={18} style={{ color: '#b86b7b' }} />
            <span>Trải nghiệm tính năng Tự tay thiết kế bó hoa</span>
          </div>
          <div className="mega-banner-text">
            Chọn giấy gói, hoa chính, hoa phụ và thiệp theo ý thích. Tính tiền trực tiếp theo từng thành phần!
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => {
            onClose();
            onGoToCustomBouquet();
          }}
        >
          <span>Khám phá ngay</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
