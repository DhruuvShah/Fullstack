import React, { useState, useEffect } from 'react';

export default function DigitalClock() {
  // 2) create digital clock using useEffect and setInterval to update time every second 
  // in hours, minutes, seconds hh/mm/ss format.
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hh}:${mm}:${ss}`);
    };
    
    updateClock(); // Initial call
    const intervalId = setInterval(updateClock, 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="card" style={{ width: '350px', margin: '0 auto', textAlign: 'center' }}>
      <div className="card-header">HH:MM:SS Digital Clock</div>
      <div style={{ 
        fontFamily: "'SF Mono', 'Menlo', monospace", 
        fontSize: '42px', 
        fontWeight: '600', 
        color: 'var(--accent)',
        margin: '20px 0',
        letterSpacing: '2px'
      }}>
        {time}
      </div>
    </div>
  );
}
