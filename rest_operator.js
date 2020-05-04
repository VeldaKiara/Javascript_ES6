//The rest parameter syntax allows us to represent an indefinite number 
//of arguments as an array

function add(nums) {
    
    console.log(arguments);
}

add(4, 5, 7, 8, 12)
// the code above was used in the past to print arguments as arrays
// but thr arguments has been depreciated
//hence adoption of rest operators 

function add(...nums) {
    
    console.log(nums);
}

add(4, 5, 7, 8, 12)