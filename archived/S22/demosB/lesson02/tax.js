// use node's built in library to create an http server
const http = require('http');
const url = require('url');
const accounting = require('accounting');

http.createServer((request, response) => {
    // write response header
    response.writeHead(200, 'text-html');

    // write response content
    response.write('<h1>Tax Calculator</h1>');

    // CALCULATIONS
    // how do I provide values to my app? I need to know a subtotal value to calculate tax
    // use a query string > ?subtotal=100&key2=val2&key3=val3...
    // http://localhost:3000/?subtotal=100

    // extract query property from the url
    let queryString = url.parse(request.url, true).query;
    // access values by name
    let subtotal = queryString.subtotal;
    // calculate tax
    let tax = subtotal * 0.13;
    // calculate total amount for transaction
    // keep in mind JS is a loosely typed language
    let total = Number(subtotal) + Number(tax);

    // show in response content
    response.write('<h4>Subtotal: ' + accounting.formatMoney(subtotal) + '</h4>');
    response.write('<h4>Tax: ' + accounting.formatMoney(tax) + '</h4>');
    response.write('<h4>Total: ' + accounting.formatMoney(total) + '</h4>');

    // end response
    response.end();
}).listen(3000);

// run via > node tax
console.log('App running on http://localhost:3000');