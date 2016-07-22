// * `letter.js` should control whether or not a letter appears as a "_" 
// or as itself on-screen.
// Displays word to screen either 'abc' or '---'

var Letter = function () {
	this.found = false;//true
	this.char = '';//a
	this.setChar = function(char) {
		this.char = char;
	}
	// this.charFound = function() {
	// 	// console.log(this.found ? this.char : '*');
	// 	return this.found ? this.char : '';
	// }
}
Letter.prototype.charFound = function() {
		// console.log(this.found ? this.char : '*')
		return this.found ? this.char : '';
}

// module.exports = Letter;
module.exports.Letter = Letter;

// var letter = new Letter();
// letter.setChar('a');
// letter.found = true;
// console.log(letter.charFound());