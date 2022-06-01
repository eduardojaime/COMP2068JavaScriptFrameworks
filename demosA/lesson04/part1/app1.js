// Simple Hello World App with Express
// 1) Install and import Express
const express = require('express');
// 2) Initialize your express app object
const app = express();
// 3) Specify a configurable port number
const port = 3000;
// 4) Add a default route pointing to the root of your site (/)
app.get('/', (req, res) => {
    // handle request and produce a response
    res.status(200).send('Hello World! This is JS Frameworks Tuesday Evening class!');
});

// 6) Add more routes
app.get('/projects', (req, res) => { 
    res.status(200).send('<h1>Hi, these are my projects</h1>');
});

app.get('/about', (req, res) => { 
    res.status(200).send('<h1>You may contact me at myself@email.com</h1>');
});

// 5) Start the app and listen to a specific port
app.listen(port, () => console.log('Example app is listening to port ' + port));