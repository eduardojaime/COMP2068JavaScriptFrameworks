// This is a regular javascript function
// it is not a closure
// to achieve this we need to declare a variable outside the function
// let counter = 0; // global scope

function count() { 
    // declare variable to store count
    let counter = 0; // local scope, but initialized to 0 every time
    // increase count by 1
    counter++;
    // print to console
    console.log(counter);
}

// call it three times to verify
count();
count();
count();
// the output should be 1, 1, 1