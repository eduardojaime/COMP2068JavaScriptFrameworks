// Syntax will be same as the JavaScript you already know
var message = "Hello World";

function showMessage() {
    console.log(message);
}

showMessage();

// Except browser-specific syntax/libraries
// will throw ReferenceError: alert is not defined
//    at Object.<anonymous>
alert(message);
confirm(message);