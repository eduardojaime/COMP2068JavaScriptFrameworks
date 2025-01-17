// 1) Create function without closures
function count() {
    let counter = 1; // 4) block level variable created
    counter++;
    console.log(counter);
} // 3) block level variable destroyed

// 2) Call twice, what values will be shown?
count(); // 2 
count(); // 2
// 3) Why do we get 2?