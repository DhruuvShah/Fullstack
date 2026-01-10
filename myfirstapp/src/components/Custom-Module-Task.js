const CustomModuleTask = () => {
  const codeSnippet = `
// Task 2: Create and Export Custom Module

// ============================================
// File 1: mathOperations.js (Custom Module)
// ============================================

// Export individual functions
exports.add = (a, b) => {
  return a + b;
};

exports.subtract = (a, b) => {
  return a - b;
};

exports.multiply = (a, b) => {
  return a * b;
};

exports.divide = (a, b) => {
  if (b === 0) {
    return 'Cannot divide by zero';
  }
  return a / b;
};

// Export an object
exports.calculator = {
  square: (num) => num * num,
  cube: (num) => num * num * num,
  sqrt: (num) => Math.sqrt(num)
};

// Export a constant
exports.PI = 3.14159;


// ============================================
// File 2: userModule.js (Another Custom Module)
// ============================================

// Using module.exports for a single export
class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getInfo() {
    return \`Name: \${this.name}, Email: \${this.email}, Age: \${this.age}\`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

module.exports = User;


// ============================================
// File 3: app.js (Main Application)
// ============================================

// Import custom modules
const math = require('./mathOperations');
const User = require('./userModule');

console.log('========================================');
console.log('CUSTOM MODULE DEMONSTRATION');
console.log('========================================\\n');

// Using mathOperations module
console.log('1. MATH OPERATIONS:');
console.log('   10 + 5 =', math.add(10, 5));
console.log('   10 - 5 =', math.subtract(10, 5));
console.log('   10 * 5 =', math.multiply(10, 5));
console.log('   10 / 5 =', math.divide(10, 5));
console.log('   10 / 0 =', math.divide(10, 0));

console.log('\\n2. CALCULATOR OBJECT:');
console.log('   Square of 5:', math.calculator.square(5));
console.log('   Cube of 3:', math.calculator.cube(3));
console.log('   Square root of 16:', math.calculator.sqrt(16));

console.log('\\n3. CONSTANT VALUE:');
console.log('   PI =', math.PI);

// Using User module
console.log('\\n4. USER MODULE:');
const user1 = new User('John Doe', 'john@example.com', 25);
const user2 = new User('Jane Smith', 'jane@example.com', 17);

console.log('   User 1:', user1.getInfo());
console.log('   Is Adult?', user1.isAdult());

console.log('\\n   User 2:', user2.getInfo());
console.log('   Is Adult?', user2.isAdult());

console.log('\\n========================================\\n');

// Run: node app.js


// ============================================
// File 4: utilities.js (Mixed Exports)
// ============================================

const formatDate = (date) => {
  return date.toLocaleDateString('en-US');
};

const formatTime = (date) => {
  return date.toLocaleTimeString('en-US');
};

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Export multiple items
module.exports = {
  formatDate,
  formatTime,
  generateRandomNumber,
  appName: 'My Node App',
  version: '1.0.0'
};


// ============================================
// Using utilities.js in another file
// ============================================

const utils = require('./utilities');

console.log('Date:', utils.formatDate(new Date()));
console.log('Time:', utils.formatTime(new Date()));
console.log('Random Number:', utils.generateRandomNumber(1, 100));
console.log('App Name:', utils.appName);
console.log('Version:', utils.version);
  `;

  return (
    <div style={{
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      marginBottom: '20px'
    }}>
      <h2 style={{ color: '#9c27b0', marginTop: 0 }}>Task 2: Custom Modules (Export & Import)</h2>
      <pre style={{
        backgroundColor: '#1e293b',
        color: '#10b981',
        padding: '20px',
        borderRadius: '8px',
        overflowX: 'auto',
        fontFamily: 'monospace',
        fontSize: '14px',
        lineHeight: '1.6'
      }}>
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

export default CustomModuleTask;