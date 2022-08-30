// This is an app we want to run from a browser
// Node has built-in libraries (very basic ones) that we can use in our projects

// import the HTTP module to enable the app to listen to HTTP requests
const http = require('http');

// start webserver, this will run asynchronously and listen for events
// as any async method, it requires a callback function which takes a request and response objects
// make it listen to port 3000
http.createServer((req, res) => {
    // function code goes here
    // req contains information sent from the browser
    // res contains information sent back to the browser
    // standard things to include: STATUS CODE, content, end()
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.write('Hello Summer Class!');
    res.end();
}).listen(3000);

console.log('Application running on http://localhost:3000');