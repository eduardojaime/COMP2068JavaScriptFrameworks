// This is a webserver app that returns text when accessed via a browser
// access via http://localhost:3000
// We need a web app... what do we do?
// simplest approach is to use the built-in module called HTTP
const http = require("http"); // use require() to import modules either built-in or third-party
// use the http object and call createServer method, pass a callback to handle requests
// code below uses method chaining
http
  .createServer((req, res) => {
    // modify the response object to assemble a proper HTTP response to be sent back to the client
    res.writeHead(200, { "Content-Type": "text-plain" });
    res.write("Hello world! This is my first node.js web app!");
    res.end(); // finalizes the response and sends it back to the client
  })
  .listen(3000);

// add some message to display in the terminal while this runs
console.log("Server is running on http://localhost:3000");
