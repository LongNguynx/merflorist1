import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Accessible Breadcrumbs Component
 * Follows WCAG 2.1 AA and Schema.org BreadcrumbList guidelines
 * @param {Array<{ label: string, path?: string }>} items
 * @param {Function} onNavigate
 */
export default function Breadcrumbs({ items = [], onNavigate }) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="breadcrumbs-nav" aria-label="Đường dẫn phân cấp (Breadcrumb)">
      <div className="container">
        <ol className="breadcrumbs-list">
          <li className="breadcrumb-item">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('home');
              }}
              className="d-inline-flex align-items-center gap-1"
            >
              <Home size={14} aria-hidden="true" />
              <span>Trang chủ</span>
            </a>
          </li>

          {items.map((crumb, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                <li className="breadcrumb-separator" aria-hidden="true">
                  <ChevronRight size={14} />
                </li>
                <li
                  className={`breadcrumb-item ${isLast ? 'active' : ''}`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {isLast || !crumb.path ? (
                    <span>{crumb.label}</span>
                  ) : (
                    <a
                      href={crumb.path}
                      onClick={(e) => {
                        e.preventDefault();
                        if (onNavigate) onNavigate(crumb.path, crumb.payload);
                      }}
                    >
                      {crumb.label}
                    </a>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
