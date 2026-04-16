import React from 'react';
import '../styles/NewTasks.css';

export default function NestedLevels() {
  // 2) create react app to display nested elements structure with four levels 
  // for each level use different background colour and assign headings level1 level2 level3 level4
  return (
    <div className="card" style={{ width: '500px', margin: '0 auto' }}>
      <div className="card-header">Nested Elements</div>
      <div className="level1">
        <h3>Level 1</h3>
        <div className="level2">
          <h3>Level 2</h3>
          <div className="level3">
            <h3>Level 3</h3>
            <div className="level4">
              <h3>Level 4</h3>
              <p style={{ fontSize: '12px', marginTop: '8px' }}>Deepest level reached!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
