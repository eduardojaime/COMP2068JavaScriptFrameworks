/*  This is an application that we want to run from a browser
    Node is different in that we don't need a web server like Apache, or IIS.
    Node has its own library but we need to import it into our project.
*/
// Use node's http module to create & start a local webserver. Import it using require()
const http = require('http');

// start a local webserver, note that VS uses intellisense to show available methods
// this method will run asynchronously and listen for events: requests and response
// it needs a callback function with two parameters: request, response
http.createServer((req, res) => {
    // send an HTTP header with a 200 OK response
    res.writeHead(200, {'Content-Type': 'text-plain'});

    // write some text
    res.write('Hello World - My first node web application!');

    // end request
    res.end();
}).listen(3000); // listen to a port

// display a message so we know it started
console.log('Server running at http://localhost:3000');

// start our server by opening the terminal and typing in node server
// stop the server by entering CTRL+C in the terminal
// if file is updated, server needs to be restarted