// Web app built with connect module https://www.npmjs.com/package/connect
// 1) install > npm i connect
// 2) import connect
const connect = require("connect");
// 3) create app object
const app = connect();
// 4) configure the port and start listening to requests
app.listen(3000);
console.log("App is running on http://localhost:3000");
// Cannot GET / is shown if there aren't any middleware functions registered to handle /
// 5) add middleware functions to handle requests
function logger(req, res, next) {
    console.log(req.url);
    next();
}
function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text-plain');
    res.write("Hello World");
    res.end();
}
function goodbyeWorld(req,res, next) {
    res.setHeader('Content-Type', 'text-plain');
    res.write("Goodbye World");
    res.end();
}
function NotFound(req,res,next) {
    res.setHeader('Content-Type', 'text-plain');
    res.write("Not found, please verify the path.");
    res.end();
}
// app.use(helloWorld); // registers middleware function globally and will handle all requests
// app.use(goodbyeWorld);
// registration order is important
app.use(logger);
app.use("/hello", helloWorld);
app.use("/goodbye", goodbyeWorld);
app.use(NotFound);
