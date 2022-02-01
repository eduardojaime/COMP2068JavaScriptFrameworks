// Example 2: Create multiple route handlers (route + middleware function)
// 1) setup the app
const express = require('express');
const app = express();
const port = 3000;
// Requests to '/' > Home or Landing page
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
});
// Requests to '/projects' > List of my current projects 
app.get('/projects', (req, res) => {
    res.send('<h1>These are projects I worked on</h1>');
});
// Requests to '/about' > Information about myself, social links
app.get('/about', (req, res) => {
    res.send('<h1>Here are some fun facts about me</h1>');
});
// Requests to '/contact' > Contact form for recruiters to send me emails
app.get('/contact', (req, res) => {
    res.send('<h1>You can send me an email at eduardo@mail.com</h1>');
});
// Listen to a port
app.listen(port, () => { console.log(`Example app is listening on port ${port}`); })