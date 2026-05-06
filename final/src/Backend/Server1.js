const http = require("http");
const url = require("url");
const querystring = require("querystring");

// Create the HTTP server
const server = http.createServer((req, res) => {
  // 1. Parse the requested URL
  const parsedUrl = url.parse(req.url);

  // 2. Parse the query string using the querystring module
  const parsedQuery = querystring.parse(parsedUrl.query);

  // Set the response header to return HTML
  res.writeHead(200, { "Content-Type": "text/html" });

  // 3. Route handling for the specific URL path '/user'
  if (parsedUrl.pathname === "/user") {
    // Extract the query parameters
    const name = parsedQuery.name;
    const age = parsedQuery.age;

    // 4. Display the extracted values in the response
    res.write("<h2>URL Parameters Extracted Successfully</h2>");
    res.write(`<p><strong>Extracted Name:</strong> ${name}</p>`);
    res.write(`<p><strong>Extracted Age:</strong> ${age}</p>`);

    // Output the raw parsed object for demonstration (optional)
    res.write(
      "<hr><p><strong>Raw Query Object:</strong> " +
        JSON.stringify(parsedQuery) +
        "</p>",
    );
  } else {
    // Default response for other routes
    res.write("<h2>Node.js Server is Running</h2>");
    res.write("<p>Please navigate to the test URL:</p>");
    res.write(
      '<a href="http://localhost:4000/user?name=Krishna&age=35">http://localhost:4000/user?name=Krishna&age=35</a>',
    );
  }

  // End the response
  res.end();
});

// Start the server on port 4000
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is successfully running on port ${PORT}`);
  console.log(
    `Please test using this URL: http://localhost:${PORT}/user?name=Krishna&age=35`,
  );
});
