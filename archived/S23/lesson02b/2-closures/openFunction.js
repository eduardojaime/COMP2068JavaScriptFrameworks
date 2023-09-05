// this is a regular function, not a module
// open functions
function openFunction() {
    let counter = 1;
    counter++;
    console.log(counter);
}

openFunction(); // 2
openFunction(); // 3? 2?
