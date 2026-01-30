// ===================================
// Header.js - Hero Header Component
// ===================================

import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-badge">✨ Modern React UI</div>

      <h1>Welcome to React JS</h1>

      <p>
        Build stunning, professional web applications with our modern
        glassmorphism design system. Experience the perfect blend of aesthetics
        and functionality.
      </p>

      <div className="header-actions">
        <button className="header-btn primary">Explore Components</button>
        <button className="header-btn secondary">View Documentation</button>
      </div>

      <div className="main">
        <div style={{ padding: "40px", textAlign: "center" }}>
          <div style={{ fontSize: "64px", marginBottom: "20px" }}>⚛️</div>
          <h3 style={{ margin: 0, color: "var(--text-primary)" }}>
            React 18.2.0
          </h3>
          <p style={{ margin: "10px 0 0", color: "var(--text-secondary)" }}>
            Latest stable version
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
