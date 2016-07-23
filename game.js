// var request = require('request');
// var url = 'https://randomuser.me/api/?results=1&gender=female';
// var url = 'http://randomword.setgetgo.com/get.php?len=6';


// var Game = function() {
// 	// this.randomWord = '';
// 	this.setRandomWord = function() {
// 		request(url, function(error, response, results) {
// 			if (!error && response.statusCode === 200) {
// 				var users = JSON.parse(results);
// 				var word = new Word.Word();
// 				users['results'].forEach(function(user){
// 					word.setRandomWord(user.name.first);
// 					// console.log(this.randomWord);
// 				});
// 				console.log(word.randomWord);
// 			}
// 		});
// 	};
// }
// var g = new Game();
// g.setRandomWord();

var Game = function() {
	this.randomWords = ['javascript', 'jquery', 'mysql', 'bootstrap', 'node', 'api', 'html', 'css'],
	this.randomWord = this.getRandomWord();
};

Game.prototype.getRandomWord = function() {
	return this.randomWords[Math.floor(Math.random() * this.randomWords.length)];
}
module.exports.Game = Game;
// var g = new Game();
// console.log(g.randomWord);

