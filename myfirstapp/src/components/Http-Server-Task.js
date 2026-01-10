const HttpServerTask = () => {
  const codeSnippet = `
// Task 5: Setup Local Node Server with HTTP Module

// File: server.js

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  if (req.url === '/') {
    res.end(\`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Node.js Server</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
          }
          .container {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
            text-align: center;
          }
          h1 { color: #333; }
          p { color: #666; }
          a {
            display: inline-block;
            margin: 10px;
            padding: 12px 24px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 6px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to Node.js Server!</h1>
          <p>Server running at \${hostname}:\${port}</p>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </body>
      </html>
    \`);
  } else if (req.url === '/about') {
    res.end('<h1>About Page</h1><a href="/">Home</a>');
  } else if (req.url === '/contact') {
    res.end('<h1>Contact Page</h1><a href="/">Home</a>');
  } else {
    res.statusCode = 404;
    res.end('<h1>404 - Page Not Found</h1><a href="/">Home</a>');
  }
});

server.listen(port, hostname, () => {
  console.log(\`Server running at http://\${hostname}:\${port}/\`);
});

// Run: node server.js
// Visit: http://127.0.0.1:3000/
  `;

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "white",
        borderRadius: "12px",
        marginBottom: "20px",
      }}
    >
      <h2 style={{ color: "#4caf50", marginTop: 0 }}>Task 5: HTTP Server</h2>
      <pre
        style={{
          backgroundColor: "#1e293b",
          color: "#10b981",
          padding: "20px",
          borderRadius: "8px",
          overflowX: "auto",
          fontFamily: "monospace",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

export default HttpServerTask;