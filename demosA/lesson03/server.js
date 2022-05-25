// import connect
const connect = require('connect');
// create application object
const app = connect();
// configure it to listen to a port
app.listen(3000);
console.log('Server is running at http://localhost:3000');

// you can create middleware functions that are part of the processing pipeline
// let's say we want to get info about our visitors
function logger(request, response, next) {
    // print request info in the console
    console.log(request.method, request.url);
    // either call end or next
    next();
}
app.use(logger); // register for all the requests, also register first so it fires before anything else

// create and register middleware functions
function helloWorld(request, response, next) {
    response.setHeader('Content-Type', 'text-plain');
    response.end('Hello World!'); // end means processing stops here
}
// app.use(helloWorld); // assigns middleware function to ANY endpoint
app.use('/hello/goodbye', goodByeWorld); // assign middleware function to the /GOODBYE endpoint 
app.use('/hello', helloWorld);

function goodByeWorld(request, response, next) {
    response.setHeader('Content-Type', 'text-plain');
    response.end('Goodbye World!'); // end means processing stops here
}
app.use('/goodbye', goodByeWorld); // assign middleware function to the /GOODBYE endpoint 

function notFound(request, response, next) {
    response.setHeader('Content-Type', 'text-plain');
    response.end('Oops! Page not Found!'); // end means processing stops here
}
app.use(notFound);