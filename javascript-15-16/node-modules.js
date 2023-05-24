const { log } = require('./logger');
const Square = require('./test/2/Square');
const helloFn = require('./test/test');

// equal to
log('hello from logger');

const sq = new Square(3);
log(sq.area())

helloFn();
 
// custorm variable created like that 
global.myVar = 'JavaScript';
 
// we will get 'undefined'
console.log(myVar);
 
// this is pointing to the global
console.log(this);

 