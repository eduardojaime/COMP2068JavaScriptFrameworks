// 1) Create function without closures
function openFunction() {
    let counter = 1; // 4) block level variable created
    counter++;
    console.log(counter);
} // 3) block level variable destroyed

// 2) Call twice, what values will be shown?
openFunction(); // 2 
openFunction(); // 2
// 3) Why do we get 2?