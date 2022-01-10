// 1) Create function without closures
function closedFunction() {
    let counter = 1; 
    // declare a variable and set it to an annonymous function
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

// 4) Create a variable and set it to the function
let countMe = closedFunction();
// 5) Call twice, what values will be shown?
countMe();
countMe();
// 6) why? The closure keeps our values in memory
