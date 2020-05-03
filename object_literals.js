function addressMaker(city, state) {
    //normally we would have written the below object as newCity:city, as well as state
    //object literals help us to write less code but making it still understandable.
    //the below code will still  type city as Orlando and state as Florida
     
    const newAdress = {city, state};
    
    console.log(newAdress);
}

addressMaker('Orlando', 'Florida');