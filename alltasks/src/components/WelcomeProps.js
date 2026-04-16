import React from 'react';

// 3) create a functional components name is welcome that receives name and course as props 
// and display welcome message along with username and coursename.
function Welcome({ name, course }) {
  return (
    <div className="card" style={{ width: '400px', margin: '0 auto', textAlign: 'center' }}>
      <div className="card-header">Welcome Component</div>
      <h2 style={{ fontSize: '24px', fontWeight: '600', margin: '16px 0', color: 'var(--accent)' }}>
        Welcome, {name}!
      </h2>
      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
        We are thrilled to have you enrolled in the <strong>{course}</strong> course. 
        Let's build something amazing together!
      </p>
    </div>
  );
}

export default function WelcomeProps() {
  return <Welcome name="Sarah Connor" course="Advanced React & Node.js" />;
}
