// Step 1 Import express
const express = require('express');
// Step 2 Initialize application object
const app = express();
// Step 3 Configure the port number
const port = 3001;
// Step 4 Define routes
app.get('/', (request, response) => response.send('Hello world!'));

app.get('/projects', (request, response) => {
    // fs module to read and then out html
    response.send('<h1>These are projects I worked on</h1>');
});

app.get('/contact', (request, response) => {
    response.send('<h1>You can send me an email</h1>')
});
// Step 5 Start listening to request
app.listen(port, () => console.log('Example app is running on port 3001'));