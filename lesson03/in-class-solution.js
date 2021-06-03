let http = ____________('http');

http.createServer((req, res) =>  {
    res.writeHead(__________, { 'Content-Type': 'text/html; charset=UTF-8' });

    for (_________ i = 1; i ___________ 20; i++) {
        ___________.write(i + '<br />');

        console.log(i);
    }

    _________.end();

}).listen(________);