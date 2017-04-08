// Import the flash cards constructor 
var clozeCards = require('./cards.js');

// Cloze-Deleted Card

firstPresident = new Card.ClozeCard('George Washington was the first president of the United States.', 'George Washington');
console.log(firstPresident.full);
console.log(firstPresident.cloze); 
console.log(firstPresident.partial); 
console.log(' ------------------------------------- ');

secondPresident = new Card.ClozeCard('John Adams was the second president of the United States.', 'John Adams');
console.log(secondPresident.full);
console.log(secondPresident.cloze); 
console.log(secondPresident.partial); 
console.log(' ------------------------------------- ');

thirdPresident = new Card.ClozeCard('Thomas Jefferson was the third president of the United States.', 'Thomas Jefferson');
console.log(thirdPresident.full);
console.log(thirdPresident.cloze); 
console.log(thirdPresident.partial); 
console.log(' ------------------------------------- ');

