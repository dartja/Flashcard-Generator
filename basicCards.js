// Import the flash cards constructor 
var basicCard = require('./cards.js');


// Basic Cards

var firstPresident = new Card.BasicCard('Who was the first president of the United States?', 'George Washington');
console.log(firstPresident.front);
console.log(firstPresident.back); 
console.log(' ------------------------------------- ');

var secondPresident = new Card.BasicCard('Who was the second president of the United States?', 'John Adams');
console.log(secondPresident.front);
console.log(secondPresident.back);
console.log(' ------------------------------------- ');

var thirdPresident = new Card.BasicCard('Who was the third president of the United States?', 'Thomas Jefferson');
console.log(thirdPresident.front);
console.log(thirdPresident.back);
console.log(' ------------------------------------- ');



