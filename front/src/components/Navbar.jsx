// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles.css";
import { useCart } from "./CartContext";
import { FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCartPreview, setShowCartPreview] = useState(false);

  const { cartItems, removeFromCart } = useCart();
  const location = useLocation();

  // Refs for outside-click detection
  const iconRef = useRef(null);
  const previewRef = useRef(null);
  const searchBtnRef = useRef(null);
  const searchRef = useRef(null);

  // 1. Body scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) document.body.classList.add("scrolled");
      else document.body.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Close both overlays on route change
  useEffect(() => {
    setShowCartPreview(false);
    setShowSearch(false);
  }, [location]);

  // 3. Close overlays when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      // Cart preview
      if (
        showCartPreview &&
        previewRef.current &&
        !previewRef.current.contains(e.target) &&
        iconRef.current &&
        !iconRef.current.contains(e.target)
      ) {
        setShowCartPreview(false);
      }
      // Search overlay
      if (
        showSearch &&
        searchRef.current &&
        !searchRef.current.contains(e.target) &&
        searchBtnRef.current &&
        !searchBtnRef.current.contains(e.target)
      ) {
        setShowSearch(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCartPreview, showSearch]);

  return (
    <>
      <header>
        <div className="header-container">
          {/* Left links */}
          <div className="nav-left">
            <ul className="nav-links desktop-only">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
            </ul>
          </div>

          {/* Center logo */}
          <div className="nav-center">
            <div className="logo-wrapper">
              <Link to="/" className="logo">B$nd</Link>
            </div>
          </div>

          {/* Right icons */}
          <div className="nav-right">
            <ul className="nav-icons desktop-only">
              {/* Search toggle */}
              <li>
                <button
                  ref={searchBtnRef}
                  onClick={() => setShowSearch(prev => !prev)}
                >
                  <i className="bi bi-search" style={{ fontSize: '1.3rem' }} />
                </button>
              </li>

              {/* Account */}
              <li>
                <Link to="/account">
                  <i className="bi bi-person" style={{ fontSize: '1.5rem' }} />
                </Link>
              </li>

              {/* Cart icon + badge + preview */}
              <li style={{ position: 'relative' }}>
                <div
                  ref={iconRef}
                  onClick={() => setShowCartPreview(prev => !prev)}
                  style={{ cursor: 'pointer' }}
                >
                  <FiShoppingCart size={24} />
                  {cartItems.length > 0 && (
                    <span style={{
                      fontSize: '0.7rem',
                      background: '#2d9f3f',
                      color: '#fff',
                      borderRadius: '50%',
                      padding: '2px 6px',
                      position: 'absolute',
                      top: '-6px',
                      right: '-8px'
                    }}>
                      {cartItems.length}
                    </span>
                  )}
                </div>

                {showCartPreview && (
                  <div
                    ref={previewRef}
                    style={{
                      position: 'absolute',
                      top: '120%',
                      right: 0,
                      background: '#fff',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      padding: '12px',
                      width: '260px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      zIndex: 999
                    }}
                  >
                    <h5 style={{ margin: '0 0 8px' }}>Cart Preview</h5>
                    {cartItems.length === 0 ? (
                      <p style={{ margin: 0, fontSize: '0.85rem' }}>
                        Cart is empty.
                      </p>
                    ) : (
                      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        {cartItems.map((item, idx) => (
                          <li key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '6px',
                            fontSize: '0.85rem'
                          }}>
                            <span>{item.title}</span>
                            <span>${item.price}</span>
                            <button
                              onClick={() => removeFromCart(idx)}
                              style={{
                                background: 'none',
                                border: 'none',
                                color: '#888',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                marginLeft: '8px'
                              }}
                            >
                              ×
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link
                      to="/cart"
                      onClick={() => setShowCartPreview(false)}
                      style={{
                        display: 'block',
                        marginTop: '10px',
                        textAlign: 'center',
                        fontSize: '0.85rem',
                        textDecoration: 'underline'
                      }}
                    >
                      View Full Cart
                    </Link>
                  </div>
                )}
              </li>
            </ul>

            {/* Mobile menu button */}
            <div className="menu-btn mobile-only" onClick={() => setOpen(prev => !prev)}>
              <i className="bi bi-list" style={{ fontSize: '1.8rem', cursor: 'pointer' }} />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mobile-menu">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/account">
              <i className="bi bi-person" style={{ marginRight: '8px' }} />Account
            </Link>
            <button
              ref={searchBtnRef}
              onClick={() => setShowSearch(prev => !prev)}
            >
              <i className="bi bi-search" style={{ marginRight: '8px' }} />Search
            </button>
            <button onClick={() => setShowCartPreview(prev => !prev)}>
              <i className="bi bi-bag" style={{ marginRight: '8px' }} />Cart
            </button>
          </div>
        )}
      </header>

      {/* Search overlay */}
      {showSearch && (
        <div
          ref={searchRef}
          className="search-overlay"
          style={{ zIndex: 998 }}
        >
          <div className="search-box">
            <input type="text" placeholder="Search for..." />
            <button className="close-btn" onClick={() => setShowSearch(false)}>
              <i className="bi bi-x-lg" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}