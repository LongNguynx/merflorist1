import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';
import { formatVND } from '../../utils/formatters.js';

export default function MiniCartDrawer({ onNavigate }) {
  const { 
    cartItems, 
    isMiniCartOpen, 
    setIsMiniCartOpen, 
    updateQuantity, 
    removeFromCart, 
    cartSubtotal,
    totalItemsCount 
  } = useCart();

  const handleClose = () => setIsMiniCartOpen(false);

  const handleGoToCart = () => {
    handleClose();
    if (onNavigate) onNavigate('cart');
  };

  const handleGoToCheckout = () => {
    handleClose();
    if (onNavigate) onNavigate('checkout');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`drawer-backdrop ${isMiniCartOpen ? 'is-open' : ''}`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside 
        className={`mini-cart-drawer ${isMiniCartOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Giỏ hàng mini của bạn"
      >
        <div className="mini-cart-header">
          <div className="mini-cart-title">
            <ShoppingBag size={20} aria-hidden="true" />
            <span>Giỏ hàng ({totalItemsCount})</span>
          </div>
          <button 
            type="button" 
            className="action-btn"
            onClick={handleClose}
            aria-label="Đóng giỏ hàng mini"
          >
            <X size={20} />
          </button>
        </div>

        {cartItems.length > 0 ? (
          <>
            <div className="mini-cart-items-list">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="mini-cart-item">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="mini-cart-item-img"
                    loading="lazy"
                  />
                  <div className="mini-cart-item-details">
                    <div>
                      <div className="mini-cart-item-name">{item.name}</div>
                      <div className="mini-cart-item-variant">Phân loại: {item.selectedSize}</div>
                    </div>

                    <div className="mini-cart-item-bottom">
                      <div className="mini-cart-price">
                        {formatVND(item.price * item.quantity)}
                      </div>

                      <div className="d-flex align-items-center gap-2">
                        {/* Quantity controls */}
                        <div className="qty-control">
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                            aria-label={`Giảm số lượng ${item.name}`}
                          >
                            -
                          </button>
                          <span className="qty-val">{item.quantity}</span>
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                            aria-label={`Tăng số lượng ${item.name}`}
                          >
                            +
                          </button>
                        </div>

                        {/* Remove item button */}
                        <button
                          type="button"
                          className="action-btn"
                          style={{ width: '32px', height: '32px', color: 'var(--color-error)' }}
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          aria-label={`Xóa ${item.name} khỏi giỏ hàng`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mini-cart-footer">
              <div className="mini-cart-subtotal">
                <span className="mini-cart-subtotal-label">Tổng cộng tạm tính:</span>
                <span className="mini-cart-subtotal-value">{formatVND(cartSubtotal)}</span>
              </div>
              <p className="text-muted" style={{ fontSize: '0.8rem', marginBottom: 'var(--space-4)' }}>
                * Chưa bao gồm ưu đãi phí giao hàng theo khu vực Đà Nẵng.
              </p>
              <div className="d-flex flex-column gap-2">
                <button 
                  type="button" 
                  className="btn btn-primary btn-block"
                  onClick={handleGoToCheckout}
                >
                  <span>Tiến hành đặt hoa</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline btn-block"
                  onClick={handleGoToCart}
                >
                  Xem chi tiết giỏ hàng
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 p-6 text-center" style={{ padding: '2rem' }}>
            <ShoppingBag size={48} className="text-muted" style={{ marginBottom: '1rem' }} />
            <h4 style={{ marginBottom: '0.5rem' }}>Giỏ hàng của bạn đang trống</h4>
            <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Hãy chọn những đóa hoa tươi thắm nhất từ tiệm hoa Mer Florist nhé!
            </p>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => {
                handleClose();
                onNavigate?.('catalog');
              }}
            >
              Khám phá mẫu hoa ngay
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
