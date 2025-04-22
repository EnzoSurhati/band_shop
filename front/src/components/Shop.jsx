import React from 'react';
import ProductCard from './ProductCard.jsx';
import '../styles.css';

const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600180758890-6c0d187851aa?auto=format&fit=crop&w=400&q=80',
    title: 'Modern Jacket',
    price: '120.00'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80',
    title: 'Casual Shirt',
    price: '60.00'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80',
    title: 'Linen Dress',
    price: '80.00'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1618354691221-2457d6cf5dc1?auto=format&fit=crop&w=400&q=80',
    title: 'Brown Jacket',
    price: '150.00'
  }
];

export default function Shop() {
  return (
    <section id="shop" className="shop">
      <h2>Featured Products</h2>
      <div className="products">
        {products.map(p => (
          <ProductCard key={p.id} image={p.image} title={p.title} price={p.price} />
        ))}
      </div>
    </section>
  );
}