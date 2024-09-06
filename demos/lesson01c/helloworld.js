// A regular JavaScript file
// We'll use the syntax you already know, and run it with Node.js via the command line
// This is a console app
// There will be no browser involved, so there will be functions that are not available (DOM)
// We will use the console.log() function to output text to the console
console.log("Hello, World!");
// There are differences between JS for Browser and for Sever
// Some objects are NOT available in Node
alert("Hello, World!"); // This will not work in Node.js
// Throws error : ReferenceError: alert is not defined      
//    at Object.<anonymous>
// Another example is the prompt function
prompt("What is your name?"); // This will not work in Node.js
// Throws error : ReferenceError: prompt is not defined
// Instead you can use prompt module from NPM
// > npm install prompt