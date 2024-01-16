// this is an open function
// it executes and all data related to it is removed from memory once it's finished
function count() {
    let counter = 1; // block level variable (scope, visibility)
    counter++; // 2
    console.log(counter);
} // block level variable gets destroyed

// call twice, what's the output?
count(); // 2
count(); // 2 