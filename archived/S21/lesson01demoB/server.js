
// import built-in http module
const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text-html'});
    response.write('<html><body><h1>hello</h1></body></html>');
    response.end();
}).listen(4321);

console.log('Server running at http://localhost:4321');