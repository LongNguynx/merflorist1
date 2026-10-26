import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('mer_cart');
      return saved ? JSON.parse(saved) : [
        // Seed 1 default item so user immediately sees counter badge
        {
          id: 'mer-01',
          name: 'Bó Hoa Nắng Hạ Dịu Dàng',
          price: 380000,
          quantity: 1,
          selectedSize: 'Tiêu chuẩn (12 bông)',
          image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=300&q=80',
          prepTime: '60 - 90 phút'
        }
      ];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('mer_wishlist');
      return saved ? JSON.parse(saved) : ['mer-02', 'mer-03'];
    } catch {
      return [];
    }
  });

  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    localStorage.setItem('mer_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('mer_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addToCart = (product, quantity = 1, selectedSize = 'Tiêu chuẩn') => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === selectedSize);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity,
          selectedSize,
          image: product.images?.main || product.image,
          prepTime: product.prepTime || '60 - 90 phút'
        }
      ];
    });
    showToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
    setIsMiniCartOpen(true);
  };

  const updateQuantity = (id, selectedSize, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id && item.selectedSize === selectedSize) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (id, selectedSize) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedSize === selectedSize)));
    showToast('Đã xóa sản phẩm khỏi giỏ hàng', 'info');
  };

  const clearCart = () => setCartItems([]);

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Đã xóa khỏi danh sách yêu thích', 'info');
        return prev.filter(id => id !== productId);
      }
      showToast('Đã lưu vào danh sách yêu thích!');
      return [...prev, productId];
    });
  };

  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      wishlist,
      totalItemsCount,
      cartSubtotal,
      isMiniCartOpen,
      setIsMiniCartOpen,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      toggleWishlist,
      toastMessage,
      showToast
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
