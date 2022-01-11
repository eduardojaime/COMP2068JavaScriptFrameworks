// web server app
// it implements the built-in http module
const http = require('http');

// start web server and listen to a port
// call createServer()
// use method chaining to call listen()
http.createServer((request, response) => {
    // tell the client that this was successful and I'm sending back plain text
    response.writeHead(200, { 'Content-Type': 'text-plain' });
    // Send some text content
    response.write('Hello World!');
    // mark response as finished
    response.end();
}).listen(3000);

console.log('Server running on http://localhost:3000');