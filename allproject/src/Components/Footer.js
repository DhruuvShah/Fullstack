// ===================================
// Footer.js - Footer Component
// ===================================

import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>⚛️ React Studio</h3>
          <p>
            Building beautiful, modern web applications with the latest React
            technologies and design principles.
          </p>
          <div className="footer-social">
            <a href="#" title="GitHub">
              💻
            </a>
            <a href="#" title="Twitter">
              🐦
            </a>
            <a href="#" title="LinkedIn">
              💼
            </a>
            <a href="#" title="Discord">
              💬
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">Components</a>
          <a href="#">Documentation</a>
          <a href="#">Tutorials</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <a href="#">Getting Started</a>
          <a href="#">API Reference</a>
          <a href="#">Examples</a>
          <a href="#">Community</a>
          <a href="#">Support</a>
        </div>

        <div className="footer-section">
          <h3>Stay Updated</h3>
          <p>
            Subscribe to our newsletter for the latest updates and tutorials.
          </p>
          <div className="footer-newsletter">
            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          © {currentYear} React Studio. All rights reserved.
        </div>
        <ul className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
