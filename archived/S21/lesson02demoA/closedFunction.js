function closedFunction() {
    let counter = 1; // variable is created

    // inner function
    // closure means the inner function can access variables defined in the parent environment
    let increment = function() {
        counter++;
        console.log(counter);
    }

    return increment;
} // variable is destroyed

let countMe = closedFunction();

countMe(); // what will happen here? what gets executed when I call countMe();
// the powerful aspect of closure is that this function still has access to 'Counter'
countMe();