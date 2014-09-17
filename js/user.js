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
		}

	};

	return User;

});