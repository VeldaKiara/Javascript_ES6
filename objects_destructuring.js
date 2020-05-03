const personalInformation = {
    firstName: 'Velda',
    lastName: 'Kiara',
    city: 'New York',
    state: 'New York',
    zipCode: 73301
};
//in order to call a shortform of an object or change its name we add : then a value
const {firstName: fn, lastName: ln, state} = personalInformation;
//prints the names  
console.log(`${fn} ${ln}`);
console.log(`${state}`);