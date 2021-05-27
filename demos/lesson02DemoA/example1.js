// parent environment
let x = 1;

// function
function AddNumber() {
    x = x + 3;
    console.log(x);
}

function MultiplyNumber() {
    x = x * 3;
    console.log(x);
}

AddNumber();
AddNumber();
MultiplyNumber();
// 4, 7, 21

