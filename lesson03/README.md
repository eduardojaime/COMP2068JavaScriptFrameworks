# Instructions

### Demo 1 Routing requests with the http module

- Create a new file named http-routing.js
- Import the http module using require.
- Use http.createServer to create a new HTTP server. The callback function handles incoming requests (req) and sends responses (res).
- Log a message to the console indicating the server is running and listening on port 3000.
- Implement basic routing based on URL (inside callback function)
    - Use res.writeHead to write the HTTP response header with a 200 status code and a Content-Type of text/html; charset=UTF-8.
    - Log the request URL to the console using console.log.
    - Use conditional statements to check the request URL (req.url) and respond with different content based on the URL.
    - Use res.end to end the response.
- This can be improved by defining functions and calling them based on the URL value
    - Define a function helloPage that takes one parameter named res to handle the root URL route (/).
- Run the application:
    - node http-routing
- Open a browser and navigate to http://localhost:3000
    - Navigate to the defined paths to verify

### Demo 2 Routing requests with the Connect module

- Create file called server.js
- Open a terminal and run npm init
    - Follow instructions and make server.js our initial file
- Use Connect
    - Install via npm command 
        - npm i connect 
    - So that we can explore the concept of Middlewares
    - Express is built on top of Connect
- Create server.js
    - Import connect
    - Create connect app
    - Make app listen to port
    - What happened? Why error?
        - There isn't any middleware registered to handle this request
    - Create hello world function and register as middleware
        - Does it respond to any URL?
    - We can add more than one: 
        - Define a function named logger function and register it with app.use()
        - Middleware execution occurs on a FIFO basis
    - At this point our middleware is responding to any request regardless of path. Let's mount middleware functions on different paths:
        - /hello
        - /goodbye