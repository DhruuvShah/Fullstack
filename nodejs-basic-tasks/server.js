const http = require("http");

// Define the hostname and port
const hostname = "127.0.0.1";
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  // Different routes
  if (req.url === "/") {
    // Home page
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node.js Server</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }
          .container {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
            max-width: 600px;
            text-align: center;
          }
          h1 {
            color: #333;
            margin-bottom: 10px;
          }
          p {
            color: #666;
            font-size: 18px;
            line-height: 1.6;
          }
          .links {
            margin-top: 30px;
          }
          a {
            display: inline-block;
            margin: 10px;
            padding: 12px 24px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            transition: background 0.3s;
          }
          a:hover {
            background: #764ba2;
          }
          .success {
            color: #4caf50;
            font-size: 48px;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="success">✅</div>
          <h1>Welcome to Node.js Server!</h1>
          <p>Your Node.js HTTP server is running successfully.</p>
          <p><strong>Server:</strong> ${hostname}:${port}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <div class="links">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/api">API</a>
          </div>
        </div>
      </body>
      </html>
    `);
  } else if (req.url === "/about") {
    // About page
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>About - Node.js Server</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }
          .container {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
            max-width: 600px;
          }
          h1 { color: #333; }
          p { color: #666; line-height: 1.8; }
          a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 6px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>About This Server</h1>
          <p>This is a simple Node.js HTTP server created using the built-in <code>http</code> module.</p>
          <p>Node.js allows you to build scalable network applications using JavaScript on the server side.</p>
          <a href="/">← Back to Home</a>
        </div>
      </body>
      </html>
    `);
  } else if (req.url === "/contact") {
    // Contact page
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Contact - Node.js Server</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }
          .container {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
            max-width: 600px;
          }
          h1 { color: #333; }
          p { color: #666; }
          a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 6px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Contact Us</h1>
          <p>📧 Email: contact@nodejs-server.com</p>
          <p>📱 Phone: +1 234 567 8900</p>
          <p>🌐 Website: www.nodejs-server.com</p>
          <a href="/">← Back to Home</a>
        </div>
      </body>
      </html>
    `);
  } else if (req.url === "/api") {
    // API response (JSON)
    res.setHeader("Content-Type", "application/json");
    const apiResponse = {
      status: "success",
      message: "Welcome to the API",
      timestamp: new Date().toISOString(),
      server: `${hostname}:${port}`,
      endpoints: [
        { path: "/", description: "Home page" },
        { path: "/about", description: "About page" },
        { path: "/contact", description: "Contact page" },
        { path: "/api", description: "API endpoint" },
      ],
    };
    res.end(JSON.stringify(apiResponse, null, 2));
  } else {
    // 404 page
    res.statusCode = 404;
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>404 - Page Not Found</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }
          .container {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
            max-width: 600px;
            text-align: center;
          }
          h1 { color: #f44336; font-size: 72px; margin: 0; }
          p { color: #666; font-size: 18px; }
          a {
            display: inline-block;
            margin-top: 20px;
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
          <h1>404</h1>
          <p>Page not found!</p>
          <p>The page <code>${req.url}</code> does not exist.</p>
          <a href="/">Go to Home</a>
        </div>
      </body>
      </html>
    `);
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log("\n========================================");
  console.log("   🚀 Node.js Server Started!");
  console.log("========================================");
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log("\nAvailable routes:");
  console.log(`  • http://${hostname}:${port}/`);
  console.log(`  • http://${hostname}:${port}/about`);
  console.log(`  • http://${hostname}:${port}/contact`);
  console.log(`  • http://${hostname}:${port}/api`);
  console.log("\nPress Ctrl+C to stop the server\n");
});
