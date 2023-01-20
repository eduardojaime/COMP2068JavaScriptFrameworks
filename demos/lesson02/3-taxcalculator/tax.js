// import libraries > http, url, accounting
// built-in
const http = require('http');
const url = require('url');
// npm packages
const accounting = require('accounting');
// call create server and then listen to a port
http.createServer((req, res) => {
    // write response headers
    res.writeHead(200, 'text-html');
    // write content
    res.write('<h1>Tax Calculator</h1>');
    //      retrieve subtotal from url >> expecting http://localhost:3000/?subtotal=100
    let queryString = url.parse(req.url, true).query; // makes query string a JSON object
    //      calculate tax
    let subtotal = queryString.subtotal; // has to match with querystring parameter name
    let tax = subtotal * 0.13; // Ontario tax 13%
    let total = Number(subtotal) + Number(tax); // make both Numbers so JS doesn't get confused 
    //      show subtotal, tax and total as html in the response object
    res.write('<h4>Subtotal: ' + accounting.formatMoney(subtotal) + '</h4>');
    res.write('<h4>Tax: ' + accounting.formatMoney(tax) + '</h4>');
    res.write('<h4>Total: ' + accounting.formatMoney(total) + '</h4>');
    // close response
    res.end();
}).listen(3000);
// show log message
console.log('App is running on http://localhost:3000');