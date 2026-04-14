import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Ayushi Sathwara</h1><p>Welcome to Local Node Server</p>');
  res.end();
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
