define(['game', 'user'], function (Game, User) {
	var Engine = function () {
		var _name = 'The Engine';

		var currentGame = undefined;
		currentGame = new Game();

		var user = new User();

		this.startNewGame = currentGame.start;

	};

	return Engine;

});