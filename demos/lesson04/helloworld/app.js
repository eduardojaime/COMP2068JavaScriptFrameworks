// This is a simple web app using Express
// Import express
const express = require("express");
// Create an express app object
const app = express();
// Associate paths to middlewares
// GET /
app.get("/", (req, res, next) => {
    res.send("Hello World! This is my first Express app.");
});
// GET /about
app.get("/about", (req, res, next) => {
    res.send("This is the about page.");
});

// Start the server on port 3000 (default)
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
// Run via terminal > node app.js or nodemon
