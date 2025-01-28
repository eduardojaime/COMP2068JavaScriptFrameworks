// This is a web server implementation using connect module
// First you need to install connect using npm
// npm install connect
// 1) Import Connect
const connect = require("connect");
// 2) Create an app object and configure it to listen to port 3000
const app = connect();
app.listen(3000);
console.log("Server running at http://localhost:3000");

// 3) Create Middleware functions to respond to requests
function hello(req, res, next) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello Everyone!");
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

// 4) Associate middleware functions with paths
// Option 1 > use() with one middleware function for all paths
// app.use(hello);
app.use(logger); // This will be called for all requests, then next() calls the next one
// Option 2 > use() with one path and one middleware functions for different paths
app.use("/hello", hello);
app.use("/goodnight", goodNightWorld);
app.use(notFound); // This will be called for all requests