// web application
// we are going to calculate tax based on parameters sent by the user
// parameters will be retrieved via URL
// http://localhost:3000/?subtotal=100
// tax rate is 13% in ON > total of $ 113
// display subtotal, calculated tax, total amount on UI
const http = require('http');
const url = require('url');
const accounting = require('accounting');

http.createServer((request, response) => { // req is info from user, res is what we send back
    response.writeHead(200, 'text-html');
    response.write('<h1>Tax Calculator</h1>');

    // INPUT > retrieve data from URL (querystring > ?subtotal=100) 
    // retrieve querystring
    let querystring = url.parse(request.url, true).query;
    // retrieve the subtotal (parameter) and access its value
    let subtotal = querystring.subtotal;
    console.log(subtotal);

    // PROCESS
    // calculate tax amount
    let taxAmt =subtotal * 0.13; // assuming 13% tax in Ontario
    // calculate total amount
    let totalAmt = Number(subtotal) + Number(taxAmt);

    // OUTPUT
    response.write('<h4>Subtotal Amount: ' + accounting.formatMoney(subtotal) + '</h4>');
    response.write('<h4>Tax Amount: ' + accounting.formatMoney(taxAmt) + '</h4>');
    response.write('<h4>Total Amount: ' + accounting.formatMoney(totalAmt) + '</h4>');

    response.end(); // tell the server that response is ready to be sent back
}).listen(3000);

console.log('App is running on http://localhost:3000');