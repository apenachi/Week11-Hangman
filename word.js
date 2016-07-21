// * `word.js` should contain all of the methods which will check the letters guessed
// versus the random word selected.
var ltr = require('./letter');

function Word() {
	this.inputLetters = '';
	this.randomWord = '';
	this.playerWord = '';
	this.setRandomWord = function(word) {
		this.randomWord = word;
		this.playerWord = word;
	};
	this.setPlayerWord = function(char) {
		this.inputLetters += char;
		console.log(word.inputLetters);
		var exp = '[^' + this.inputLetters + ']';
		var regex = new RegExp(exp, 'g');
		this.playerWord = this.randomWord.replace(regex, '*');
	};
	this.showPlayerWord = function() {
		console.log(this.randomWord);
		console.log(this.playerWord);
	};
	// this.saveInputLetters = function(char) {
	// 	this.inputLetters += char;
	// };
	this.checkLetter = function(l) {
		return this.randomWord.indexOf(l) > -1 ? true : false
	}
}
process.stdout.write('\033c');

var l = new ltr();
var word = new Word();

word.setRandomWord('javascript');
l.setChar('a');

// word.saveInputLetters(l.char);

l.found = word.checkLetter(l.char)
console.log('l.char: ', l.char);
console.log('l.found: ', l.found);
console.log('l.charFound: ', l.charFound());

word.setPlayerWord(l.charFound());

l.setChar('p');
l.found = word.checkLetter(l.char)
console.log('l.char: ', l.char);
console.log('l.found: ', l.found);
console.log('l.charFound: ', l.charFound());

word.setPlayerWord(l.charFound());

word.showPlayerWord();

// console.log('javascript'.replace(/scr/g, 'ok'));
