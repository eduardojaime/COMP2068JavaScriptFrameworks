// install, and import Connect
const connect = require('connect');
// create a connect application object
const app = connect();
// configure the app
app.listen(3000);
// run the app
console.log('Server is running at http://localhost:3000');
// configure the app to use middleware functions to handle routes
// middleware functions
function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text-plain');
    res.end('Hello World!!!'); // call end when this is the stopping point of your processing
}

function goodbyeWorld(req, res, next) {
    res.setHeader('Content-Type', 'text-plain');
    res.end('Goodbye World!!!'); // call end when this is the stopping point of your processing
}

function notFound(req,res,next) {
    res.setHeader('Content-Type', 'text-plain');
    res.end('Not found!'); // call end when this is the stopping point of your processing
}

function logger(req, res, next) {
    console.log(req.method, req.url);
    next(); // call next if you need the execution to carry on to another middleware function
}

// middlewares will be called in the order they are registered
// app.use(helloWorld); // without specifying a route
app.use(logger);
// implementing routing with middleware functions
app.use('/goodbye', goodbyeWorld); // handles any request sent to /goodbye by calling goodbyeWorld()
app.use('/goodbyeworld', goodbyeWorld);
app.use('/hello', helloWorld); 
app.use(notFound);