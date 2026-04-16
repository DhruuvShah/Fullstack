import React, { createContext, useContext, useState } from 'react';

const NumberContext = createContext();

function NumberDisplay() {
  const { num1, num2, sum } = useContext(NumberContext);
  return (
    <div style={{ padding: '20px', background: 'var(--code-bg)', borderRadius: '8px', textAlign: 'center' }}>
      <h3 style={{ fontSize: '14px', margin: '0 0 10px 0' }}>Number 1: <span style={{ color: 'var(--accent)' }}>{num1}</span></h3>
      <h3 style={{ fontSize: '14px', margin: '0 0 10px 0' }}>Number 2: <span style={{ color: 'var(--accent)' }}>{num2}</span></h3>
      <h3 style={{ fontSize: '16px', margin: 0, fontWeight: '700' }}>Sum: <span style={{ color: 'var(--success)' }}>{sum}</span></h3>
    </div>
  );
}

export default function AdditionContext() {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(20);
  const sum = num1 + num2;

  return (
    <div className="card" style={{ width: '400px', margin: '0 auto' }}>
      <div className="card-header">Addition of Two Numbers (useContext)</div>
      <NumberContext.Provider value={{ num1, num2, sum }}>
        <NumberDisplay />
      </NumberContext.Provider>
    </div>
  );
}
