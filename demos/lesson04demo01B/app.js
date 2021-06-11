// Step 1 import Express module in our app
const express = require('express');
// Step 2 initialize your express application
const app = express();
// Step 3 Configure your application (two important components???)
// Port
const port = 3000;
// Routes > register a middleware function to a path
app.get('/', (request, response) => {
    // prepare response and send back
    let responseBody = '<h1>Hello World!</h1>';
    response.send(responseBody);
});
app.get('/about', (request, response) => {
    // alternatively you can use fs to read an html file
    let responseBody = '<h1>About Us</h1>';
    response.send(responseBody);
});
app.get('/projects', (request, response) => {
    let responseBody = '<h1>Projects Page</h1>'
    response.send(responseBody);
});
// Step 4 Start listening to requests
app.listen(port, () => { console.log('Example app is listening on port 3000'); });