define(['game', 'user'], function (Game, User) {
	var Engine = function () {
		var _name = 'The Engine';

		var currentGame = undefined;
		currentGame = new Game();

		this.user = new User(currentGame);

		this.start = function()
		{
			console.log(this.user);
			this.user.startGame();

		}

	};

	return Engine;

});