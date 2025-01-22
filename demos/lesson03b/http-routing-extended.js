const http = require("http");

const server = http.createServer((req, res) => {
    //how to handle different requests
    console.log(req.url);
    if (req.url === "/") {
        //send headers
        res.writeHead(200, {"Content-Type" : "text/plain"});
        // send content
        res.write("Hello World!!!");
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain"});
        res.write("About Us");
    } else if (req.url === "/projects") {
        res.writeHead(200, { "Content-Type" : "text/plain"});
        res.write("List of projects");
    } else {
        res.writeHead(404, { "Content-Type" : "text/plain"});
        res.write("404 Not Found");
    }
 
    res.end();
 
});

server.listen(3000);