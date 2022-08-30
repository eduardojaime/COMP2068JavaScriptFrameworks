// Simple web servers that handles any requests with the same response
const http = require('http');

http.createServer(function (req, res) {
    let path = req.url;
    console.log(req.method, req.url);

    if (path == '/' || path == '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Hello World!');
        res.end();
    }
    else if (path == '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Visit us at 1 Main St, Toronto ON');
        res.end();
    }
    else if (path == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('We are a company that makes products');
        res.end();
    }
    else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Not found!');
        res.end();
    }

}).listen(3000);

console.log('App is running on http://localhost:3000');