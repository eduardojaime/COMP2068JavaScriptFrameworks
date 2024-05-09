// This is a hello world console app in Node.js
console.log("Hello World!"); // this is printed in the terminal

// Keep in mind, JS code for the browser won't work in Node.js
// alert() shows a popup in the browser, but breaks in Node
// Throws: ReferenceError: alert is not defined 
// alert("Hello There!");
// Anything that access the DOM will break in Node
// Throws: ReferenceError: document is not defined
// document.write("Hello There!");
// Remember, Node is for the backend logic only