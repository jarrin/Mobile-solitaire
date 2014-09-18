/**
 * Created by Jarrin on 17-9-14.
 */
define(['jquery'], function ($) {
	var User = function (game) {

		var game = game

		$(document).ready(bindEvents);

		function bindEvents() {
			/* User Events */
			console.log("aa");
			console.log(this);
			$(window).on('resize', setScaling);
		}


		this.startGame = function() {
			bindEvents();
			/*$(cardOrder).each(function() {



			});
			setScaling();*/
		}
		function addCard(area, suite, value, faced) {
			if(faced == undefined) faced = "back";
			$("#" + area).append($("<div>").addClass("card " + faced + " " + suite + " _" + value));

		}
		function setScaling()
		{
			console.log("Scaling");
			var sample = $(".card.sample");
			sample.show();
			var height = sample.height();
			sample.hide();
			var width = height / 1.4;
			$("div.card:not(.sample)").css({

				"background-size": "auto " + ( height * 5 )+ "px",
				height: height,
				width : width

			});
		}

	};

	return User;

});