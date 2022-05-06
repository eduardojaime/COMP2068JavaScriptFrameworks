// Complete the code below to print the numbers from 1 to 20
// run this app using the 'node' command in the terminal
// open a browser and navigate to http://localhost:3000
let http = require('http');

// What does req represent? HTTP request object > url, parameters, body > what we get from the client
// res respresents the HTTP response object > what we send back to the client

// All requests will be handled by this callback function
// how do I handle different sections then?
http
    .createServer((req, res) =>  {
        // Response Headers > 200 OK 
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });

        for (var i = 1; i <= 20; i++) {
            // for the client
            res.write(i + '<br />');
            // for us
            console.log(i);
        }

        // marks the response as complete
        res.end();

    })
    .listen(3000);

console.log('App running on http://localhost:3000');