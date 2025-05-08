// This is a very simple hello world app for node.js
// It runs and shows output in the console
// Most JavaScript syntax you already know from the browser works here too
var greetingsEn = "Hello World!";
var greetingsFr = "Bonjour le monde!";

console.log(greetingsEn);
console.log(greetingsFr);

// However... there are browser-specific methods that are not available in node.js
// For example, the alert() method is not available in node.js
alert("Hello World!"); // This will throw an error in node.js

// Also, prompt() and confirm() are not available in node.js
prompt("Enter your name: "); // This will also throw an error in node.js
confirm("Are you sure?"); // This will also throw an error in node.js

// Document Object Model (DOM) methods are not available in node.js
document.getElementById("myElement"); // This will also throw an error in node.js