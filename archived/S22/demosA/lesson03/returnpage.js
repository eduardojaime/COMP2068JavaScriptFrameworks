// simple web app that returns html response
const http = require('http'); // use built-in module

http.createServer((request, response) => {
    // routing starts with the URL
    let url = request.url.toLowerCase();
    console.log(url);

    // how can I handle requests for different endpoints?
    // basic routing
    // /CONTACT
    if (url == '/contacts') {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        response.write('<h1>Send an email to contact@mypage.com!</h1>');
        response.end();
    }
    // /ABOUT
    else if (url == '/about') {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        response.write('<h1>Our address is 1 Main St, Toronto ON!</h1>');
        response.end();
    }
    else {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        response.write('<h1>Hello Everyone!</h1>');
        response.end();
    }

    // prepare response object and return
    
}).listen(3000);

console.log('App is running at http://localhost:3000');