import React from 'react';
import '../styles.css';
import heroBg from '../assets/hero-bg.jpg'; // ✅ Import the image

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero-content">
        <h1>NEW ARRIVALS</h1>
        <a href="/shop" className="btn">Shop Now!</a>
      </div>
    </section>
  );
}