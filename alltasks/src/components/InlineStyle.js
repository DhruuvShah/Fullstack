import React from 'react';

export default function InlineStyle() {
  const mystyle = {
    color: "var(--accent)",
    backgroundColor: "var(--code-bg)",
    padding: '20px',
    borderRadius: '12px',
    fontFamily: 'Arial',
    textAlign: 'center',
    border: '1px solid var(--border)'
  };

  return (
    <div className="card" style={{ width: '400px', margin: '0 auto' }}>
      <div className="card-header">Inline Stylesheet Program</div>
      <h1 style={mystyle} title="React Inline Style Example">
        WORK TO USE INLINE STYLE
      </h1>
    </div>
  );
}
