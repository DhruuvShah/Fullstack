const http = require('http');

// 7) create http server and display faculty details as a html response from server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Faculty Details</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; padding: 40px; background: #F5F5F7; }
        .card { background: white; padding: 20px; border-radius: 12px; max-width: 400px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        h1 { font-size: 20px; color: #1D1D1F; }
        ul { list-style: none; padding: 0; }
        li { padding: 10px 0; border-bottom: 1px solid #eee; color: #555; }
        li:last-child { border-bottom: none; }
        strong { color: #0071E3; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Faculty Directory</h1>
        <ul>
          <li><strong>Dr. Alan Turing</strong> - Computer Science</li>
          <li><strong>Dr. Marie Curie</strong> - Mathematics</li>
          <li><strong>Dr. Grace Hopper</strong> - Physics</li>
        </ul>
      </div>
    </body>
    </html>
  `);
  res.end();
});

server.listen(8001, () => {
  console.log('Faculty details server is running at http://localhost:8001');
});
