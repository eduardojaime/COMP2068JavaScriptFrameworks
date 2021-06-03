const http = require('http');
const fs = require('fs');

http.createServer(function (req, resp) {
    // /Index route will be served by sending back index.html
    if (req.url === "/index") {
        fs.readFile("pages/index.html", function (error, page) {
            if (error) {
                console.log(error);
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(page);
            }
             
            resp.end();
        });
    } else {
        // Any other route sees hello world
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1>Hello World</h1><br /><br />');
        resp.end();
    }
}).listen(3000);
 
console.log('Server running at http://localhost:3000/');