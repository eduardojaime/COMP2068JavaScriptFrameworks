// This is a web server implemented using the http module.
// It will be configured to listen on port 3000 and respond to requests with a simple message.
// 1) Import http module, it's out of the box with node.js
const http = require("http");
// 2) Create a server object
// use a callback function to tell the server what to do when it receives a request
const server = http.createServer((req, res) => {
  // you can extract info sent from the client from REQ
  console.log("Received request for " + req.url);
  // configure the response
  res.writeHead(200, { "Content-Type": "text/plain" });
  // write a message in the response content
  res.write("Hello World!");
  // end the response so that it gets sent back
  res.end();
});
// 3) Listen on port 3000 (standard for node web apps)
server.listen(3000);
// Just to see that it's working, log a message to the console
console.log("Server listening on http://localhost:3000");
