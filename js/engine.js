define(['jquery', 'card'], function ($, Card) {
	var Engine = function (dev) {

		if(dev) developing();
		else	runtime();
		//Private vars
		var _name =      'The Engine';
		this.cards = [{suite:"clubs",card:0},{suite:"clubs",card:1},{suite:"clubs",card:2},{suite:"clubs",card:3},{suite:"clubs",card:4},{suite:"clubs",card:5},{suite:"clubs",card:6},{suite:"clubs",card:7},{suite:"clubs",card:8},{suite:"clubs",card:9},{suite:"clubs",card:10},{suite:"clubs",card:11},{suite:"clubs",card:12},{suite:"spades",card:0},{suite:"spades",card:1},{suite:"spades",card:2},{suite:"spades",card:3},{suite:"spades",card:4},{suite:"spades",card:5},{suite:"spades",card:6},{suite:"spades",card:7},{suite:"spades",card:8},{suite:"spades",card:9},{suite:"spades",card:10},{suite:"spades",card:11},{suite:"spades",card:12},{suite:"hearts",card:0},{suite:"hearts",card:1},{suite:"hearts",card:2},{suite:"hearts",card:3},{suite:"hearts",card:4},{suite:"hearts",card:5},{suite:"hearts",card:6},{suite:"hearts",card:7},{suite:"hearts",card:8},{suite:"hearts",card:9},{suite:"hearts",card:10},{suite:"hearts",card:11},{suite:"hearts",card:12},{suite:"diamonds",card:0},{suite:"diamonds",card:1},{suite:"diamonds",card:2},{suite:"diamonds",card:3},{suite:"diamonds",card:4},{suite:"diamonds",card:5},{suite:"diamonds",card:6},{suite:"diamonds",card:7},{suite:"diamonds",card:8},{suite:"diamonds",card:9},{suite:"diamonds",card:10},{suite:"diamonds",card:11},{suite:"diamonds",card:12}]

		this.cardsObj = [];
		var _this = this;


		//Public vars
		this._htmlInserted = false;

		//private functions
		function developing()
		{
			console.log("woot")
		}
		function runtime()
		{
			console.log = function(){};
		}
		//Public functions
		this.cards.shuffleCards = function()
		{
			var m = this.length, t, i;
			// While there remain elements to shuffle…
			while (m) {

				// Pick a remaining element…
				i = Math.floor(Math.random() * m--);

				// And swap it with the current element.
				t = this[m];
				this[m] = this[i];
				this[i] = t;
			}
			return this;
		}
		this.cards.createCardsTo = function(target, faced)
		{
			if(faced === undefined) faced = "back";
			$(this).each(function(n, card){
				_this.cardsObj.push(new Card(card, $("#" + target), n+1));
			});
			return this;
		}

		this.createGame = function(gameType)
		{
			switch(gameType)
			{
				case 'klondike':


					console.log("Starting " + gameType);
					require(["types/"+ gameType +"/game", "text!types/" + gameType + "/game.html"], function(Game, html){
						$("#game").html(html);
						_this._htmlInserted = true;
						Game.call(_this);
					});
					break;
			}
			return this;
		}
		this.flip = function(elements)
		{
			elements.removeClass("back").draggable({

				zIndex: 1000,
				revert: "invalid",

				create: function( event, ui )
				{
					console.log(this)
				}

			});
		}

	}



	Engine.prototype.startGame = function()
	{
		//Waiting for game ready...
		var _this = this;
		var i = setInterval(function(){

			//Check if game is ready...
			if(_this._htmlInserted, _this._loaded)
			{
				clearInterval(i)
				_this.start();
			}

		}, 10);
	}

	Engine.prototype.setScaling = function() {
		var sample = $(".card.sample");
		sample.show();
		var height = sample.height();
		sample.hide();
		var width = height / 1.4;
		console.log("Setting cards to " + height + "px by "  + width + "px");
		$("div.card:not(.sample)").css({

			"background-size": "auto " + ( height * 5 ) + "px",
			height: height,
			width: width

		});
		return this;
	};





	return Engine;

});