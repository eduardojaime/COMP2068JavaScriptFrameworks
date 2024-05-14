// use node's built-in http module to create a server
const http = require("http");
// use this to retrieve data from url
// e.g. http://localhost:3000/?subtotal=100
const url = require("url");

http
  .createServer((req, res) => {
    // write response header
    res.writeHead(200, { "Content-Type": "text/html" });
    // retrieve data from url
    let querystring = url.parse(req.url, true).query;
    // now querystring contains an object with key-value pairs
    // e.g. { subtotal: '100' }
    let subtotal = querystring.subtotal;
    // TODO calculate tax
    // write content
    res.write("<h1>Tax Calculator</h1>");
    // TODO print subtotal, tax and total amount
    res.write("<p>Subtotal: " + subtotal + "</p>");
    // end response
    res.end();
  })
  .listen(3000);

console.log("Server is running on http://localhost:3000");
