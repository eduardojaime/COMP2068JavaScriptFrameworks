// in-class activity
// you'll have 15 min (until 7:32pm) to fill in the blanks in the code below
let http = require('http');

http.createServer((req, res) =>  {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });

    for (let i = 1; i <= 20; i++) {
        res.write(i + '<br />');
        console.log(i);
    }

    res.end();
}).listen(3000);