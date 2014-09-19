/**
 * Created by Jarrin on 17-9-14.
 */
define(['jquery'], function ($) {
	var User = function () {


        var currentGame;

		$(document).ready(bindEvents);
		function bindEvents() {
			/* User Events */
			console.log("Binding events....");
			$(window).on('resize', setScaling);
		}


		this.startGame = function(game) {

            currentGame = game;

            var state = currentGame.start();
			createCardEl(state);


            console.log("User started a game...");
/*


			console.log(currentGame.getState());
			setScaling();
			currentGame.deal();
*/

		}
		function createCardEl(state)
		{
			$(state.drawer).each(function(i, card){

				card.el = addCardToUI("drawer", card);

			});
		}
		function addCardToUI(area, card, faced) {
			if(faced == undefined) faced = "back";

			return $("<div>").addClass("card " + faced + " " + card.suite + " _" + card.card);

		}
		function moveAnimate(element, newParent){
			element = $(element);
			newParent = $(newParent);

			var originPos = element.offset();
			element.css({ position: 'fixed', left: originPos.left, top: originPos.top});

			var toPos = newParent.offset();
			element.animate({
				left: toPos.left, top: toPos.top
			}, 100);
		}
		function setScaling()
		{
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