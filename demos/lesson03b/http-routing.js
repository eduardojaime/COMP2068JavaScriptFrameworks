// Simple web application that shows html content
// Import http module
const http = require("http");
// Call create server, pass callback function and listen on port 3000
http
  .createServer((req, res) => {
    // console.log(req);
    // Set the response header to indicate status code and headers
    res.writeHead(200, { "content-type": "text/html" });
    // Retrieve the URL from the request object
    var url = req.url;
    // Routing Logic with if-else statements
    if (url === "/") {
      showHomePage(req, res);
    } else if (url === "/about") {
      showAboutPage(req, res);
    } else if (url === "/contact") {
      showContactPage(req, res);
    } else {
      showNotFoundPage(req, res);
    }
    // Finalize the response and send it back
    res.end();
  })
  .listen(3000);
// Print a message to the console when the server is running
console.log("Server running at http://localhost:3000/");

// Middleware functions
function showHomePage(req, res) {
  // Write the response content for this specific page
  res.write("<h1>Welcome to my web app!</h1>");
  // this allows us to add more logic here
}
function showAboutPage(req, res) {
  // Write the response content for this specific page
  res.write("<h1>We are a group of developers</h1>");
}
function showContactPage(req, res) {
  // Write the response content for this specific page
  res.write("<h1>Contact us at devs@amazingcoding.ca</h1>");
}
function showNotFoundPage(req, res) {
  // Write the response content for this specific page
  res.write("<h1>404 Not Found</h1>");
}
