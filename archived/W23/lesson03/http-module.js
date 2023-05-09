// routing with http-module
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    // code goes here
    // implementing routing
    // execute a different action depending on the URL path
    let path = req.url;
    console.log(path);
    // (very) basic routing
    if (path == '/') {
        res.write('<h1>Welcome to my page</h1>');
    }
    else if (path == '/about') {
        res.write('<h1>We are XYZ company, dedicated to good software!</h1>');
    }
    else if (path == '/contact') {        
        res.write('<h1>Send us an email at contact@xyz.ca</h1>');
    }
    else {
        res.write('Page does not exist');
    }

    res.end();
  })
  .listen(3000);
console.log("Application is running on http://localhost:3000");
