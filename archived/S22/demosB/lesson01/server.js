// This is an app that we want to access via a browser
// Node doesn't need a web server like Apache or IIS
// Node has built-in libraries to do this, but we need to import them
const http = require('http');

// Use node's http module to create and start a local web server
// use method chaining to specify the port which the server listens to
// register a callback function that takes two parameters to handle the requests
http.createServer((req, res) => {
    // send an http header with 200 OK response
    res.writeHead(200, {'Content-Type': 'text-plain'});
    // write some text
    res.write('Hello Summer!');
    // end the response
    res.end();
}).listen(3000);
// display a message so we know it started
console.log('Server running at http://localhost:3000');