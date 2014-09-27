define(['jquery', 'jquery-ui'], function ($) {
	var Card = function(card, target, n)
	{
		this.value = card.card;
		this.suite = card.suite;
		this.order = n;
		this.el    =  $("<div>").addClass("card back "+ this.suite + " _" + this.value).css({

			"z-index": this.order+1

		}).data('card', this);
		this.el.appendTo(target);


		var pos = this.el.offset();


		this.el.css({

			position: "fixed",
			left: pos.left,
			top: pos.top

		}).data('card', this);
		this.el.bind('movable', function()
		{

			$(this).draggable({
				revert: true,
				revertDuration: 250,
				zIndex: 10000,
				start: function()
				{

				}

			}).droppable({

				activate: function( event, ui ){
					//accept: this.getValidCards()
				}
			});

		});

		this.getValidCards = function()
		{
			var validCards = [];
			if(this.value <= 11)
			{
				var suites = ['spades', 'clubs']
				if(card.suite == 'spades' || this.suite == 'clubs') { suites[0] = 'hearts'; suites[1] = 'diamonds'}

				var validValue = this.value  + 1;

				var sel = '.stack .card._' + validValue+ '.' + suites[0] + ', ' +  '.stack .card._' + validValue+ '.' + suites[1];
				validCards.push($(sel));

			}
			if(this.value == 12)
			{
				//A King

			}
			console.log(validCards);
		}

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



