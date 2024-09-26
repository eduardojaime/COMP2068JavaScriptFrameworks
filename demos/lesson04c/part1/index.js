// this will be the entry point of our application
// Import Express
const express = require("express");
// Create an app object by calling express as a method
const app = express();
// Define middleware functions
// Middleware functions are regular functions with three specific parameters:
// request, response, and next
function ShowHomePage(req, res, next) {
    res.send("Hello World! Welcome to my Home Page");
}

// Associate routes (paths) with middleware functions
// get represents the HTTP GET method that will be handled
// "/" is the path that will be handled
// ShowHomePage is the middleware function that will be called when user requests this path
app.get("/", ShowHomePage);
// Middleware functions can be reused for different paths
app.get("/home", ShowHomePage);

// Start the server by listening to a port
// Parameters: Port number, Callback function to handle the server start
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
