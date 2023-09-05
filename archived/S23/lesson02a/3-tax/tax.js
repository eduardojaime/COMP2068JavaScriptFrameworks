// this is the entry point of my app
// requirements:
// 1) retrieve data from user (subtotal)
// 	GET > query string parameters
// 2) calculate tax (13%)
// 3) calculate total (sub + tax)
// 4) return an html page with this information

// use node's built-in http module to initialize a web server
const http = require("http");
// use node's built-in url module to read parameters from query string
const url = require("url");
const accounting = require('accounting');
// configure server and callback
http
  .createServer((request, response) => {
    // write response object
    response.writeHead(200, "text-html");
    // write html code
    response.write("<h1>Tax Calculator</h1>");
    // get data > calculate > return html
    let queryString = url.parse(request.url, true).query; // http://localhost:3000?subtotal=100
    let subtotal = queryString.subtotal; // auto mapping
    let tax = subtotal * 0.13;
    let total = Number(subtotal) + Number(tax); // JS is a loosely typed language, convert to number explicitly
    response.write("<h4>Subtotal: " + accounting.formatMoney(subtotal) + "</h4>");
    response.write("<h4>Tax: " + accounting.formatMoney(tax) + "</h4>");
    response.write("<h4>Total: " + accounting.formatMoney(total) + "</h4>");
    response.end();
  })
  .listen(3000);
console.log("App running on http://localhost:3000");
