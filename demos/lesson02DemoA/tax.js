// use the built-in http module
const http = require('http');
const url = require('url');

// after installing it with npm
const accounting = require('accounting');

http.createServer((request, response) => {
    // always provide a status code
    response.writeHead(200, 'text-html');

    // write your content in this area
    response.write('<h1>Amazing Tax Calculator</h1>');

    console.log(request.url);

    let queryString = url.parse(request.url, true).query; // anything after the '?'

    let subtotal = queryString.subtotal;
    
    let tax = subtotal * 0.13; // Tax in ON is 13%

    let total = Number(subtotal) + Number(tax);

    response.write('<h4>Subtotal: ' + accounting.formatMoney(subtotal) + '</h4>');
    response.write('<h4>Tax: ' + accounting.formatMoney(tax) + '</h4>');
    response.write('<h4>Total: ' + accounting.formatMoney(total) + '</h4>');

    // always close the response
    response.end();
}).listen(3000);

console.log('App is running on http://localhost:3000');