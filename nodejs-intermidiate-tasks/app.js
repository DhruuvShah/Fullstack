const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

let counter = 0;

const server = http.createServer((req, res) => {
  counter++;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  res.end(`
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
        <div class="counter">${counter}</div>
        <p>Total Requests: ${counter}</p>
        <p>Time: ${new Date().toLocaleTimeString()}</p>
        <p>Edit app.js and save to see changes instantly!</p>
      </div>
    </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`🚀 Server running at http://${hostname}:${port}/`);
  console.log("👀 Nodemon is watching for changes...");
  console.log("📝 Edit this file and save to see auto-reload!");
});
