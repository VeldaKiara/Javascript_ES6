//are a more concise syntax for writing
// function expressions. They utilize a new 
//token, => , that looks like a fat arrow. 
//Arrow functions are anonymous
// and change the way this binds in functions

//what we could have done without arrow functions
function add(...nums) {
    let total = nums.reduce(function (x, y) {
        return x+y;
    })
    console.log(total);
}

add(4, 5, 7, 8, 12)


//after arrow functions

function add(...nums) {
    let total = nums.reduce((x, y) => x + y);
    
    console.log(total);
}

add(4, 5, 7, 8, 12)
