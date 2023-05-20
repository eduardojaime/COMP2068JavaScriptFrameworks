// Follow the approach we already discussed
// import built-in http module
const http = require('http');
// configure the http object as a server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write("Hello World!");
    res.end();
}).listen(3000);

console.log("App running on http://localhost:3000");