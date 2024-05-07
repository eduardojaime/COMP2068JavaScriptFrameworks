// This is an example web app with Node.js
// Node comes with a built-in web server
// which offers basic http functionality
// 1) Import necessary modules
// since http is a built-in module, we don't need to install it from npm
const http = require("http");
// 2) Create a server object
http
  .createServer((request, response) => {
    // Set the HTTP status code in response header
    response.writeHead(200, { "Content-Type": "text/plain" });
    // Set content for the response
    response.write("Hello World! This is my first Node.js web app.");
    // End the response object to send it back
    response.end();
  })
  .listen(3000); // 3) Listen on port 3000

// 4) Output to console so we know it's working
console.log("Server running at http://localhost:3000/");