import React from 'react';
import { useCart } from './CartContext';

export default function Cart() {
  const { cartItems } = useCart();

  return (
    <div className="cart-wrapper">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <span>{item.title}</span>
              <span>${item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}