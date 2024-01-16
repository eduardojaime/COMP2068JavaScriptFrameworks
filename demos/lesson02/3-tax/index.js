// this is the entry point of my app
// import built-in packages/modules to create a server
const http = require("http");
// use URL module to read parameters from url (query string)
const url = require("url");
// use the third-party accounting package to format monetary amounts
const accounting = require("accounting");

http.createServer((req, res) => {
    res.writeHead(200, "text-html"); // specify response status code and content type
    res.write("<h1>Tax Calculator</h1>"); // add content to response body
    // TODO tax calculator logic
    // use query string to retrieve subtotal amount from user
    // http://localhost:3000?subtotal=100
    let queryString = url.parse(req.url, true).query; // extracts query string as an object
    let subtotal = queryString.subtotal; // this is they key name from the url ?subtotal=100
    let tax = subtotal * 0.13; // 13%
    let total = Number(subtotal) + Number(tax); // + can be addition OR concatenation
    // show in response body
    res.write("<h4>Subtotal : " + accounting.formatMoney(subtotal) + " </h4>");
    res.write("<h4>Tax : " + accounting.formatMoney(tax) + " </h4>");
    res.write("<h4>Total : " + accounting.formatMoney(total) + " </h4>");
    res.end(); // send response back to client browser
}).listen(3000);
console.log("App is running on http://localhost:3000");