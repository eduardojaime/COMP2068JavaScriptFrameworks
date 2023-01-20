// closure > note it's similar to a class
function closedFunction() {
    // data
    let counter = 1;
    // inner function (as anonymous function definition)
    let increment = () => {
        counter++;
        console.log(counter);
    }

    return increment; // returns definition of inner function
}

// Test closed function
closedFunction();
closedFunction();
// assign the result of calling the outer function to an object
let countMe = closedFunction(); 
countMe(); // method remembers its variables and context > 2
countMe(); // > 3
