// This is an app that we run and access via a Browser
// import node's built-in http module
const http = require("http");
// create a server object and specify what happens when the server receives a request
http
  // method chaining
  .createServer((req, res) => {
    // put together a response whenever there's a request
    res.writeHead(200, { "Content-Type": "text-plain" });
    res.write("Hello World!");
    res.end(); // indicates processing is done and response must be sent back to user
  })
  .listen(3000); // make server listen for requests

console.log("Server running on http://localhost:3000");
