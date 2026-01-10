const NodemonTask = () => {
  const codeSnippet = `
// Task 3: Use Nodemon for Auto-Reload

// ============================================
// Step 1: Install Nodemon
// ============================================

// Install nodemon globally
npm install -g nodemon

// OR install as dev dependency in your project
npm install --save-dev nodemon


// ============================================
// Step 2: Create a Sample Application
// ============================================

// File: app.js

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

let counter = 0;

const server = http.createServer((req, res) => {
  counter++;
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  res.end(\`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Nodemon Demo</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f0f0f0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
        }
        .container {
          background: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          text-align: center;
        }
        h1 { color: #333; }
        p { color: #666; font-size: 18px; }
        .counter { 
          font-size: 48px; 
          color: #4caf50; 
          font-weight: bold; 
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🔄 Nodemon Auto-Reload Demo</h1>
        <p>This page auto-reloads when you save changes!</p>
        <div class="counter">\${counter}</div>
        <p>Total Requests: \${counter}</p>
        <p>Time: \${new Date().toLocaleTimeString()}</p>
        <p>Edit app.js and save to see changes instantly!</p>
      </div>
    </body>
    </html>
  \`);
});

server.listen(port, hostname, () => {
  console.log(\`🚀 Server running at http://\${hostname}:\${port}/\`);
  console.log('👀 Nodemon is watching for changes...');
  console.log('📝 Edit this file and save to see auto-reload!');
});


// ============================================
// Step 3: Run with Nodemon
// ============================================

// Method 1: Direct command
nodemon app.js

// Method 2: Using npx (if installed locally)
npx nodemon app.js

// Method 3: With custom configuration
nodemon app.js --watch ./ --ext js,json


// ============================================
// Step 4: Create package.json script
// ============================================

// File: package.json
{
  "name": "nodemon-demo",
  "version": "1.0.0",
  "description": "Nodemon demonstration",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "dev:watch": "nodemon app.js --watch ./ --ext js,html,css"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}

// Then run:
npm run dev


// ============================================
// Step 5: Create nodemon.json configuration
// ============================================

// File: nodemon.json
{
  "watch": ["*.js", "src/**/*.js"],
  "ext": "js,json,html",
  "ignore": ["node_modules/**", "test/**"],
  "delay": 1000,
  "verbose": true,
  "env": {
    "NODE_ENV": "development",
    "PORT": "3000"
  }
}


// ============================================
// Step 6: Advanced Example with Express
// ============================================

// First install express:
// npm install express

// File: server.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(\`
    <h1>Nodemon with Express</h1>
    <p>Edit this file and see instant changes!</p>
    <p>Current time: \${new Date().toLocaleString()}</p>
  \`);
});

app.get('/api/data', (req, res) => {
  res.json({
    message: 'API endpoint',
    timestamp: new Date(),
    data: [1, 2, 3, 4, 5]
  });
});

app.listen(port, () => {
  console.log(\`Express app running on http://localhost:\${port}\`);
  console.log('Nodemon is watching for changes...');
});

// Run: nodemon server.js


// ============================================
// Nodemon Commands & Options
// ============================================

// Watch specific directories
nodemon --watch src --watch lib app.js

// Watch specific file extensions
nodemon --ext js,json,html app.js

// Ignore certain files/directories
nodemon --ignore test/ --ignore public/ app.js

// Delay restart
nodemon --delay 2 app.js

// Execute with specific node version
nodemon --exec "node --harmony" app.js

// Verbose mode
nodemon -V app.js

// Debug mode
nodemon --inspect app.js


// ============================================
// Benefits of Nodemon:
// ============================================

// ✅ Auto-restart on file changes
// ✅ Saves development time
// ✅ Customizable watch patterns
// ✅ Support for various file types
// ✅ Can be configured via package.json or nodemon.json
// ✅ Works with any Node.js application
  `;

  return (
    <div style={{
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      marginBottom: '20px'
    }}>
      <h2 style={{ color: '#ff5722', marginTop: 0 }}>Task 3: Nodemon Auto-Reload</h2>
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

export default NodemonTask;