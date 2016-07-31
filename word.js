// * `word.js` should contain all of the methods which will check the letters guessed
// versus the random word selected.
var letter = require('./letter');
var colors = require('colors/safe');

var Word = function() {
	this.inputLetters = '';
	this.matchingLetters = '';
	this.randomWord = '';
	this.playerWord = '';
};

Word.prototype.setRandomWord = function(word) {
	this.randomWord = word;
	this.playerWord = '*'.repeat(this.randomWord.length);
};

Word.prototype.checkPlayerWord = function(char) {
	var l = new letter.Letter(char);
	l.found = this.checkLetter(char);
	this.inputLetters += char;
	this.matchingLetters += l.charFound();
	var exp = '[^' + this.matchingLetters + ']';
	var regex = new RegExp(exp, 'g');
	this.playerWord = this.randomWord.replace(regex, '*');
};

Word.prototype.showWordVars = function() {
	// this.checkPlayerWord('');
	console.log(colors.white('\nInput Chars [%s]'), colors.yellow(this.inputLetters));
	console.log(colors.white('\nPlayer Word: %s'), colors.yellow(this.playerWord));
};

Word.prototype.checkLetter = function(l) {
	return this.randomWord.indexOf(l) > -1 ? true : false
}

module.exports.Word = Word;

// var word = new Word();
// word.setRandomWord('javascript');
// word.checkPlayerWord('s');

