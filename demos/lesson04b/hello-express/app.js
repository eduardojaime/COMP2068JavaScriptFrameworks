// This is the entry point of my express application
// We'll create an app object, define middleware functions, and configure routing
// Approach is similar to connect
const express = require('express');
const app = express();
app.listen(3000);
console.log("Server is running on http://localhost:3000");
// Define a middleware function
function helloExpress(req, res, next) {
    res.send("Hello and Welcome to my Express App!");
}

// Configure Routes (HTTP METHOD + PATH)
app.get("/", helloExpress);


// Run the app with the following command > node app.js