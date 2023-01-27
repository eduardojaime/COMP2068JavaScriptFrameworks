// connect web server app
const connect = require('connect');
// create app object
const app = connect(); 
// configure app with middlewares
// <<<<< nothing configured yet so you'll see 'Cannot GET /'
// let's add some middlewares (js functions with three params)
function helloWorld(req, res, next) {
    res.setHeader('content-type', 'text-plain');
    res.end('Hello world!'); // end finishes the middleware pipeline process
    console.log('Executed helloWorld()');
}
function goodbyeWorld(req, res, next) {
    res.setHeader('content-type', 'text-plain');
    res.end('Goodbye World');
    console.log('Executed goodbyeWorld()');
}
function logger(req, res, next) {
    // capture info about the request
    console.log(req.method, req.url); // GET /path
    // call next to execute the next middleware function in the pipeline
    next();
}
function notFound(req, res, next) {
    console.log('Path not found!');
    res.end();
}
// associate a middleware to a path or to the app in general
// if any general one is specified first it needs to call next() (non-stopping middlewares)
// ex. logging middlewares
app.use(logger);
// specific middlewares at the beginning
app.use('/goodbye', goodbyeWorld); // func only executed by requests to /goodbye
// general ones at the end
// app.use(helloWorld); // func will be executed by all requests to any path
app.use('/hello', helloWorld);
// app.use(logger); // it will never be reached
app.use(notFound); // it will handle invalid paths
// make app listen to a port
app.listen(3000);
// print out confirmation message
console.log('Application is running on http://localhost:3000');