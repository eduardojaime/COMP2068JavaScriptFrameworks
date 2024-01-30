// 1) Import Express
const express = require("express");
// 2) Create an app object
const app = express();
// 3) Configure the app object (port, routing rules, etc)
// middleware functions can be written as anonymous functions
app.get("/", (req, res, next) => {
    res.send("<h1>Welcome to my site</h1>");
});

app.get("/contact", (req, res, next) => {
    res.send("<h1>Contact Us via Email</h1>");
});

// 4) Start listening to a specific port
app.listen(3000, () => { console.log("App 1 is running on http://localhost:3000"); });
// 5) Run the app from the terminal using 'nodemon'