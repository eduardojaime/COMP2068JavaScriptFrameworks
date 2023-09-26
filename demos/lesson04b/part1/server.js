// Import express
const express = require("express");
// Create app object
const app = express(); // returns an instance of app object
// Associate middlewares to paths
// ALL requests
app.use((req, res, next) => {
    console.log("Request received: " + req.url);
    next(); // calls whichever the next middleware is (dispatcher)
});
// GET /
app.get("/", (req, res, next) => {
    res.send("Hello Express!");
});
// GET /about
app.get("/about", (req, res, next) => {
    res.send("About Us");
});
// Make app listen to a port
app.listen(3000);
// Print a message to confirm everything ran OK
console.log("App running on http://localhost:3000");