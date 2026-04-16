import React, { useState } from 'react';

export default function BasicComponents() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Welcome to the Home Page! This is the main dashboard of our mock application.</p>;
      case 'About':
        return <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>About Us: We are learning React component composition and state management.</p>;
      case 'Courses':
        return <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Available Courses:<br/>• React Masterclass<br/>• Node.js Backend<br/>• Fullstack Development</p>;
      case 'Contact':
        return <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Contact Us at:<br/><strong style={{ color: 'var(--accent)' }}>student@example.com</strong></p>;
      default:
        return <p style={{ color: 'var(--text-secondary)' }}>Main Application Content Goes Here</p>;
    }
  };

  const navItemStyle = (tabName) => ({
    cursor: 'pointer',
    color: activeTab === tabName ? 'var(--accent)' : 'var(--text-main)',
    fontWeight: activeTab === tabName ? '600' : '400',
    transition: 'color 0.2s ease',
    padding: '4px 8px'
  });

  return (
    <div className="card" style={{ width: '600px', margin: '0 auto' }}>
      <div className="card-header">Basic Components (Header, Navbar, Footer)</div>
      
      {/* Mock App Container */}
      <div style={{ 
        border: '1px solid var(--border)', 
        borderRadius: '12px', 
        overflow: 'hidden', 
        marginTop: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
      }}>
        
        {/* Header */}
        <header style={{ background: 'var(--code-bg)', padding: '24px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
          <h1 style={{ fontSize: '22px', margin: 0, color: 'var(--accent)' }}>Welcome to React JS</h1>
        </header>

        {/* Navbar */}
        <nav style={{ background: 'var(--card)', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontWeight: 'bold', fontSize: '15px', color: 'var(--text-main)' }}>BrandLogo</div>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '12px', margin: 0, padding: 0, fontSize: '14px' }}>
            <li style={navItemStyle('Home')} onClick={() => setActiveTab('Home')}>Home</li>
            <li style={navItemStyle('About')} onClick={() => setActiveTab('About')}>About</li>
            <li style={navItemStyle('Courses')} onClick={() => setActiveTab('Courses')}>Courses</li>
            <li style={navItemStyle('Contact')} onClick={() => setActiveTab('Contact')}>Contact</li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <div style={{ padding: '50px 30px', textAlign: 'center', background: 'var(--bg)', minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--text-main)' }}>{activeTab}</h2>
          {renderContent()}
        </div>

        {/* Footer */}
        <footer style={{ background: 'var(--code-bg)', color: 'var(--text-secondary)', textAlign: 'center', padding: '16px', borderTop: '1px solid var(--border)' }}>
          <p style={{ margin: 0, fontSize: '12px' }}>© 2026 ReactJS | All Rights Reserved</p>
        </footer>
        
      </div>
    </div>
  );
}
