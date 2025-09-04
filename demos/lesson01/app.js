// Regular javascript file
// Node.js will execute this file via the command line
// Use JavaScript syntax that you already know here
var message = "Hello World!";
console.log(message);
// Open a terminal and run > node app.js

// However, there are specific browser-only features
// that will not be available in node
alert("This won't work...");
// Throws > ReferenceError: alert is not defined

prompt("This won't work either...");
// Throws > ReferenceError: prompt is not defined

// Whenever you see ReferenceError saying something is not defined
// it means that the code is trying to use a feature that is not available in node
// you might be able to find an alternative in npmjs.com (Node Packages)