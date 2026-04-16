import React from 'react';

function Child4(props) {
  return (
    <div style={{ padding: '15px', background: 'rgba(10, 132, 255, 0.1)', borderRadius: '8px', marginTop: '10px' }}>
      <h3 style={{ fontSize: '13px', margin: 0 }}>Child4 name: {props.name} City: {props.city}</h3>
    </div>
  );
}

function Child3(props) {
  return (
    <div style={{ padding: '15px', background: 'rgba(10, 132, 255, 0.15)', borderRadius: '8px', marginTop: '10px' }}>
      <h3 style={{ fontSize: '13px', margin: 0 }}>Child3 name: {props.name} City: {props.city}</h3>
      <Child4 name="Sonia" city="Houston" />
    </div>
  );
}

function Child2(props) {
  return (
    <div style={{ padding: '15px', background: 'rgba(10, 132, 255, 0.2)', borderRadius: '8px', marginTop: '10px' }}>
      <h3 style={{ fontSize: '13px', margin: 0 }}>Child2 name: {props.name} City: {props.city}</h3>
      <Child3 name="Rahul" city="Chicago" />
    </div>
  );
}

function Child1(props) {
  return (
    <div style={{ padding: '15px', background: 'rgba(10, 132, 255, 0.25)', borderRadius: '8px', marginTop: '10px' }}>
      <h3 style={{ fontSize: '13px', margin: 0 }}>Child1 name: {props.name} City: {props.city}</h3>
      <Child2 name="Anjali" city="Los Angeles" />
    </div>
  );
}

function Parent(props) {
  return (
    <div style={{ padding: '15px', background: 'var(--code-bg)', borderRadius: '8px' }}>
      <h3 style={{ fontSize: '14px', margin: 0, color: 'var(--accent)' }}>Parent name: {props.name} City: {props.city}</h3>
      <Child1 name="Priya" city="New York" />
    </div>
  );
}

export default function NestedProps() {
  return (
    <div className="card" style={{ width: '500px', margin: '0 auto' }}>
      <div className="card-header">Parent-Child Component Example (Nested Props)</div>
      <Parent name="John" city="New York" />
    </div>
  );
}
