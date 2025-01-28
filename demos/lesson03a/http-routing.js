// This is a simple web application server created using the built-in http module in Node.js
// We are going to configure it to listen to port 3000 (default port for Node.js applications)
// and respond to requests with a simple message
// 1) Import the http module
const http = require("http");
// 2) Create a server object
// createServer() accepts a callback function with two arguments
// use this callback function to tell the server how to respond to requests
const server = http.createServer((req, res) => {
    // we can user the req object to get information about the request
    console.log("Request Received : " + req.url);
    // Configure response headers (status code, content type)
    res.writeHead(200, { "Content-Type": "text/plain" });

    // If we wanted to handle different responses
    // based on the request URL, we could use an if statement
    if (req.url === "/") {
        // Write a message in the response body
        res.write("Hello World!");
    } else if (req.url === "/about") {
        res.write("This is the about page");
    } else {
        res.write("Page not found");
    }

    // Finalize the response to send it back to the client
    res.end();
});
// 3) Listen to port 3000
server.listen(3000);
// 4) Print a message to the console to indicate that the server is running
console.log("Server is running at http://localhost:3000");