define(['jquery', 'ionsound'], function ($) {
	var Game = function () {

		//Private vars
		var animateTime  = 1000;
		$.fn.reverse = [].reverse;

		/* User Events */
		console.log("Binding events....");
		$.ionSound({
			sounds: [
				{
					name: "deal",
					volume: 1.0
				},			{
					name: "flip",
					volume: 1.0
				},
			],
			path: "sounds/",
			preload: true

		});
		this._loaded = true;

		//Public functions
		this.start = function()
		{
			console.log("starting game...");
			this.deal();

		}

		this.deal = function()
		{

			this.cards.shuffleCards()
					  .createCardsTo("drawer");
			this.setScaling();

			var _curStack = 0;
			var _offset    = [-1,-1,-1,-1,-1,-1,-1];
			var dur; var animateDur = 1;

			$(this.cardsObj).each(function(i, card){
				i++;

				if(i <=  1) { _curStack = 0; _offset[0]++; }
				else if(i <=  3) { _curStack = 1; _offset[1]++; }
				else if(i <=  6) { _curStack = 2; _offset[2]++; }
				else if(i <= 10) { _curStack = 3; _offset[3]++; }
				else if(i <= 15) { _curStack = 4; _offset[4]++; }
				else if(i <= 21) { _curStack = 5; _offset[5]++; }
				else if(i <= 28) { _curStack = 6; _offset[6]++; }
				else return;

				dur = (i -1) * animateDur;
				setTimeout(function(curstack, offset){

					card.moveMeTo($(".stack:nth-child(" + (curstack+1) + ")"), { top: offset }, animateDur);

				}, dur, _curStack, _offset[_curStack]*40);

			});
			setTimeout(function(flip){
				flip($(".stack .card:last-child"));
			}, dur+animateDur+200, this.flip);
		}

	}
	return Game;
});