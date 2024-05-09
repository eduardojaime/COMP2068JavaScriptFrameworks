// This is a simple web application in Node.js
// Node is different than other frameworks in that
// you don't need a web server like Apache or IIS
// Node is the web server
// Use the built-in http module to create a web server
const http = require("http");
// Create a web server and listen to a port
// Use method chaining
http
  .createServer((request, response) => {
    // Send a response to the client
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello! this is my first webapp in Node!");
    response.end();
  })
  .listen(3000);

// Print a message to the console
console.log("Server running at http://localhost:3000/");