// This is just a regular function, no closure pattern here
function openFunction() {
    // local variable to store data
    let counter = 0;
    // update the data
    counter++;
    // print out value
    console.log(counter);
}

// call the function twice, what's the output?
openFunction(); // 1
openFunction(); // 1