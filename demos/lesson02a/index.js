const http = require("http");
const url = require("url"); // url package allows you to retrieve querystring values
const accounting = require("accounting");
http
  .createServer((request, response) => {
    // write headers
    response.writeHead(200, "text-html");
    // write body
    response.write("<h1>Tax Calculator</h1>");
    // retrieve data from url
    let queryString = url.parse(request.url, true).query; // returns ?subtotal=100
    let subtotal = queryString.subtotal;
    // calculate tax and total
    let tax = subtotal * 0.13; // tax in ontario
    let total = Number(subtotal) + Number(tax); // 113, JS is loosely typed, it needs explicit casting sometimes
    // write values to response body
    response.write("<h4>Subtotal: " + accounting.formatMoney(subtotal) + "</h4>");
    response.write("<h4>Tax: " + accounting.formatMoney(tax) + "</h4>");
    response.write("<h4>Total: " + accounting.formatMoney(total) + "</h4>");
    // end response
    response.end();
  })
  .listen(3000);
console.log("App is running on http://localhost:3000");
