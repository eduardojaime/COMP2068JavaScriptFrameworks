// Create a new file called loop.js
// Include Node’s built-in http module
// Start the web server on port 3000, logging out a message to the console that the server is running
// Inside the callback of the createServer method, loop from 1 to 20 and output these numbers to the browser, each time on a separate line
// step 1 import modules
var http = require("http");
// step 2 configure http object (web app)
http
  .createServer(function (req, res) {
    // header
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    // body
    for (let i = 1; i <= 20; i++) {
      res.write(i + "<br>"); // "<p>" + i + "</p>"
      console.log(i);
    }
    // indicate it's done
    res.end();
  })
  .listen(3000);
console.log("App is running on http://localhost:3000");
