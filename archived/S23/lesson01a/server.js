// This is an app that listens to a port and handles HTTP requests
// 1) Import Package by using the require() function
const http = require("http");
// 2) Implement code functionality
// Start local server using the HTTP object, notice how intellisense shows suggestions
// we will then use a callback function to tell the server how to handle requests
http
  .createServer((req, res) => {
    // what to do with the request?
    // nothing
    // Put together a response
    res.writeHead(200, { 'Content-Type': 'text-plain'}); // Status code, Headers
    // Add content to the body
    res.write("Hello World!");
    // always mark your responses as complete by calling end()
    res.end();
  })
  .listen(3000);
// this program keeps running without output, add console message to know it executed
console.log("Server running on https://localhost:3000");
// 3) Export this file as a module (TODO for next week)
