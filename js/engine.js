define(['game', 'user'], function (Game, User) {
	var Engine = function () {

        this.user = new User();

        var _name = 'The Engine';
		this.currentGame = undefined;


		this.startGame = function()
		{
			this.currentGame = new Game();
            var that = this;
            setTimeout(function(){
                that.user.startGame(that.currentGame);

            }, 500);


		}

	};
	Engine.prototype.getGame = function()
	{
		return this.currentGame;
	}

	return Engine;

});