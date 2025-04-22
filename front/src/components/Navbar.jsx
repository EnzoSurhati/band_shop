import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import { useCart } from './CartContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartItems } = useCart();
    <span style={{ fontSize: '0.8rem', marginLeft: '4px' }}>{cartItems.length}</span>

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        <div className="header-container">
          <div className="nav-left">
            <ul className="nav-links desktop-only">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
            </ul>
          </div>

          <div className="nav-center">
            <div className="logo-wrapper">
              <Link to="/" className="logo">B$nd</Link>
            </div>
          </div>

          <div className="nav-right">
            <ul className="nav-icons desktop-only">
              <li>
                <button onClick={() => setShowSearch(prev => !prev)}>
                  <i className="bi bi-search" style={{ fontSize: '1.3rem' }}></i>
                </button>
              </li>
              <li><Link to="/account"><i className="bi bi-person" style={{ fontSize: '1.5rem' }}></i></Link></li>
              <li>
                <Link to="/cart" style={{ position: 'relative' }}>
                <i className="bi bi-bag" style={{ fontSize: '1.5rem' }}></i>
                {cartItems.length > 0 && (
                  <span style={{
                    fontSize: '0.7rem',
                    background: '#2d9f3f',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    position: 'absolute',
                    top: '-6px',
                    right: '-8px'
                  }}>
                    {cartItems.lenght}
                  </span>
                )}
                </Link>
              </li>
            </ul>

            <div className="menu-btn mobile-only" onClick={() => setOpen(!open)}>
              <i className="bi bi-list" style={{ fontSize: "1.8rem", cursor: "pointer" }}></i>
            </div>
          </div>
        </div>

        {open && (
          <div className="mobile-menu">
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="/account">
              <i className="bi bi-person" style={{ marginRight: '8px' }}></i>Account
            </a>
            <a onClick={() => setShowSearch(prev => !prev)}>
              <i className="bi bi-search" style={{ marginRight: '8px' }}></i>Search
            </a>
            <a href="#cart">
              <i className="bi bi-bag" style={{ marginRight: '8px' }}></i>Cart
            </a>
          </div>
        )}
      </header>

      {showSearch && (
        <div className="search-overlay">
          <div className="search-box">
            <input type="text" placeholder="Search for..." />
            <button className="close-btn" onClick={() => setShowSearch(false)}>
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}