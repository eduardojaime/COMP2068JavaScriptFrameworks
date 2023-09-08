// Node.js depends on modules to implement more complex features
// There are built-in modules already installed we can use but they are very basic
const http = require("http"); // imports package into object named http
// use http object to start a web server
// as long as the app is running on this computer, the server will listen to http requests
http
  .createServer((request, response) => {
    // follow http standard
    // response must contain headers (status and contentype)
    response.writeHead(200, { "Content-Type": "text/plain" });
    // response must contain content
    response.write("Hello world!");
    // response must be finalized
    response.end();
  }) // asynchronous (non-blocking) code
  .listen(3000);
  console.log("App is running on http://localhost:3000");
