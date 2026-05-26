// Simple web server created with the built-in http module
// Import the http module
const http = require('http');
// Create a server object, createServer needs a callback functions
// what happens when there is a request?
const server = http.createServer((req, res) => {
    // your web site logic goes here
    // response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // response content handled depending on the url
    if (req.url.includes('hello')) {
        handleHelloRequest(req, res);
    }
    else if (req.url.includes('about')) {
        res.write('This is the about page.');
    }
    else {
        res.write('Welcome to my server!');
    }
    // finalize the reponse (important, otherwise the client will wait indefinitely)
    res.end();
});
// Make the server listen on port 3000
server.listen(3000);
// Log msg when the server starts
console.log('Server is running on http://localhost:3000');

// This is already a middleware function
function handleHelloRequest(req, res) {
    res.write('Hello, World!');
}