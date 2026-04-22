const localHttp = require("http");

localHttp
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>Dhruv Shah</h1> <p>Welcome to Local Server</p>`);
    res.end();
  })
  .listen(8000)
  .addListener("listening", () => {
    console.log("Server is running on port 8000");
  });
