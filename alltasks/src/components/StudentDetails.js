import React from 'react';

export default function StudentDetails() {
  // 1) create jsx elements to display student details like rollno, name, course and city 
  // use inline stylesheet for div and text decoration for student details.
  return (
    <div style={{
      background: 'var(--card)',
      borderRadius: '16px',
      padding: '20px',
      border: '1px solid rgba(0,0,0,0.05)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
      width: '400px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      <h2 style={{ 
        fontSize: '12px', 
        fontWeight: '700', 
        color: 'var(--text-secondary)', 
        textTransform: 'uppercase', 
        marginBottom: '8px' 
      }}>
        Student Details (Inline Styles)
      </h2>
      <div style={{ textDecoration: 'underline', color: 'var(--text-main)', fontSize: '14px' }}>
        <strong>Roll No:</strong> 1042
      </div>
      <div style={{ textDecoration: 'underline', color: 'var(--text-main)', fontSize: '14px' }}>
        <strong>Name:</strong> Alex Johnson
      </div>
      <div style={{ textDecoration: 'underline', color: 'var(--text-main)', fontSize: '14px' }}>
        <strong>Course:</strong> Full Stack Development
      </div>
      <div style={{ textDecoration: 'underline', color: 'var(--text-main)', fontSize: '14px' }}>
        <strong>City:</strong> San Francisco
      </div>
    </div>
  );
}
