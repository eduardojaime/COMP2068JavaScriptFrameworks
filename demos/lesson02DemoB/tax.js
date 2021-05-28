// import built-in library http
const http = require('http');

// import url module
const url = require('url');

// import npm module after installation
const accounting = require('accounting');

http.createServer((request, response) => {
    // write response header
    response.writeHead(200, 'text-html');

    // write the content
    response.write('<h1>Tax Calculator</h1>');

    // parse my url to an object so I can get values from it
    console.log('Handling request to ' + request.url);

    let queryString = url.parse(request.url, true).query;

    let subtotal = queryString.subtotal;

    let tax = subtotal * 0.13; // 13% tax rate for Ontario

    // Javascript is loosely typed
    let total = Number(subtotal) + Number(tax);

    response.write('<h4>Subtotal: ' + accounting.formatMoney(subtotal) + '</h4>');
    response.write(`<h4>Tax: ${accounting.formatMoney(tax)} </h4>`);
    response.write('<h4>Total: ' + accounting.formatMoney(total) + '</h4>');

    // always close the response
    response.end();
}).listen(3000);

console.log('App running on http://localhost:3000');