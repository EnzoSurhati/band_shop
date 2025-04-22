import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Shop from './components/Shop.jsx';
import Checkout from './components/Checkout.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Auth from './components/Auth.jsx';
import Cart from './components/Cart.jsx';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Checkout />
            <Footer />
          </>
        } />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}