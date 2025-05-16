// We want to write a count function that counts the number of times the function is called
// let counter = 0; // global scope

function count() {
    // declare a variable to hold the count
    let counter = 0; // local scope
    // increase
    counter++;
    // print the count
    console.log(counter);
}

// call the function twice
count();
count();
// output ???? 