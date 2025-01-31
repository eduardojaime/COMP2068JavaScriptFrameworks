// This is a web app that uses Express
// 1) Import the express module
const express = require("express");
// 2) Create app object
const app = express();
// 3) Define a route for the home page
app.get("/", (req, res) => {
    // send some content back to the client
    res.send("<h1>Hello World!</h1>");
});
app.get("/about", (req, res) => {
    res.send("About Us");
});
// 4) Start the server by listening to a port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})