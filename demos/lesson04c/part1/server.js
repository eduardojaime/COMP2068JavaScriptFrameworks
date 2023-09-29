// Import Express
const express = require("express");
// Create an app object
const app = express();
// Configure app object, add routes
app.use((req, res, next) => {
    console.log("Request received on: " + req.url);
    next();
});
app.get("/", (req, res, next) => {
    res.send("Hello JS Frameworks!");
});
app.get("/about", (req, res, next) => {
    res.send("About Us");
});
// Make app listen to a port
app.listen(3000);
console.log("App is running on http://localhost:3000");