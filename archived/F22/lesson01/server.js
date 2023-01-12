// This will be an application that will handle HTTP requests from the internet
// Node.js doesn't need a web server like Apache
// The app is configured as a server
// Utilize the HTTP module
const http = require('http');

// Create the server object and configure it to listen to a port
// specify what happens when there is a request (callback function)
// use method chaining
http.createServer((req, res) => {
    // req to access data coming from the client side
    // res to write a response which will be sent back to the client
    res.writeHead(200, {'Content-Type': 'text-plain'}); // successful plain text response
    res.write("Hello there!");
    // always end the response
    res.end();
}).listen(3000);

// when you run this program it'll be listening to requests until you stop it...
// show a message so we know it's working
console.log('Server running at http://localhost:3000');