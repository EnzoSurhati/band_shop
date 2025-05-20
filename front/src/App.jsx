// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Shop from './components/Shop.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Auth from './components/Auth.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Footer />
            </>
          }
        />

        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />

        {/* ← Add this Route for Checkout ↓ */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}