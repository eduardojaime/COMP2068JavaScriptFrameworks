// This is a Web Server Application
// It utilizes the built-in http module to create a server
// It listens on port 3000 for incoming requests
// 1) Import required modules
const http = require("http");
// 2) Create a server object
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Hello World! This is my first webapp in Node!</h1>");
    response.end(); // at this point the response is sent to the client
  })
  .listen(3000); // 3) Listen for incoming requests

// 4) Print message to console
console.log("Server running at http://localhost:3000/");
