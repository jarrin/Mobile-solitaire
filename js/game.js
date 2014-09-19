define(['jquery', 'card'], function ($, Card) {
	var Game = function () {
		/**
		 * Card values
		 *  0: Ace
		 *  1: 2
		 *  2: 3
		 *  3: 4
		 *  4: 5
		 *  5: 6
		 *  6: 7
		 *  7: 8
		 *  8: 9
		 *  9: 10
		 *  10: Jack
		 *  11: Queen
		 *  12: King
		 *
		 */
		var cards = [{suite:"clubs",card:0},{suite:"clubs",card:1},{suite:"clubs",card:2},{suite:"clubs",card:3},{suite:"clubs",card:4},{suite:"clubs",card:5},{suite:"clubs",card:6},{suite:"clubs",card:7},{suite:"clubs",card:8},{suite:"clubs",card:9},{suite:"clubs",card:10},{suite:"clubs",card:11},{suite:"clubs",card:12},{suite:"spades",card:0},{suite:"spades",card:1},{suite:"spades",card:2},{suite:"spades",card:3},{suite:"spades",card:4},{suite:"spades",card:5},{suite:"spades",card:6},{suite:"spades",card:7},{suite:"spades",card:8},{suite:"spades",card:9},{suite:"spades",card:10},{suite:"spades",card:11},{suite:"spades",card:12},{suite:"hearts",card:0},{suite:"hearts",card:1},{suite:"hearts",card:2},{suite:"hearts",card:3},{suite:"hearts",card:4},{suite:"hearts",card:5},{suite:"hearts",card:6},{suite:"hearts",card:7},{suite:"hearts",card:8},{suite:"hearts",card:9},{suite:"hearts",card:10},{suite:"hearts",card:11},{suite:"hearts",card:12},{suite:"diamonds",card:0},{suite:"diamonds",card:1},{suite:"diamonds",card:2},{suite:"diamonds",card:3},{suite:"diamonds",card:4},{suite:"diamonds",card:5},{suite:"diamonds",card:6},{suite:"diamonds",card:7},{suite:"diamonds",card:8},{suite:"diamonds",card:9},{suite:"diamonds",card:10},{suite:"diamonds",card:11},{suite:"diamonds",card:12}]
		this.state = {

			drawer : [],
			drew : [],
			stacks: [
				[], [], [], [], [], [], []
			],
			table: [
				[], [], [], []
			]
		};
		/*
	    function deal(cards)
		{
			state.stacks[0] = cards.slice( 0, 1);
			state.stacks[1] = cards.slice( 1, 3);
			state.stacks[2] = cards.slice( 3, 6);
			state.stacks[3] = cards.slice( 6,10);
			state.stacks[4] = cards.slice(10,15);
			state.stacks[5] = cards.slice(15,21);
			state.stacks[6] = cards.slice(21,28);
			state.drawer    = cards.slice(28,53);
			return state;
		}*/
		function shuffleCards()
		{
            var m = cards.length, t, i;
            // While there remain elements to shuffle…
            while (m) {

                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = cards[m];
                cards[m] = cards[i];
                cards[i] = t;
            }
		}

		function addToState(area, card)
		{
			var c = new Card(card);
			console.log(this.state);
			//this.state[area].push(c);
		}

		this.start = function()
		{
			shuffleCards();
			var _this;
			$(cards).each(function(i, card){ addToState("drawer", new Card(card))  });
			return state;
		}

	};

	return Game;

});



