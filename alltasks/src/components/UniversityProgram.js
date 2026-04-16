import React, { createContext, useContext } from 'react';

const tradmark = createContext();

function Child1() {
  const globaldata = useContext(tradmark);
  return (
    <div style={{ padding: '15px', background: 'var(--code-bg)', borderRadius: '8px', marginBottom: '10px' }}>
      <h1 style={{ fontSize: '14px', margin: '0 0 8px 0', color: 'var(--accent)' }}>{globaldata}</h1>
      <h2 style={{ fontSize: '13px', margin: 0 }}>IT DEPARTMENT IN {globaldata}</h2>
    </div>
  );
}

function Child2() {
  const globaldata = useContext(tradmark);
  return (
    <div style={{ padding: '15px', background: 'var(--code-bg)', borderRadius: '8px', marginBottom: '10px' }}>
      <h2 style={{ fontSize: '13px', margin: 0 }}>BTECH DEPARTMENT IN {globaldata}</h2>
    </div>
  );
}

function Child3() {
  const globaldata = useContext(tradmark);
  return (
    <div style={{ padding: '15px', background: 'var(--code-bg)', borderRadius: '8px' }}>
      <h2 style={{ fontSize: '13px', margin: 0 }}>FACULTY OF TECHNOLOGY IN {globaldata}</h2>
    </div>
  );
}

export default function UniversityProgram() {
  return (
    <div className="card" style={{ width: '450px', margin: '0 auto' }}>
      <div className="card-header">University Program (useContext)</div>
      <tradmark.Provider value={'JG UNIVERSITY AHMEDABAD GUJARAT'}>
        <Child1 />
        <Child2 />
        <Child3 />
      </tradmark.Provider>
    </div>
  );
}
