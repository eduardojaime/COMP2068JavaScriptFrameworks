// creating the server
const http = require('http');

http.createServer((req, res) =>  {
    // 200 means OK
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    // 404 > NOT FOUND

    // let vs var
    for (let i = 1; i <= 20; i++) {
        res.write(i + '<br />');
        console.log(i);
    }

    res.end();
}).listen(3000);

console.log('App is running on http://localhost:3000');