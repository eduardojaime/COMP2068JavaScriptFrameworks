// this app is a web server that runs on our machine and listens to a port for HTTP requests
// ASP.NET > IIS, JAVA > APACHE??
// Node has its own library to create a web server from scratch
// Use a built-in node module
const http = require("http");

// initialize web server, specify what to do when there's a request (callback), specify port to listen to
// method chaining
// req represents the request sent by the client
// res represents the response we will send to the client
// is this asynchronous or synchronous?
http.createServer((req, res)=>{
    // HTTP responses have status code and content (body)
    res.writeHead(200, { 'Content-Type': 'text-plain' });
    // write some text to the content body
    res.write("Hello world!");
    // Finalize the response by calling end()
    res.end();
}).listen(3000);

console.log("Server is running on http://localhost:3000");