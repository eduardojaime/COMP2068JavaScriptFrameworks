// creating the server
const http = require('http');

http.createServer((req, res) =>  {
    let path = req.url;
    console.log('Request to : ' + path);

    // Configure routes that show different content
    // associating paths with function
    
    // / /contact /about
    if (path == '/') {
        handleHomePage(res);
    } 
    else if (path == '/contact') {
        handleContactPage(res);
    }
    else if (path == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.write('Welcome to My About Page!');
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.write('There is nothing here!');
        res.end();        
    }


}).listen(3000);

function handleHomePage(res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('Welcome to My Home Page!');
    res.end();
}

function handleContactPage(res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('Welcome to My Contact Page!');
    res.end();
}


console.log('App is running on http://localhost:3000');