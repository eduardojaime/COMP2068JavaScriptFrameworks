// Answer discussion at 7:48pm
let http = require('http'); // import package in your app

http.createServer((req, res) =>  {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });

    for (let i = 1; i <= 20; i++) {
        res.write(i + '<br />');
        console.log(i);
    }

    res.end(); // end the processing of the response

}).listen(3000); // 3000 is default, but it can be any