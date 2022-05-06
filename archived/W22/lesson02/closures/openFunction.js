// create function (without closure)
function openFunction() { // << function starts execution
    // this function is not using the global variable scope
    // variable called counter below is a local scope variable  
    let counter = 1; // << memory assignment numeric variable named counter equal 1
    counter++; // << increase value in variable 
    console.log(counter); // << print variable
} // << variable and everything else in the local scope (or block variable) is destroyed

// call the function twice to verify
openFunction(); // 2 
openFunction(); // 2