import React from 'react';
import '../styles.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h4>B$nd</h4>
        <p>Swear and wear.</p>
        <nav>
          <a href="#" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i class="bi bi-twitter-x"></i>
          </a>
        </nav>
      </div>
    </footer>
  );
}