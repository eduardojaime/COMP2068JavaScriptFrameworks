// Routing with the HTTP module is not a very straight-forward task
var http = require("http");
// step 2 configure http object (web app)
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    console.log(req.url);
    if (req.url === "/") helloPage(); //middleware function at the end of the day
    else if (req.url === "/about") res.write("<h1>About!</h1>");
    else if (req.url === "/contact") res.write("<h1>Contact!</h1>");
    res.end();
  })
  .listen(3000);
console.log("App is running on http://localhost:3000");

function helloPage() {
    res.write("<h1>Hello World!</h1>");
}
