// Example 2: Create multiple routes
// 1) Set up your application
const express = require('express');
const app = express();
const port = 3000;

// Map http requests at localhost:3000 and send a response
app.get('/', (req, res) => {
    // send string response
    res.send('<h1>Home Page</h1>')
    
    // we can send a json object if we want to
    // res.send({'someKey': 'Hello world' })
})

app.get('/hello', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/goodbye', (req, res) => {
    res.send('<h1>Goodbye</h1>')
})

// 5) Start listening to the specified port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// 6) Run your application using the Terminal:
// > node app1
// or
// > nodemon