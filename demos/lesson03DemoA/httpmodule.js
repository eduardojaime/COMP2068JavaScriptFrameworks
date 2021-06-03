const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });

    console.log(req.url);

    res.write(req.url);

    let path = req.url;

    let contactMsg = 'Please send us an email';
    let homepageMsg = 'Welcome!';
    let aboutMsg = 'We are developers!';

    // basic routing using http module
    // registering a handler function (callback, middleware) to a path
    if (path == '/') {         
        handleHomePage(res);    
    }
    else if (path == '/contact') {
        res.write(contactMsg);
        // 30 lines of code... 
    }
    else if (path == '/about') {
        res.write(aboutMsg);
    }
    else {
        res.write('Nothing here =)');
    }



    res.end();
}).listen(3000); // 8080 also good


function handleHomePage(res) {
    res.write('Hello from another function!');
    // some more code
}