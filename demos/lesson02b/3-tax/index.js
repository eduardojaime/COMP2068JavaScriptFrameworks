// imports at the top
const http = require("http");
const url = require("url"); // allows us to parse querystring from request
const accounting = require("accounting");
http.createServer((request, response)=>{
    response.writeHead(200, "text/html");
    // in order to access querystring we need the url package
    response.write("<h1>Tax Calculator</h1>");
    // obtain querystring
    let queryString = url.parse(request.url, true).query; // returns ?subtotal=100
    let subtotal = queryString.subtotal; // name must match key in url querystring
    // calculate tax
    let tax = subtotal * 0.13;
    // calculate total
    let total = Number(subtotal) + Number(tax);
    // write to response body
    response.write("<h4>Subtotal: " + accounting.formatMoney(subtotal) + "</h4>")
    response.write("<h4>Tax: " + accounting.formatMoney(tax) + "</h4>")
    response.write("<h4>Total: " + accounting.formatMoney(total) + "</h4>")
    response.end(); // indicate response can be returned to client
}).listen(3000);
console.log("App is running on http://localhost:3000");
