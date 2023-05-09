// Include Node’s built-in http module
const http = require("http");

// Start the web server on port 3000
http
  .createServer((req, res) => {
    // Inside the callback of the createServer method,
    res.writeHead(200, { 'Content-Type': 'text/html'});

    // for loop
    for (let i = 1; i <= 20; i++) { // 0 - 19
        // loop from 1 to 20 and output these numbers to the browser, each time on a separate line
        // res.write('<p>' + i + '</p>'); // << write html to the response body
        // res.write(i + '\n');
        res.write(i + '<br>');
    }

    // what needs to be called to complete a response
    res.end(); // << always mark your responses as complete so they are sent back to the client
  })
  .listen(3000);
// logging out a message to the console that the server is running
console.log("Application is running on http://localhost:3000");
