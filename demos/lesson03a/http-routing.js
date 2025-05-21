// This is a simple web server application using the http module
// We'll try to implement a basic routing system to show different pages
// Import the http module
const http = require("http");
// Create a server, define callback function and listen on port 3000
// This is called method chaining, it allows us to call multiple methods one after another
http
  .createServer((req, res) => {
    // write headers > status code and content type
    res.writeHead(200, { "Content-Type": "text/html" });
    // Challenge: we need to show different content based on the URL path
    // Solution: basic routing rules with if-else statement based on path
    let path = req.url;
    // Next Challenge: What if we have more complex pages with a lot more content?
    // Solution:
    // we can point to an HTML file instead of writing the content in the code > Views or Templates
    // simplify code by using functions > Middleware approach
    if (path == "/") {
      showHomePage(req, res);
    } else if (path === "/about") {
      showAboutPage(req, res);
    } else if (path === "/contact") {
      res.write("<h1>Send me an email!</h1>");
    } else {
      res.write("<h1>404 Page Not Found</h1>");
    }
    // finalize the response
    res.end();
  })
  .listen(3000);

// Print a message to the console to indicate that the server is running
console.log("Server running at http://localhost:3000/");

// Middleware Functions
function showHomePage(req, res) {
  res.write("<h1>Welcome to my node web page!</h1>");
}
function showAboutPage(req, res) {
  res.write("<h1>Here is my information page</h1>");
}
