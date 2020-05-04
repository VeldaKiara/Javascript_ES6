/// function addressMaker(address) {
   /// const newAddress = {
       // city: address.city,
        //state: address.state,
        //country: 'United States'
    //};
    
//}

//addressMaker({city: 'Austin', state: 'Texas'});

// The challenge is to use template literal.
//
function addressMaker(address) {
    const {city, state} = address;
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
    
    
}

addressMaker({city: 'Orlando', state: 'Florida'});