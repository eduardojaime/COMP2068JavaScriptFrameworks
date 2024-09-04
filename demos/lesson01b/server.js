// This will be a web application using Node.js and the HTTP module
// HTTP is a built-in module in Node.js 
// 1) Import http module using the require() method
const http = require("http");

// 2) Create a server object and listen on port 3000
// This is called method chaining
// createServer() method returns an instance of an HTTP server
//    pass a callback function to the createServer() method
//    to tell the server what to do when it receives an HTTP request
// listen() method binds the server to a port
http.createServer((req, res) => {
    // this function is executed every time there is a request to the server
    // the function takes two arguments: req and res
    // req is the request from the client as an object
    // res is the response from the server as an object
    //    set the response headers
    res.writeHead(200, {"Content-Type": "text/html"});
    //    set the content of the response
    res.write("<h1>Hello World!</h1>");
    //    end the response and send it back to the client
    res.end();
}).listen(3000);

// 3) Print a message to the console to indicate the server is running
console.log("Server running at http://localhost:3000/");