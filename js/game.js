define([], function () {
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
		var cards =[{suite:"clubs",card:0,image:"AC"},{suite:"clubs",card:1,image:"2C"},{suite:"clubs",card:2,image:"3C"},{suite:"clubs",card:3,image:"4C"},{suite:"clubs",card:4,image:"5C"},{suite:"clubs",card:5,image:"6C"},{suite:"clubs",card:6,image:"7C"},{suite:"clubs",card:7,image:"8C"},{suite:"clubs",card:8,image:"9C"},{suite:"clubs",card:9,image:"10C"},{suite:"clubs",card:10,image:"JC"},{suite:"clubs",card:11,image:"QC"},{suite:"clubs",card:12,image:"KC"},{suite:"spades",card:0,image:"AS"},{suite:"spades",card:1,image:"2S"},{suite:"spades",card:2,image:"3S"},{suite:"spades",card:3,image:"4S"},{suite:"spades",card:4,image:"5S"},{suite:"spades",card:5,image:"6S"},{suite:"spades",card:6,image:"7S"},{suite:"spades",card:7,image:"8S"},{suite:"spades",card:8,image:"9S"},{suite:"spades",card:9,image:"10S"},{suite:"spades",card:10,image:"JS"},{suite:"spades",card:11,image:"QS"},{suite:"spades",card:12,image:"KS"},{suite:"hearts",card:0,image:"AH"},{suite:"hearts",card:1,image:"2H"},{suite:"hearts",card:2,image:"3H"},{suite:"hearts",card:3,image:"4H"},{suite:"hearts",card:4,image:"5H"},{suite:"hearts",card:5,image:"6H"},{suite:"hearts",card:6,image:"7H"},{suite:"hearts",card:7,image:"8H"},{suite:"hearts",card:8,image:"9H"},{suite:"hearts",card:9,image:"10H"},{suite:"hearts",card:10,image:"JH"},{suite:"hearts",card:11,image:"QH"},{suite:"hearts",card:12,image:"KH"},{suite:"diamonds",card:0,image:"AD"},{suite:"diamonds",card:1,image:"2D"},{suite:"diamonds",card:2,image:"3D"},{suite:"diamonds",card:3,image:"4D"},{suite:"diamonds",card:4,image:"5D"},{suite:"diamonds",card:5,image:"6D"},{suite:"diamonds",card:6,image:"7D"},{suite:"diamonds",card:7,image:"8D"},{suite:"diamonds",card:8,image:"9D"},{suite:"diamonds",card:9,image:"10D"},{suite:"diamonds",card:10,image:"JD"},{suite:"diamonds",card:11,image:"QD"},{suite:"diamonds",card:12,image:"KD"}]
		var state = {

			drawer : [],
			drew : [],
			stacks: [
				[], [], [], [], [], [], []
			],
			table: [
				[], [], [], []
			]
		};

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
		}
		function shuffleCards()
		{
			var shuffled = cards.slice(0);
			var currentIndex = shuffled.length, temporaryValue, randomIndex ;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {

				// Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				// And swap it with the current element.
				temporaryValue = shuffled[currentIndex];
				shuffled[currentIndex] = shuffled[randomIndex];
				shuffled[randomIndex] = temporaryValue;
			}
			return shuffled;
		}
		this.start = function()
		{
			var shuffledCards = shuffleCards();
			return deal(shuffledCards);
		}

	};


	return Game;

});
