// This is my web application that will run locally and I can view on a browser
// Node works with modules so we need to import these in our apps to implement functionality
// Use node's http module to create and start a local web server
// 1) Import Module
const http = require('http');
// 2) Create Server and Listen to a Port
// method chaining
http.createServer((req, res)=>{
    // all info sent from the client (browser) is in the req object
    // all info that will be sent back to the client is in the res object
    // set response headers, 200 means OK successful request
    res.writeHead(200, {'Content-Type': 'text-plain'});
    // add some content
    res.write('Hola Class!');
    // finalize the response
    res.end();
}).listen(3000);
// 3) Display a message so we know server is up and running
console.log('Server is running at http://localhost:3000');
// Stop terminal by pressing CTRL + C