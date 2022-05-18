// Open function > no closures
function openFunction() {
    let counter = 1; // counter variable
    counter++;
    console.log(counter);
}

// call twice, what's the output?
openFunction();
openFunction();
// why 2, 2?