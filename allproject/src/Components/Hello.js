// ===================================
// Hello.js - Welcome Component
// ===================================

import React from "react";
import "../styles/Hello.css";

const Hello = () => {
  return (
    <section className="hello">
      <div className="hello-decoration"></div>
      <div className="hello-decoration"></div>
      <div className="hello-decoration"></div>

      <div className="hello-card">
        <span className="hello-emoji">👋</span>
        <h1>Hello World</h1>
        <p>
          Experience the power of modern React development with our beautifully
          crafted components. Each element is designed with attention to detail
          and user experience in mind.
        </p>

        <div className="hello-actions">
          <button className="hello-btn primary">Start Building</button>
          <button className="hello-btn secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hello;
