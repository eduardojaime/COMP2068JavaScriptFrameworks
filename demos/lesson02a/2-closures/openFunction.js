// Open Functions do not keep information about their inner variables in memory
// They act as normal functions

function openFunction() {
    // contains data
    let counter = 1;
    counter++; // modify data
    console.log(counter); // print out value
}

// call function twice
// what's the expected output in the terminal??
openFunction(); // 2
openFunction(); // 3, 2