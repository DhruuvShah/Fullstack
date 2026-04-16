import React, { createContext, useContext, useState, useEffect } from 'react';

// 3) create a theme switcher using useContext towel between light or dark css classes on button click.
const ThemeContext = createContext();

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeConsumer />
    </ThemeContext.Provider>
  );
}

function ThemeConsumer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div className={`card app ${theme}`} style={{ width: '400px', margin: '0 auto', transition: 'all 0.3s ease' }}>
      <div className="card-header">Theme Switcher (Context)</div>
      
      <div style={{ padding: '30px 0', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>
          Current Theme: <span style={{ textTransform: 'capitalize', color: 'var(--accent)' }}>{theme}</span>
        </h3>
        
        <button className="btn" onClick={toggleTheme}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
}
