// step one: how do we import modules in our code?
let http = require('http');

// locahost
// http.createServer(function(req, res) {
http.createServer((req, res) => {
    // Specify a return code
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    // differences between var and let?
    // SCOPE > life cycle of a variable
    console.log(req.url);

    for (let i = 1; i <= 20; i++) {
        res.write(i + '<br />');
        
        console.log(i);
    }

    res.end();

}).listen(3000); // 8080 also good