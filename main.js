var inquirer = require('inquirer');
var randomWord = 'node'.toUpperCase();
var playerWord = '*'.repeat(randomWord.length);
// var playerWord = randomWord.replace(/./g,'#');
process.stdout.write('\033c');
console.log('randomWord', randomWord, '\nplayerWord', playerWord);
var tries = 0;
var left = randomWord.length;

var question  = [{
		message: "pick a letter?",
		name: "letter"
}];
playGame(left);
playerWord = '';
function playGame(left) {
	if (tries < left) {
		inquirer.prompt(question).then(function(answer) {
			playerWord += answer.letter;
			 process.stdout.write('\033c');
			console.log('\x1b[36m', 'left:', left, '\n playerWord', playerWord);
			playGame(left - 1);
		});
	} else {
		console.log('.......Final Scores......')
		console.log('\x1b[36m', 'randomWord:', randomWord, '\n playerWord', playerWord);
		inquirer.prompt([{
			type: 'confirm', 
			message: 'wanna play again?',
			name: 'playAgain'
		}]).then(function (answer) {
			if (answer.playAgain) {
				// initialize();
				console.log('try another day ...');
			} else {
				var hangman = 
				[	'    -----     ',
					'   | ? ? |    ',
					'   |  <> |    ',
					'   |  ~~ |    ',
					'    -----     ',
					'    -----     ',
					'   |     |    ',
					'---|     |--- ',
					'   |     |    ',
					'    -----     ',
					'     / \\     ',
					'    /   \\    ',
					'   =     =    '
				];
				// process.stdout.write('\033c');
				hangman.forEach(function(e, i) {
					console.log(''.repeat(i) + e);
				});
			}
		})
	}
}


