// Require the 'inquirer' package
var inquirer = require('inquirer');
// Import the flash cards constructor implementations
var basicCards = require('./basicCards.js');
// Import the flash cards constructor implementations
var clozeCards = require('./clozeCards.js');
// Import the full list of questions

// Variable that holds the cloze-deleted questions
var closeCards = [];

// Populate the cloze-deleted questions list
for (var i = 0; i < questions.length; i++) {
	var q = new clozeCards.ClozeCard(questions[i].full, questions[i].cloze);
	clozeCards.push(q);
}

function askQuestion() {
	inquirer.prompt([
		{
			type: 'input',
			message: clozeCards[currentQuestion].partial + '\nAnswer: ',
			name: 'userGuess'
		}
	]).then(function (answers) {
		console.log('\n');

		// See if the user has guessed correctly
		if (answers.userGuess.toLowerCase() === clozeCards[currentQuestion].cloze.toLowerCase()) {
			console.log('Correct!');
		} else {
			console.log('Incorrect!');
		}

		// Show the correct answer
		console.log(clozeCards[currentQuestion].full);
		console.log(' ------------------------------------- ');

		// Advance to the next question
		if (currentQuestion < clozeCards.length - 1) {
			askQuestion();
		} else {
			console.log('Done');
			console.log(' ------------------------------------- ');
		}
	})
}

// Ask the questions
askQuestion();