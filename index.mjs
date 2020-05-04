import { Animal } from './animal.js';

let cat = new Animal('Cat', 4);
cat.legs = 3;

console.log(cat.legs)

console.log(Animal.return10());

console.log(cat.metaData)

cat.makeNoise();
