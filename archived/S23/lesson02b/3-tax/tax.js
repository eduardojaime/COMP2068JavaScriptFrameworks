// this is a web server app built with the built-in http module
// communications over the internet use the HTTP protocol
// with this protocol client and server exchange messages called REQUEST and RESPONSE
// request message contains headers, body, or querystring
// I'm expecting to receive the subtotal amount as query string
// https://LOCALHOST:3000?subtotal=129302
const http = require("http");
const url = require("url"); // so we can read the subtotal amount
const accounting = require('accounting');

http
  .createServer((request, response) => {
    // retrieve data from query string
    let queryString = url.parse(request.url, true).query;
    let subtotal = queryString.subtotal; // same name as what I used in the URL
    // calculate tax
    let tax = subtotal * 0.13;
    let total = Number(tax) + Number(subtotal); // js is loosely typed language
    // prepare response
    response.writeHead(200, "text-html");
    response.write("<h1>Tax Calculator</h1>");
    response.write("<h4>Subtotal: " + accounting.formatMoney(subtotal) + "</h4>");
    response.write("<h4>Tax: " + accounting.formatMoney(tax) + "</h4>");
    response.write("<h4>Total: " + accounting.formatMoney(total) + "</h4>");
    // end response
    response.end();
  })
  .listen(3000);
console.log("App running on http://localhost:3000");
