// This is a simple hello world console app
// Most syntax you already know in JavaScript will work here: if statements, for loops, etc.
// You can also use the console.log function to print to the console
var msgEn = "Hello World!";
var msgFr = "Bonjour le monde!";

console.log(msgEn);
console.log(msgFr);

// Browser-specific code won't work in Node.js
// For example, document object will throw an error
// Throws ReferenceError: document is not defined
// var element = document.getElementById("myElement"); 

// Alerts, prompts, confirms will also throw an error
// alert('Hello World!'); // Throws ReferenceError: alert is not defined
// Other features might be available as a npm package
prompt('Enter your name:'); // Throws ReferenceError: prompt is not defined