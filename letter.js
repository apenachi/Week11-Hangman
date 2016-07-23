
var Letter = function(char) {
	this.found = false;
	this.letter = char;
}
Letter.prototype.charFound = function() {
	// cannot return '*' otherwise it will be used
	// console.log(this.found ? this.char : '*')
		return this.found ? this.letter : '';
}

// module.exports = Letter;
module.exports.Letter = Letter;

// var letter = new Letter();
// letter.setChar('a');
// letter.found = true;
// console.log(letter.charFound());