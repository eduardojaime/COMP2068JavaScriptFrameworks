// This is a web server implementation using the connect module
// To start, install the connect module using 'npm i connect'
// 1) Import the connect module
const connect = require("connect");
// 2) Create an app object
const app = connect();
// 3) Listen to the port 3000
app.listen(3000);
console.log("Server is running on http://localhost:3000");
// 4) Configure routes
// register them in order of execution
// app.use() is used to configure the routes globally
// this code will be executed with every request
// "/" is the root path
// app.use("/", logger);
// alternative
app.use(logger); // no path
app.use("/hello", helloWorld);
app.use("/goodnight", goodNightWorld);
app.use(notFound);

// 5) Optionally create middleware functions for your routing
function helloWorld(req, res, next) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello World!!!");
  res.end();
}
function goodNightWorld(req, res, next) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Good Night World!!!");
  res.end();
}
function logger(req, res, next) {
  console.log("Received request for PATH " + req.url);
  // if you need execution to continue, call next()
  // this will automatically call the next function that can handle request path
  next();
}
function notFound(req, res, next) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.write("404 Not Found");
  res.end();
}
