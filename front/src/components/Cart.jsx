// src/components/Cart.jsx
import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-wrapper">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.title}</span>
                <span>${item.price}</span>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* <-- Here’s your Checkout button */}
          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <Link to="/checkout">
              <button className="btn-checkout">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}