// use node's built in library to create an http server
const http = require('http');

// use URL to read parameters from URLs
const url = require('url');

// after installing it via npm, use accounting package for formating
const accounting = require('accounting');

http.createServer((request, response) => {
    // write response header
    response.writeHead(200, 'text-html');

    // write response content
    response.write('<h1>Tax Calculator</h1>');

    // get data from URL
    let queryString = url.parse(request.url, true).query;
    // extract subtotal
    let subtotal = queryString.subtotal;
    // calculate tax
    let tax = subtotal * 0.13; // 13% tax in Ontario
    
    // let total = subtotal + tax;
    let total = Number(subtotal) + Number(tax);

    // show in response content
    response.write('<h4>Subtotal: ' + subtotal + '</h4>');
    response.write('<h4>Tax: ' + tax + '</h4>');
    response.write('<h4>Total: ' + total + '</h4>');

    // how do I provide this values? 
    // use ?subtotal=100
    // http://localhost:3000/?subtotal=100

    // why let total = subtotal + tax; actually concatenates values as if they were text
    // how to handle numeric values?
    // JS is loosely typed, so we need to parse them to number
    // change line 20 above to let total = Number(subtotal) + Number(tax);
    
    // provide formatting by installing npm accounting via > npm i accounting (locally)
    // check package.js and node_modules folder
    // use FormatMoney function
    
    response.write('<h4>Subtotal: ' + accounting.formatMoney(subtotal) + '</h4>');
    response.write('<h4>Tax: ' + accounting.formatMoney(tax) + '</h4>');
    response.write('<h4>Total: ' + accounting.formatMoney(total) + '</h4>');


    // end response
    response.end();
}).listen(3000);

// run via > node tax
console.log('App running on http://localhost:3000');

// problems? if I modify my code, I need to stop and restart my app everytime
// options? install nodemon package, which allows our application to restart automatically whenever changes are detected
// https://www.npmjs.com/package/nodemon
// install globally via > npm i -g nodemon
// now make changes to content