// Import connect
// pre-req > npm i connect
const connect = require('connect');
// Create a new connect app object
const app = connect();
// Define middleware functions (1 per route)
// Think about ASP.NET MVC Controllers
// Other middlewares
function logRequest(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next(); // Call the next middleware in the stack
}
// Routes
function handleHelloWorld(req, res, next) {
    res.write("Hello World!");
    res.end();
}
function handleGoodNightWorld(req, res, next) {
    res.write("Good Night World!");
    res.end();
}
function handleLandingPage(req, res, next) {
    res.write("Welcome to the Landing Page!");
    res.end();
}
// Register middleware functions with routes
// 1 rule per route, you can also define general rules
app.use(logRequest); // general rule
// other rules will be executed after
app.use('/hello', handleHelloWorld); // specific rules
app.use('/goodnight', handleGoodNightWorld);
app.use(handleLandingPage); // general rule

// Start the server on a specified port
app.listen(3000);

// Print log msg when server starts
console.log("Server is running on http://localhost:3000...");