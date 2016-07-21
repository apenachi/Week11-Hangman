// * `letter.js` should control whether or not a letter appears as a "_" 
// or as itself on-screen.
// Displays word to screen either 'abc' or '---'

function Letter() {
	this.found = false;
	this.char = '';
	this.setChar = function(char) {
		this.char = char;
	}
	this.charFound = function() {
		// console.log(this.found ? this.char : '*');
		return this.found ? this.char : '';
	}
}

module.exports = Letter;
// var letter = new Letter();
// letter.setChar('a');
// letter.found = true;
// console.log(letter.charFound());