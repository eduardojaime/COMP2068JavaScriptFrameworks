// function with closures
// closures means my function remembers values from the parent environment
// very similar to classes in Java/C#
function closedFunction() {
    let counter = 1;

    function test()
    {
        console.log('testing global scope');
    }

    // create child function, store it in a variable
    // scope
    let increment = function() {
        counter++;
        test();
        console.log(counter);
    }

    return increment;
}

closedFunction();
closedFunction(); 
// output? 2, 3

// one call > 
let countMe = closedFunction();

countMe();
countMe();
// 2 2 < scope
// 2 3 < why???
// undefined < X