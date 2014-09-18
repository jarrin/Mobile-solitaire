/**
 * Created by Jarrin on 17-9-14.
 */
define(['jquery'], function ($) {
	var User = function () {


		$(document).ready(bindEvents);

		function bindEvents() {

			$("#score").click(startGame);
		}


		function startGame() {
			var state = engine.startNewGame();
			for(i = 1; i <= 52; i++)
			{
				addCard("drawer", {}, "closed")
			}
			setScaling();
		}
		function addCard(area, card, faced) {

			$("#" + area).append($("<div>").addClass("card back"));

		}
		function setScaling()
		{
			var height = $(".card.sample").first().height();
			var width = height / 1.4;
			$("div.card").css({

				"background-size": "auto " + ( height * 5 )+ "px"

			});
		}

	};

	return User;

});