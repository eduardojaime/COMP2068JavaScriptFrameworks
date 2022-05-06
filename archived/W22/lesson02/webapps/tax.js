// built-in http module to create an http server
const http = require('http');
const url = require('url');
const accounting = require('accounting');

http.createServer((request, response) => {
    // callback function to handle an http request to my server
    // write response header > status code 200 OK, content type html
    response.writeHead(200, 'text-html');

    // provide a response content
    response.write('<h1>Tax Calculator</h1>');

    // how to pass parameters?
    // http://localhost:3000/?subtotal=100&taxrate=13 >>>
    let queryString = url.parse(request.url, true).query;
    let subtotal = queryString.subtotal;
    let rate = queryString.taxrate;
    let taxes = subtotal * (rate / 100); //ontario rate 0.13 or 13%
    let total = Number(subtotal) + Number(taxes); // it will give you 10013

    response.write('<h4>Subtotal: ' + accounting.formatMoney(subtotal) + '</h4>');
    response.write('<h4>Tax: ' + accounting.formatMoney(taxes) + ' </h4>');
    response.write('<h4>Total: ' + accounting.formatMoney(total) + '</h4>');

    // mark response as complete
    response.end();
}).listen(3000);

console.log('App running on http://localhost:3000');