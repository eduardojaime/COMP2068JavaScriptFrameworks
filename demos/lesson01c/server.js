// This will be a web application
// We will use the built-in http module to create a server object
// We will use the listen() method to listen to a port
// We will print a message to the console when the server is running
const http = require("http");
// Create a server object and listen to a port for HTTP requests
// pass a callback function to tell the server what to do
http.createServer((req, res) => {
    // req is the request object and contains info sent by the client
    // res is the response object and contains info that will be sent back to them
    // Specify what to do when the server receives a request
    // Set a status code for the response
    res.writeHead(200, {"Content-Type": "text/html"});
    // Set content for the response
    res.write("<h1>Hello World!</h1>");
    // End the response
    res.end();
}).listen(3000);
// Print a message to the console
console.log("Server running at http://localhost:3000/");
