// Import Express
const express = require("express");
// Create an app object
const app = express();
// Configure app object, add routes
app.get("/", (req, res, next) => {
    res.send("Hello JS Frameworks!");
});
// Make app listen to a port
app.listen(3000);
console.log("App is running on http://localhost:3000");