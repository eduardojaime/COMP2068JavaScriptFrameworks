// This is a web server implementation using connect module
// To start, install connect module using 'npm i connect'
// 1) Import connect
const connect = require('connect');
// 2) Create an app object calling connect() as a method
const app = connect();
// 3) Listen to a port
app.listen(3000);
// 4) Log a message to the console to indicate the server is running
console.log('Server running at http://localhost:3000/');

// 5) Create middleware to handle requests
// Middlewares are functions with three parameters: request, response, and next
function helloWorld(req, res, next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World!');
    res.end();
}
function goodbyeWorld(req, res, next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Goodbye World!');
    res.end();
}
function logger(req, res, next) {
    console.log("Received request to " + req.url);
    // call next() to pass the request to the next middleware in the stack
    next();
}
function notFound(req, res, next) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Page not found!');
    // execution will continue in the pipeline until a middleware calls end()
    res.end();
}
// 6) Configure the app to use the middleware by calling app.use() method
// Global middleware > executed for every request
// app.use(helloWorld);
app.use(logger);
// Path-specific middleware > executed only for requests to a specific path
app.use("/hello", helloWorld);
app.use("/goodbye", goodbyeWorld);
// This rule will handle any path not covered by the previous rules
app.use(notFound);