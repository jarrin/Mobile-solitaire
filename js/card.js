define(['jquery', 'card'], function ($) {
	var Card = function(card)
	{
		this.value = card.card;
		this.suite = card.suite;
		this.el    = card.el;

	}


	return Card;

});



