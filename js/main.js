/**
 * Created by Jarrin on 16-9-14.
 */

var currentGame = undefined;

jQuery(document).ready(function($) {

	currentGame = new game();
	console.log(currentGame.lol());


});


function game()
{
	/**
	 * Cards
	 *
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
	var cards =
	[
		{
			suite: "clubs",
			card: 0,
			image: "AC"
		},
		{
			suite: "clubs",
			card: 1,
			image: "2C"
		},
		{
			suite: "clubs",
			card: 2,
			image: "3C"
		},
		{
			suite: "clubs",
			card: 3,
			image: "4C"
		},
		{
			suite: "clubs",
			card: 4,
			image: "5C"
		},
		{
			suite: "clubs",
			card: 5,
			image: "6C"
		},
		{
			suite: "clubs",
			card: 6,
			image: "7C"
		},
		{
			suite: "clubs",
			card: 7,
			image: "8C"
		},
		{
			suite: "clubs",
			card: 8,
			image: "9C"
		},
		{
			suite: "clubs",
			card: 9,
			image: "10C"
		},
		{
			suite: "clubs",
			card: 10,
			image: "JC"
		},
		{
			suite: "clubs",
			card: 11,
			image: "QC"
		},
		{
			suite: "clubs",
			card: 12,
			image: "KC"
		}
	]

}

game.prototype.lol = function()
{
	return this.getCards;
}