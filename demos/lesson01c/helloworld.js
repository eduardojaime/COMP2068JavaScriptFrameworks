// Console Application
// Similar to JS for the browser, this code executes 
// from top to bottom
// Most JS code works in both the browser and Node.js
console.log("Hello World!");
// Code specifically for the browser will break in Node.js
// alert() is a browser function that shows a dialog box
// This line throws ReferenceError: alert is not defined
// alert("Hello World!");
// Throws ReferenceError: document is not defined
// document.write("Hello World!");