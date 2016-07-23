var inquirer = require('inquirer');
var colors = require('colors/safe');
var game = require('./game.js');
var word = require('./word.js');

process.stdout.write('\033c');
// console.log('\x1b[36m', 'left:', left, '\n playerWord', playerWord);
var letterQuestion  = [{
		message: "Input letter",
		name: "letter"
}];
var playQuestion = [{
		type: 'confirm', 
		message: 'play again?',
		name: 'play'
}];
function Hangman(word) {
	this.randomWord = word.toUpperCase();
	this.tries = 0;
	this.left = 0;
};
var wins = 0;
var losses = 0;

Hangman.prototype.play = function() {
	// process.stdout.write('\033c');
	var that = this;
	var keepPlaying	= true;
	that.left = this.randomWord.length;
	if(this.randomWord === w.playerWord || that.tries === that.left){
		keepPlaying = false;
	}
	process.stdout.write('\033c');
	console.log('\x1b[5m\x1b[37m\x1b[43m', 'The Hangman Game', '\x1b[0m', '\n');
	w.showWordVars();
	console.log(colors.white('\nTries'), colors.yellow(this.tries));
	console.log(colors.white('\nWins'), colors.yellow(wins), colors.white(' Losses'), colors.yellow(losses),'\n');

	// console.log('tries', that.tries, 'left', that.left, '\n');
	// console.log('Wins: ', wins ,' Losses: ', losses, '\n');
	if (keepPlaying) {
		process.stdout.write('\033c');
		console.log(colors.rainbow('The Hangman Game \n'));
		w.showWordVars();
		console.log(colors.white('\nTries'), colors.yellow(this.tries));
		console.log(colors.white('\nWins'), colors.yellow(wins), colors.white(' Losses'), colors.yellow(losses),'\n');
		// console.log('tries', that.tries, 'left', that.left, '\n');
		// console.log('Wins: ', wins ,' Losses: ', losses, '\n');
		inquirer.prompt(letterQuestion).then(function(answer) {
			w.checkPlayerWord(answer.letter.toUpperCase());	
			that.tries++;
			
			that.play();
		});
	} else {
		if(this.randomWord === w.playerWord) {
			wins++;
			this.showHangman('');
			console.log('you win ...'.repeat(15));
		} else {
			losses++;
			this.showHangman(' ');
			console.log('\x1b[44m', 'the word was: ', this.randomWord);
			console.log('\x1b[0m','you loss ...'.repeat(20));			
		}
		inquirer.prompt(playQuestion).then(function(answer) {
			if(answer.play) {
				initialize();
			} else {
				console.log('Adios Amigo ...!');
			}
		});
	}
};

Hangman.prototype.showHangman = function(hang) {
	var hangman = 
	[	'    -----     ',
		'   | ? ? |    ',
		'   |  <> |    ',
		'   |  ~~ |    ',
		'    =====     ',
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
		console.log(hang.repeat(i) + e);
	});	
}
var w = new word.Word();

function initialize() {
	process.stdout.write('\033c');
	var g = new game.Game();
	var h = new Hangman(g.randomWord);
	console.log(h.randomWord);
	w.inputLetters = '';
	w.matchingLetters = '';
	w.randomWord = '';
	w.playerWord = '';
	w.setRandomWord(h.randomWord);
	h.play();
};


// var w = new word.Word();	//Initialize once 
// var g = new game.Game();
// var h = new Hangman(g.randomWord);
initialize();

// w.setRandomWord(h.randomWord);
// h.play();

