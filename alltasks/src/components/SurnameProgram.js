import React, { createContext, useContext } from 'react';

const SurName = createContext();

function Child1() {
  const globaldata = useContext(SurName);
  return (
    <div style={{ padding: '10px', background: 'var(--code-bg)', borderRadius: '8px', marginBottom: '8px' }}>
      <h1 style={{ fontSize: '14px', margin: 0 }}>Krish {globaldata}</h1>
    </div>
  );
}

function Child2() {
  const globaldata = useContext(SurName);
  return (
    <div style={{ padding: '10px', background: 'var(--code-bg)', borderRadius: '8px' }}>
      <h1 style={{ fontSize: '14px', margin: 0 }}>Madhav {globaldata}</h1>
    </div>
  );
}

export default function SurnameProgram() {
  return (
    <div className="card" style={{ width: '400px', margin: '0 auto' }}>
      <div className="card-header">Surname Program (useContext)</div>
      <SurName.Provider value={'Prajapati'}>
        <Child1 />
        <Child2 />
      </SurName.Provider>
    </div>
  );
}
