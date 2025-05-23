// This is a simple web app that implements the connect package
// Install connect via npm and import it
const connect = require("connect");
// Create app object by calling connect as a method
const app = connect();
// Make app object listen on port 3000
app.listen(3000);
console.log("Server running on port 3000");
// Define middleware functions
function showHomePage(req, res, next) {
    res.write("Welcome to my Home Page!");
    // if this is the end of the request call end()
    // if you have more middleware functions to call, call next()
    res.end();
}
function showAboutPage(req, res, next) {
    res.write("We are a group of excellent developers!");
    res.end();
}
function showNotFound(req, res, next) {
    res.write("404 Not Found");
    res.end();
}
function logger(req, res, next) {
    console.log("Request: " + req.method + " " + req.url);
    next(); // send the request to the next middleware function
}
// Associate middleware functions to the app by calling app.use()
// Globally For All Requests
app.use(logger);
// For Specific Requests
app.use("/home", showHomePage);
app.use("/about", showAboutPage);
app.use(showNotFound); // globally for all requests that don't match