// this will be the entry point of our app
// Import express
const express = require("express");
// Create an app object by calling express as a method
const app = express();
// Define middlewares
// These are just JavaScript functions
// with three parameters: request, response, next
function Logger(req, res, next) {
    // req contains information sent by the client
    console.log(`Request URL: ${req.url}`);
    // call next so that the next middleware in the chain can execute
    next();
}

function ShowHomePage(req, res, next) {
    res.send("Hello World! This is the home page.")
}

// Define routes
// These routes depend on HTTP verbs
// For web apps most common ones will be GET and POST
// Execute logger app-wide for every request we receive
app.use(Logger);
// GET / - Home page
app.get("/", ShowHomePage);
// GET /home - Home page
app.get("/home", ShowHomePage); // middlewares are reusable
// GET /about - About page
// Alternative approach, you can also associate anonymous functions
app.get("/about", (req, res, next) => {
    res.send("Know more about our organization.");
});


// Start listening to a port
// Two parameter: port number and a callback function
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});
