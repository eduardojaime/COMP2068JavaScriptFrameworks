// Example: https://www.w3schools.com/nodejs/nodejs_http.asp
// Documentation: https://nodejs.org/api/http.html
const http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.write(req.url); // Read url from requests
    // maybe return different content based on URL

    // Default response
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!'); //write a response to the client

    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080 