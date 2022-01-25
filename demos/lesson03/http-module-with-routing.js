// open a browser and navigate to http://localhost:3000
const http = require('http');
// All requests will be handled by this callback function
// how do I handle different sections then?
http
    .createServer((req, res) => {
        // Response Headers > 200 OK 
        let path = req.url;
        console.log(path);

        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        if (path == '/') {
            res.write('Welcome! This is the home page')
        }
        else if (path == '/contact') {
            res.write('Send me an email at eduardo@developers.com');
        }
        else {
            res.write('Oops! this page doesn\'t exist!');
        }
        res.end();
    })
    .listen(3000);

console.log('App running on http://localhost:3000');