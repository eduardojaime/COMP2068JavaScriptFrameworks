// Demonstration on how to add routes to your website using
// the built-in http module
// 1) Import the module and create a Server
const http = require('http');
http.createServer((request, response) => {
    // 2) Extract the URL of your request. 
    // E.g. http://localhost:3000/SOMEPATH
    // returns /SOMEPATH
    let path = request.url;
    console.log(path);

    // 4) Create a different response according to the path
    // these are case sensitive
    // What paths are usually there on a web application?
    if (path == '/') {
        response.writeHead(200, 'plain-text');
        response.write('This is the HOME page.');
        response.end();
    }
    else if (path == '/contact') {
        response.writeHead(200, 'plain-text');
        response.write('This is the CONTACT page.');
        response.end();
    } 
    else if (path == '/about') {
        response.writeHead(200, 'plain-text');
        response.write('This is the ABOUT page.');
        response.end();
    }
    else {
        // 404 is HTTP code for NOT FOUND
        response.writeHead(404, 'plain-text');
        response.write(`There's nothing here.`);
        response.end();
    }
}).listen(3000);

console.log('Application running on http://localhost:3000');