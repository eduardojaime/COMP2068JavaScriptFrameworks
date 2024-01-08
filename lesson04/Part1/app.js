// Create an app with multiple routes
// 1) Set up your application
const express = require('express');
// 2) Initialize your express application 
// by creating an app object and calling the express() method
const app = express();
// 3) Specify a configurable port number
const port = 3000;

// 4) Add your default route pointing to the root section of your website '/'
app.get('/', (req, res) => {
    // send string response
    res.send('<h1>Home Page</h1>')
    
    // we can send a json object if we want to
    // res.send({'someKey': 'Hello world' })
})

// 5) Add additional routes and test each
app.get('/hello', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/goodbye', (req, res) => {
    res.send('<h1>Goodbye</h1>')
})

// 5) Start listening to the specified port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// 6) Run your application using the Terminal:
// > node app
// or
// > nodemon