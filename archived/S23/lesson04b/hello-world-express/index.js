// Express Application
// 1) Install express via npm and import
const express = require("express");
// 2) Create app object
const app = express(); // call as a method to return an instance of app
// 3) Configure app object
// Associate middleware functions to paths
// keep functions separate if you plan to reuse them across paths
// or if they are too long and maybe better placed in their own file
function landingPage(req, res, next) {
    res.send("Hello and Welcome!");
}
// relative to http://localhost:3000
app.get("/", landingPage);
// alternatively just provide a middleware function in app.get
// use this syntax for simpler middleware functions
app.get("/about", (req, res, next) => {
    res.send("This is my project and I started it in 2023");
});
// 4) Make app listen to http requests on a port
app.listen(3000, () => {
  console.log("App is running on http://localhost:3000");
});
