// Web application using Express
// 1) Import the express module
const express = require("express");
// 2) Create an app object
const app = express();
// 3) Define a route for the root URL

app.get("/", (req, res) => {
    res.send("<h1>Welcome to my Site!</h1>");
});

app.get("/about", (req, res) => {
    res.send("Learn more about our projects")
});

// 4) Start the server and print a message to the console to indicate that the server is running
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
