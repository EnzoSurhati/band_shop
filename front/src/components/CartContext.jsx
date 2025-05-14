import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    setCartItems(prev => [...prev, product]);
  };

  const removeFromCart = indexToRemove => {
    setCartItems(prev =>
      prev.filter((_, idx) => idx !== indexToRemove)
    );
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}