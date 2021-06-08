// Example 1: Hello World! Simple express application
// 1) Import Express module after installing it via NPM
const express = require('express');

// 2) Initialize your express application 
// by creating an app object and calling the express() method
const app = express();

// 3) Specify a configurable port number
const port = 3000;

// 4) Add your default route pointing to the root section of your website '/'
app.get('/', (req, res) => res.send('Hello World!'));

// 5) Start listening to the specified port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// 6) Run your application using the Terminal:
// > node app1
// or
// > nodemon
