// Include Node’s built-in http module
// Start the web server on port 3000, logging out a message to the console that the server is running
// Inside the callback of the createServer method, loop from 1 to 20 and output these numbers to the browser, each time on a separate line
// import http module
const http = require("http");
// create web server, and listen to a port
http
  .createServer((req, resp) => {
    // status code and content-type
    resp.writeHead(200, "text/html");
    // code that writes content to the body
    for (var i = 1; i <= 20; i++) {
      resp.write("<p>" + i + "</p>"); // i + "<br>"
      console.log(i); // you'll see this two times if you use chrome because it makes two requests (1 page, 1 favicon.ico)
    }
    // instruction to end the response object processing
    resp.end();
  })
  .listen(3000);
console.log("App is running at http://localhost:3000");
