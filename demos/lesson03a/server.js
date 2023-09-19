// import connect module
const connect = require("connect"); // look in node_modules folder
// create an app object that represents our webapp and can be configured
const app = connect(); // call as method
// make the app listen to a port
app.listen(3000);
console.log("App is running on http://localhost:3000");
// create middleware functions to handle requests (req,res,next)
function helloWorld(req,res,next) {
    res.write("Hello World!");
    res.end(); // execution ends here and response is sent back
}
function goodnightWorld(req,res,next) {
    res.write("Goodnight World!");
    res.end(); // execution ends here and response is sent back
}
function logger(req, res, next) {
    // execute code and carry on with the next registered middleware
    console.log("Request received " + req.url);
    next(); // no need no specify which function is next, the dispatcher object knows about them
}
// associate paths to middlewares
// app.use(helloWorld); // if no path is indicated, the function is associated to ALL requests
app.use(logger); // logger function must run FIRST before any other middleware
app.use("/goodnight", goodnightWorld); // this function ONLY serves requests to /goodnight
app.use(helloWorld); // if no path is indicated, the function is associated to ALL requests