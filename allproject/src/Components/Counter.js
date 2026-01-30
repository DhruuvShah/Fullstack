// ===================================
// Counter.js - Interactive Counter Component
// ===================================

import React, { useState } from "react";
import "../styles/Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState({ max: 0, min: 0, total: 0 });

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateHistory(newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    updateHistory(newCount);
  };

  const reset = () => {
    setCount(0);
  };

  const updateHistory = (newCount) => {
    setHistory({
      max: Math.max(history.max, newCount),
      min: Math.min(history.min, newCount),
      total: history.total + 1,
    });
  };

  return (
    <div className="counter">
      <h2>Counter App</h2>

      <div className="counter-display">
        <button className="minus" onClick={decrement}>
          <span>−</span>
        </button>

        <div className="counter-value-wrapper">
          <h1>{count}</h1>
        </div>

        <button className="plus" onClick={increment}>
          <span>+</span>
        </button>
      </div>

      <button className="reset" onClick={reset}>
        <span>Reset Counter</span>
      </button>

      <div className="counter-stats">
        <div className="stat-item">
          <span className="stat-value">{history.max}</span>
          <span className="stat-label">Max</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{history.min}</span>
          <span className="stat-label">Min</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{history.total}</span>
          <span className="stat-label">Changes</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
