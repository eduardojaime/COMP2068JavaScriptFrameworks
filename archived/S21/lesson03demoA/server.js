const connect = require('connect');

const app = connect();

app.listen(4567);

console.log('Sever is running on http://localhost:3000');

function logger(request, response, next) { 
    console.log(request.method, request.url);
    next();
}

// global middleware > responds to any request
app.use(logger);

// at this point we haven't registered any middleware for responses
// so let's register them separately
function helloWorld(request, response, next) {
    response.setHeader('Content-Type', 'text-plain');
    response.end('Hello World!');
}

function goodbyeWorld(request, response, next) {
    response.setHeader('Content-Type', 'text-plain');
    response.end('Goodbye World!');
}

// app.use(helloWorld);
// specific path middleware, respond to the specified path
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);