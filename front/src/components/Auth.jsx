import React, { useState } from 'react';
import '../styles.css';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-wrapper">
      <div className="auth-card fancy">
        <h2 className="auth-title">{isLogin ? 'Sign In' : 'Register'}</h2>
        <form className="auth-form">
          {!isLogin && (
            <input type="text" placeholder="Full Name" className="inputForm" />
          )}
          <input type="email" placeholder="Enter your Email" className="inputForm" />
          <input type="password" placeholder="Enter your Password" className="inputForm" />

          <div className="flex-row">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button className="submitBtn" type="submit">
            {isLogin ? 'Sign In' : 'Register'}
          </button>
        </form>

        <div className="footer-text">
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? ' Sign Up' : ' Sign In'}
            </span>
          </p>

          <div className="divider">Or With</div>

          <div className="social-buttons">
            <button className="social-btn google">Google</button>
            <button className="social-btn apple">Apple</button>
          </div>
        </div>
      </div>
    </div>
  );
}