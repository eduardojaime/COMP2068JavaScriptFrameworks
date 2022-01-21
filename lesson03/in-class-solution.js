// Complete the code below to print the numbers from 1 to 20
// run this app using the 'node' command in the terminal
// open a browser and navigate to http://localost:3000
let http = ____________('http');

http.createServer((req, res) =>  {
    res.writeHead(__________, { 'Content-Type': 'text/html; charset=UTF-8' });

    for (_________ i = 1; i ___________ 20; i++) {
        ___________.write(i + '<br />');

        console.log(i);
    }

    _________.end();

}).listen(________);