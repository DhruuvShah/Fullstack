import React, { useEffect, useState } from 'react';
import '../styles/UseEffectEx.css';

export default function UseEffectEx() {
  const [name, setName] = useState('Ayushi');

  useEffect(() => {
    document.title = `Welcome ${name}`;
  }, [name]);

  return (
    <div className="use-effect-container">
      <h2>Document Title Updater</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      <p className="note-text">Note: As you type username it reflect on title tab.</p>
    </div>
  );
}
