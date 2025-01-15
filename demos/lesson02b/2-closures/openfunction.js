// This is a regular function
// We want to have a function that increments a counter
function openFunction() {
    // counter variable in local scope (inside function)
    let counter = 0;
    counter++;
    console.log(counter);
}

// Call function twice, what's the output?
openFunction(); // 1
openFunction(); // 1

// This is because: variable is declared in local scope, it's reset every time we call the function
// How can we make this work?
// Declare counter outside of the function in the global scope
// Probably not the best practice if we want to share this code as a module