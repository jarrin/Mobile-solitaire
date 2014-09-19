/**
 * Created by Jarrin on 17-9-14.
 */
define(['jquery', 'jquery-animate-from-to'], function ($) {
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

            currentGame.start();
            console.log("User started a game...");

			$(currentGame.getCards()).each(function() {
                addCard("drawer", this.suite, this.card);

			});
			setScaling();
            deal();

		}

        function deal() {
            var state = currentGame.getState();
            var cardn = 1;
            $($("#drawer .card:not(.smaple)").get().reverse()).each(function(){
                if(cardn <= 1) //To first stack
                {
                    $(this).appendTo($('.stack:nth-child(1)').get(0));
                }
                else if(cardn <= 3) //To first stack
                {
                    $(this).appendTo($('.stack:nth-child(2)').get(0));
                }
                else if(cardn <= 6) //To first stack
                {
                    $(this).appendTo($('.stack:nth-child(3)').get(0));
                }
                else if(cardn <= 10) //To first stack
                {
                    $(this).appendTo($('.stack:nth-child(4)').get(0));
                }
                else if(cardn <= 15) //To first stack
                {
                    $(this).appendTo($('.stack:nth-child(5)').get(0));
                }
                else if(cardn <= 21) //To first stack
                {
                    $(this).appendTo($('.stack:nth-child(6)').get(0));
                }
                else if(cardn <= 28) //To first stack
                {
                    $(this).appendTo($('.stack:nth-child(7').get(0));
                }


               // console.log(this);
                cardn++;
            });
        }
		function addCard(area, suite, value, faced) {
			if(faced == undefined) faced = "back";
			return $("#" + area).append($("<div>").addClass("card " + faced + " " + suite + " _" + value));

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