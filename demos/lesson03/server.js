// require module
const connect = require('connect')
// create app
const app = connect();
// make app listen to a port
app.listen(3000);
// create middleware functions
function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text-plain');
    res.end('Hello World!');
}
function goodnightWorld(req, res, next) {
    res.setHeader('Content-Type', 'text-plain');
    res.end('Goodnight World!');
}
function logger(req, res, next) {
    console.log(req.url);
    next(); // to make sure my processing continues
}
// register them to a path using app.use()
// in the line below it will respond to any request with hello world
app.use(logger);
//app.use(goodnightWorld);
// specify routes from the more specific to the more general
app.use('/hello', helloWorld);
app.use('/goodnight', goodnightWorld);
app.use(helloWorld);

console.log('App is running on http://localhost:3000');