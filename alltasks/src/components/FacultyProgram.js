import React from 'react';

function Faculty(props) {
  return (
    <div style={{ padding: '15px', background: 'var(--code-bg)', borderRadius: '8px', marginBottom: '10px' }}>
      <h1 style={{ fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
        <strong>Name:</strong> {props.name}<br/>
        <strong>Department:</strong> {props.Department}<br/>
        <strong>University:</strong> {props.university}
      </h1>
    </div>
  );
}

export default function FacultyProgram() {
  return (
    <div className="card" style={{ width: '450px', margin: '0 auto' }}>
      <div className="card-header">Faculty Program (Using Props)</div>
      <Faculty name="Dr. Smith" Department="Computer Science" university="Tech University" />
      <Faculty name="Dr. Johnson" Department="Mathematics" university="Science College" />
    </div>
  );
}
