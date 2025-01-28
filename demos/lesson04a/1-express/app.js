// This is a web app built with Express
// 1) Import the express module
const express = require("express");
// 2) Create an app object
const app = express();
// 3) Define a route for the home page and about page
// Two parameters: path, middleware function
app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to the about page");
});

// 4) Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
