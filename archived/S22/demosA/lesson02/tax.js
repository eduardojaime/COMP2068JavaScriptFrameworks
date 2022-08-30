// create web server
// we'll read parameters from the URL of the request to calculate tax
// app will return calculation as html
const http = require('http');
const url = require('url');
const accounting = require('accounting');

http.createServer((request, response) => {
    // send OK response with html
    response.writeHead(200, 'text-html');
    response.write('<html><head></head><body>');

    response.write('<h1>Tax Calculator</h1>');

    // read input from url parameters
    // http://localhost:3000/?subtotal=100
    let queryString = url.parse(request.url, true).query; // now we have ?subtotal=100
    // extract subtotal
    let subtotal = queryString.subtotal;
    // calculate tax
    let tax = subtotal * 0.13; // 13% tax in ontario
    // calculate total amount
    let total = Number(subtotal) + Number(tax);

    // write to response body
    response.write('<h4>Subtotal: ' + accounting.formatMoney(subtotal) + ' </h4>');
    response.write('<h4>Tax: ' + accounting.formatMoney(tax) + ' </h4>');
    response.write('<h4>Total: ' + accounting.formatMoney(total) + ' </h4>');

    response.write('</body></html>');
    response.end();
}).listen(3000);

console.log('App is running at http://localhost:3000');