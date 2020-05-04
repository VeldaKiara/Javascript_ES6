//gives us values to add to the start or to the end of a string
//depends on how the long the string is
let example = 'Velda ';
// if you add Kiara to Velda it becomes 10 letters 
//therefore no words will be added to the start or finish
//if printed

console.log(example.padStart(10, 'k'));
console.log(example.padEnd(10, 'k'));