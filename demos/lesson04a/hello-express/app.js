// this is the entry point of my express web app
// Here I'll create an express app object, define middleware functions, and configure routes
// Creating an express app object is similar to connect
const express = require('express');
const app = express();
app.listen(3000);
console.log('Server is running on http://localhost:3000');
// Define middleware functions
function helloExpress(req, res, next) {
    res.send('Hello! Welcome to my express app');
}

// Configure routes (HTTP methods and paths)
// GET /
app.get('/', helloExpress);

// Run the app with the following command > node app