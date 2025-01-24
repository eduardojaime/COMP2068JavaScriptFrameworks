const http = require("http");
const server = http.createServer((req, res) => {
    console.log("Received :" + req.method + " " + req.url);
    res.writeHead(200, { "Content-Type": "text/plain" });
    
    // handle different routes using if-else statements
    if (req.url === "/") {
        res.write("Hello World!");
    } else if (req.url === "/about") {
        res.write("This is the about page");
    } else if (req.url === "/projects") {
        res.write("These are the projects I worked on");
    } else {
        res.write("Page not found");
    }

    res.end();
});
server.listen(3000);
console.log("Server is running on http://localhost:3000");