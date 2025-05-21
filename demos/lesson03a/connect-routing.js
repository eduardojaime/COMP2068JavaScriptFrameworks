// Sample web application using Connect module
// Connect is not a built-in module in Node.js, but a third-party module
// and must be installed via npm
// Import Connect
const connect = require("connect");
// Create an app object
// This object represents my web app server and I can use it to configure its behaviour
const app = connect();
// Listen on port 3000
app.listen(3000);
// Print a message to the console to indicate that the server is running
console.log("Server running at http://localhost:3000/");
// Define middleware functions
function homePage(req, res, next) {
    res.write("Welcome to the home page!");
    // in every middleware function
    // either call next() to pass control to the next middleware function
    // or end() to finalize the response
    res.end();
}
function aboutPage(req, res, next) {
    res.write("Welcome to the about page!");
    res.end();
}
// Global Middlewares: Logging, Authentication, Session, etc.
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    // Call next() to pass control to the next middleware function
    next();
}
function notFound(req, res, next) {
    res.write("<h1>404 Not Found</h1>");
    res.end();
}
// Associate middleware functions with routes
// The order in which middleware functions are defined is important
// Globally for all requests
app.use(logger);
// Associate to specific path
app.use("/home", homePage);
app.use("/about", aboutPage);
// handle not found pages
app.use(notFound);