// 1) Create function without closures
function closedFunction() {
    let counter = 1; 
    // declare a variable and set it to an anonymous function
    let increment = () => {
        counter++;
        console.log(counter);
    }

    return increment;
} 

// 2) Call twice, what values will be shown?
closedFunction();   
closedFunction(); 
// 3) Why do we get nothing?
// closedFunctions returns the definition of increment not its execution

// 4) Create a variable and set it to the result of calling closedFunction() which is increment
let countMe = closedFunction();
// 5) Call twice, what values will be shown?
countMe();
countMe();
// 6) why? The closure keeps our values in memory
