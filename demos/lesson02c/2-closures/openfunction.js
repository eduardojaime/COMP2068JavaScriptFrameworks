// An open function is just a regular JavaScript function
// In this example we want to have a function that keeps a count
function count() {
    // local scope variable, set to 0
    let counter = 0;
    counter++;
    console.log(counter);
}

// call twice, what's the output?
count(); // 1
count(); // 1

// what do you need to do to be able to keep count with this code?
// define counter in the global scope (outside of the function)