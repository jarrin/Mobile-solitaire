define(['game', 'user'], function (Game, User) {
	var Engine = function () {

        this.user = new User();

        var _name = 'The Engine';
		var currentGame = undefined;


		this.startGame = function()
		{
            currentGame = new Game();
            var that = this;
            setTimeout(function(){
                that.user.startGame(currentGame);

            }, 500)


		}

	};

	return Engine;

});