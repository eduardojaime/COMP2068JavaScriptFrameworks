// Simple Hello World! app with Express
// Install and import express into our project
const express = require('express');
// create an app object by calling express as a method
const app = express();
// specify a configurable port
const port = 3000;
// register middleware to routes in our app object
app.get('/', (req, res) => {
    res.send('Hello World! This is the evening class!');
});
app.get('/about', (req, res) => {
    res.send('Hi there, this is our company and we sell products.');
});
app.get('/contact', (req, res) => {
    res.send('Email us at company@mail.com');
});
// start listening for requests (run)
app.listen(port, () => { 
    console.log('Application started and running on http://localhost:' + port);
 });
// different ways to run the project
// > node app1
// npm start <<< 