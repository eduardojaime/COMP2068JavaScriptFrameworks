// Warm-up (10 mins)
// Save this file as for-loop.js.  
// Fill in the blanks so when this file loads at http://localhost:3000, 
// it does the following:
//    prints the numbers 1 to 20 on the page, each on a new line
//    prints the numbers 1 to 20 to the console

let http = require('http'); // built-in 

// all requests are handled by the same function
http.createServer((req, res) =>  {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' }); // status code OK

    for (let i = 1; i <= 20; i++) { // 1 2 3 .... 19 20
        res.write(i + '<br />');

        console.log(i);
    }

    res.end();

}).listen(3000);