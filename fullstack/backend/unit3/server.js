import local_http from 'http';

local_http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write(`<h1>Ayushi Sathwara</h1><p>Welcome to Local Node Server</p>`);
  res.end();
}).listen(8000).addListener("listening", () => {
  console.log("Server is running at port 8000");
});
