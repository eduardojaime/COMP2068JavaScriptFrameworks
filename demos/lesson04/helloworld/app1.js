// 1) Install and Import Express module
const express = require("express");
// 2) Initialize app object
const app = express();
// 3) specify a configurable port number
const PORT = 3000;
// 4) Add routes '/' for root (associating a path with a middleware function)
app.get('/', (req, res) => {
  res.send("Hello World!");
});
// add more routes
app.get('/contact', (req, res) => {
    res.send('<h1>This is my contact info</h1>');
});
app.get('/projects', (req, res) => {
    res.send('These are projects I have developed');
});
app.get('/about', (req, res) => {
    res.send('I am a developer!');
});


// 5) Call Listen() to start the web server
app.listen(PORT, () => {
  console.log("App is running on http://localhost:3000");
});