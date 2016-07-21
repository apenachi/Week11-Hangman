var request = require('request');
var url = 'https://randomuser.me/api/?results=1&gender=female';
// var url = 'http://randomword.setgetgo.com/get.php?len=6';


function Game() {
	this.randomWord = '';
	this.setRandomWord = function() {
		request(url, function(error, response, results) {
			if (!error && response.statusCode === 200) {
				var users = JSON.parse(results);
				users['results'].forEach(function(user){
					this.randomWord = user.name.first;
					console.log(this.randomWord);
				})
			}
		});
		// this.randomWord = getRandomWord();
	};
	this.getRandomWord = function() {
		return this.randomWord
	};
}

var game = new Game();
game.setRandomWord();
// game.getRandomWord();
setTimeout(function(){console.log(game.randomWord)}, 2000);
