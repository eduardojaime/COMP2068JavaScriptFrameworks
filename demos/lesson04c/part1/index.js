// Install and import express
const express = require("express");
// Create an app object
const app = express();
// Configure routes in the app object
// GET / (landing page)
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// GET /about
app.get("/about", (req, res) => {
    res.send("About Us");
});
// Start the server by calling listen()
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
