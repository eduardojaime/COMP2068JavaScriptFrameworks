// Regular javascript file
// Node.js will execute this file via the command line
// Use JavaScript objects such as console to print messages
console.log("Hello World!");
// Open a terminal and run the file with the command > node helloworld.js

// However, there are some differences between the browser and Node.js
// For example, some objects like the window object is not available in Node.js
// and Alert is not available in Node.js
alert("Hello World!"); // This will not work in Node.js
// Throws error: ReferenceError: alert is not defined
//    at Object.<anonymous>
// Other functions like prompt() and confirm() are also not available in Node.js
// but they can be available via npm package for command line applications
prompt("What is your name?"); // This will not work in Node.js
// instead use prompt npm module > npm install prompt
// to run:
// open terminal 
// type in node <filename> without extension
//          node helloworld