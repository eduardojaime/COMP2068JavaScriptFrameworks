// import connect module after installing it via npm
const connect = require('connect');
// create app object
const app = connect();
// tell the app to listen to a port
app.listen(3000);
// show success message
console.log('Server running at http://localhost:3000');

// Middleware functions == callback functions
// should include three parameters > req, res, next
// Option 1
// let helloWorld = (req, res, next) => {

// }
// Option 2 - Traditional
function helloWorld(req, res, next) {
    res.writeHead(200);
    res.end('Hello Evening Class!');
}

// Global logging function > I want to log info about the requests I receive
function logger(req, res, next) {
    // processing
    console.log(req.method, req.url); // get / OR get /contact
    // instead of end() call the next function
    next();
}

// middleware function to handle goodnightworld
function goodNightWorld(req, res, next) {
    res.writeHead(200);
    res.end('Good Night Evening Class!');
}

function notFound(req, res, next) {
    res.writeHead(200);
    res.end('There\'s nothing here!');
}

// register the middleware function with the app
// tell the app to use the middleware for all requests
// register in the order that you want to execute them
app.use(logger); // < first log
// app.use(helloWorld); // < then say hi and end the response object
// for routing I need to register a callback function to a specific path/endpoint
app.use('/hello', helloWorld);
app.use('/goodnight', goodNightWorld);
app.use(notFound);
