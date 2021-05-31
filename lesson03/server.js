// 1) install Connec via NPM and import it in the project
const connect = require('connect');
// 2) create a connect application
const app = connect();
// 3) Make app listen to a specific port
app.listen(3000);
console.log('Server running at http://localhost:3000/');
// 4) Run the application and go to http://localhost:3000 >> What happened?

// 7) We can register more than one, these will be executed in First In First Out order
function logger(request, response, next) {
    // print request info to console
    console.log(request.method, request.url);
    // call next to execute next middleware in the stack
    next();
}
// 8) Register before helloWorld so that it's executed first
app.use(logger);


// 5) create and register callback function (middleware) to handle requests
function helloWorld(request, response, next) {
    response.setHeader('Content-Type', 'text-plain');
    response.end('Hello World!');
}
// 6) Register callback function (middleware) > it will respond to any request
app.use(helloWorld);


// 9) Up until this point the middleware responds to any request regardless of path
// but in an app we could have different sections: about, contact, catalog, etc.
// fortunately registering a middleware to a path is as simple as adding that path as parameter to app.use()
function goodbyeWorld(request, response, next) {
    response.setHeader('Content-Type', 'text-plain');
    response.end('Goodbye World!');
}
// 10) now register the new paths 
// make sure to unregister app.use(helloWorld); by commenting it out 
// and then registering it as middleware for /hello
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);



