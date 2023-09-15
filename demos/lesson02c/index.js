// simple app using http module
const http = require("http"); // built-in module to create a web server app
const url = require("url"); // built-in module to parse querystring value
const accounting = require("accounting"); // npm module to format currency values
http.createServer((request, response) => {
    response.writeHead(200, "text/html"); // status code and content type
    response.write("<h1>Tax Calculator</h1>");
    // access and parse querystring
    // querystring = ?subtotal=100
    let queryString = url.parse(request.url, true).query; // returns querystring as an object
    let subtotal = queryString.subtotal; // name must match the querystring key
    // calculate tax and total
    let tax = subtotal * 0.13;
    let total = Number(subtotal) + Number(tax); // loosely typed language
    // print out values
    response.write("<h4>Subtotal: " + accounting.formatMoney(subtotal) + "</h4>");
    response.write("<h4>Tax: " + accounting.formatMoney(tax) + "</h4>");
    response.write("<h4>Total: " + accounting.formatMoney(total) + "</h4>");
    // response is complete and can be sent back
    response.end(); 
}).listen(3000);

console.log("App is running on http://localhost:3000");