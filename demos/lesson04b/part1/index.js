// Index.js is the entry point of the application
// as defined in package.json
// 1) Install and import Express package
const express = require("express");
// 2) Create an app object
const app = express();
// 3) Define routes for the app object
// GET / route
app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});
// GET /about route
app.get("/about", (req, res) => {
    res.send("<h1>About Us</h1>");
});
// 4) Start the server by calling listen() method on the app object
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
