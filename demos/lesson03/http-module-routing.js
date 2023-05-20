// this is an example of very basic routing using http module
// import built-in http module
const http = require("http");
// configure the http object as a server
http
  .createServer((req, res) => {
    // what object contains info about the request including url?
    console.log(req.method, req.url); // access method and url e.g. GET /Hello
    let path = req.url;
    res.writeHead(200, { 'Content-Type': 'text/html'});
    if (path == "/hello") {
        ShowHello(res);
    }
    else if (path == "/goodbye") {
        res.write("Goodbye World!");
    }
    else {
        // for any other request
        res.write("Not found");
    }
    res.end();
  })
  .listen(3000);
// reinventing the wheel... this is what a middleware function in connect is
function ShowHello(res){
    res.write("Hello World!");
}
console.log("App running on http://localhost:3000");
