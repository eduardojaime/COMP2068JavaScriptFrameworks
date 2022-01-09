// Import the connect package
const connect = require('connect');
// Instantiate the connect application
const app = connect();
// Configure listening port
app.listen(3000);
console.log('App is running on http://localhost:3000');

function logger(request, response, next) {
    console.log(request.method, request.url);
    next();
}

// register middlewares to routes
function helloWorld(request, response, next) {
    response.setHeader('Content-Type', 'text-plain');
    response.end('Hello World!');
}
// app.use(helloWorld); << don't need it anymore
function goodbyeWorld(request, response, next) {
    response.setHeader('Content-Type', 'text-plain');
    response.end('Goodbye World!');    
}

function notFound(request, response, next) {
    response.setHeader('Content-Type', 'text-plain');
    response.end('There is nothing there!!');    
}

// register them to a specific endpoint
app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.use('/', notFound);