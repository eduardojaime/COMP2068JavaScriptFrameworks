// Simple web application built with the http module
// It counts from 1 to 10 and shows the numbers on the page and the console
// Import http module
const http = require("http");
// Call the createServer method of the http module
// Pass a callback function to specify what to do when a request is received
// Use method chaining to listen on port 3000
http
  .createServer((req, res) => {
    // Set the response header to indicate status code and headers
    res.writeHead(200, { "content-type": "text/html" });
    // Loop and count from 1 to 10
    for (var i = 1; i <= 10; i++) {
      // Print the numbers to the console using console.log()
      console.log(i);
      // Print the numbers to the response using res.write()
      res.write(i.toString() + "<br/>");
    }
    // Finalize and send back the response using res.end()
    res.end();
  })
  .listen(3000);
// Print a message to the console when the server is running
console.log("Server running at http://localhost:3000/");
