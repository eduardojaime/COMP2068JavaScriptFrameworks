// Install and import express
const express = require("express");
// Create an app object
const app = express(); // this represents your web app
// Configure routes and middlewares
app.use((req, res, next) => {  // responds to ALL methods to any path
    console.log("Request received");
    next();
}); 
app.get("/", (req, res, next) => { // responds only to GET requests to the "/" path
    res.send("<h1>Hello Express!</h1>");
});
app.get("/about", (req, res, next) => {
    res.send("<h1>About Us</h1>");
})
// Make app listen to a port
app.listen(3000, () => {
  console.log("Running on http://localhost:3000");
});