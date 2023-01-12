// Example 1: Hello World App with Express
// 1) Import express
const express = require('express');
// 2) Initialize an express app object
const app = express();
// 3) Specify a configurable port number
const port = 3000;
// 4) Add your default route pointing to the root of your site
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/about', (req, res) => res.send('This is our about page!'));
// 5) Start listening to the specified port
app.listen(port, () => console.log('Example app is running on http://localhost:3000'));
// 6) Run the app from the terminal by running > node app1