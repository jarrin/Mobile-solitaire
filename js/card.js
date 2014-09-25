define(['jquery', 'jquery-ui'], function ($) {
	var Card = function(card, target, n)
	{
		this.value = card.card;
		this.suite = card.suite;
		this.order = n;
		this.el    =  $("<div>").addClass("card back "+ this.suite + " _" + this.value).css({

			"z-index": this.order+1

		});
		this.el.appendTo(target);
		var pos = this.el.offset();
		this.el.css({

			position: "fixed",
			left: pos.left,
			top: pos.top

		}).on("start", function(){

			console.log("help meeee!", engine)

		});


	}

	Card.prototype.moveMeTo = function(target, offset, duration)
	{
		if(duration === undefined) duration = 1000;
		var pos = target.offset();
		pos.top += offset.top;
		this.el.animate({

			'top': pos.top + 'px',
			'left': pos.left  + 'px'

		}, duration, function(){

			$(this).appendTo(target).css({

				'left': 0,
				'top': '',
				'position': 'absolute'

			})

		});


		return this;
	}

	return Card;

});



