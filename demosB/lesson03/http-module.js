// Simple web servers that handles any requests with the same response
const http = require('http');

http.createServer(function (req, res) { 
    console.log(req.method, req.url);  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(3000);

console.log('App is running on http://localhost:3000');