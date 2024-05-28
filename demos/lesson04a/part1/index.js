// This will be my web app's entry point (main file)
// 1) Import the express module
const express = require("express");
// 2) Create an instance of app object calling express as a method
const app = express();
// 3) Configure routes and listen to port 3000
app.listen(3000, () => { console.log("App is running on http://localhost:3000"); });
// Routing is based on HTTP verbs and URL paths
// Paths are relative to your URL
// GET http://localhost:3000/
app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>"); // respond with html code
});
// GET http://localhost:3000/projects
app.get("/projects", (req, res) => {
    res.send("<h1>My Projects</h1>");
});
// configures the app to use a middleware
// app.use();