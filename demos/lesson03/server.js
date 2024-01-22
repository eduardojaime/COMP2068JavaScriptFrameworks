// Routing with Connect
// Import connect
const connect = require("connect");
// Create app object
const app = connect();
// Listen to a port
app.listen(3000);
console.log("App is running on http://localhost:3000");
// Create middleware functions
function helloWorld(req, res, next) {
    res.write("Hello World!");
    res.end();
}
function goodnightWorld(req, res, next) {
    res.write("Goodnight World!");
    res.end();
}
function logger(req, res, next) {
    console.log("Received request to path: " + req.url);
    next(); // call next in order for the server to know that another middleware function must be executed
}
function notFound(req, res, next) {
    res.write("This section doesn't exist");
    res.end();
}
// Associate middleware functions to paths
// app.use(helloWorld); // app.use() without path parameter associates function to ALL paths, it overwrites everything
app.use(logger); // logger ALWAYS executes first and calls next(), dispatches knows what the next one is
app.use("/hello", helloWorld);
app.use("/goodnight", goodnightWorld); // associates the middleware ONLY to path /goodnight
app.use(notFound);
