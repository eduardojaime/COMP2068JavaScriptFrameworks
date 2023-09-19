// Routing with HTTP module
// What sections are there in a website? Home, About, Contact
const http = require("http");
http
  .createServer((req, resp) => {
    resp.writeHead(200, "text/html");
    // Add content to response
    console.log(req.url);
    if (req.url == "/") resp.write("Home");
    else if (req.url == "/about") resp.write("About");
    else if (req.url == "/contact") resp.write("Contact");
    else resp.write("Not found");
    resp.end();
  })
  .listen(3000);
console.log("App is running at http://localhost:3000");
