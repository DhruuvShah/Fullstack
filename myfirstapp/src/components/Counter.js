import { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      padding: '30px',
      backgroundColor: '#b3d3ee',
      borderRadius: '12px',
      marginBottom: '20px',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#2196f3', marginTop: 0 }}>Task 1: Counter App</h2>
      <div style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#333',
        margin: '20px 0'
      }}>
        {count}
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          style={{
            backgroundColor: '#ff9800',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            backgroundColor: '#4caf50',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};
export default Counter;