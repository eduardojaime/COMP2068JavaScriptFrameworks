// This a web server implemented using the out-of-the-box http module
// 1) Import the http module
const http = require("http");
// 2) Create a server object
// Provide a callback function to tell the server what to do
// when a request is received
// the callback function takes two arguments, request and response objects
const server = http.createServer((req, res)=>{
    // Log the request url to the console
    console.log("Received :" + req.method + " " + req.url);
    // Set the response header
    res.writeHead(200, { "Content-Type": "text/plain" });
    // Set the response content
    res.write("Hello World!");
    // Finalize the response object (important to end the response)
    res.end();
});
// 3) Listen to a port, 3000 is the default port for node web apps
server.listen(3000);
// 4) Log a message to the console to indicate the server is running
console.log("Server is running on http://localhost:3000");