import React from 'react';
import { useCart } from './CartContext';
import '../styles.css';

export default function ProductCard({ image, title, price }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ image, title, price });
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="product-info">
        <h3>{title}</h3>
        <p>${price}</p>
        <button onClick={handleAdd}>Add to Cart</button>
      </div>
    </div>
  );
}