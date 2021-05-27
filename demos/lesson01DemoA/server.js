const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text-plain'});
    response.write('Hello World!');
    response.end();
}).listen(3000);

console.log('Server is running on http://localhost:3000');