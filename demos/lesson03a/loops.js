// This is a simple Web App that counts to 10 and prints the numbers to the console and the web page
// Import http built-in module
const http = require('http');
// Create a server and listen on port 3000
// createServer method requires a callback function to handle requests
http
    .createServer((req, res) => {
        // Add headers to the response
        // to help browsers understand the content type
        res.writeHead(200, { "Content-Type": "text/html" });
        // write the logic to count to 10
        for (var i = 1; i <= 10; i++) {
            // print to console with console.log()
            console.log(i);
            // print to page with res.write()
            res.write(i.toString() + '<br/>'); // append '<br/>' to each number to create a new line
        }
        // finalize and send the response with res.end()
        res.end();
    })
    .listen(3000);
// Print a message to the console to indicate program is running
console.log('Server running at http://localhost:3000/');

// Test by running the server (node loops) and opening http://localhost:3000/ in a web browser