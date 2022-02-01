// Example 1: Hello World! App using express
// Very similar to connect and http modules
// 1) Import Express module
const { Console } = require('console');
const express = require('express');
// 2) Initialize your app object by calling express as a method
const app = express();
// 3) Specify a configurable port number
const port = 3000;
// 4) Add your default route to the root section
// Routes for a website
// '/' or '/home'
// localhost:3000/
// app.VERB > HTTP Verb > GET (common for browser requests)
// 'route', (middleware function)
app.get('/', (req, res) => {
    console.log(req.url);
    res.status(200).send('Hello World!'); // sends a 200 OK response with text 'Hello World!'
});
// 5) Listen on a port
app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
});
// 6) Run the app on the terminal
// > node app1