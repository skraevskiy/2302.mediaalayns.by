(function($) {
	$(document).ready(function(){

		let card = $('.card');

		if (!card) return;

		let	cardItems = card.find('.card__item'),
			cardLength = cardItems.length;

		if (!cardItems || cardLength <= 0) return;

		cardItems.find('.card__content').each(function(index, el) {
			el = $(el);
			el.addClass('hide');
		});

		card.slick({
			infinite: false,
			nextArrow: '<button type="button" class="slick-next"></button>',
			prevArrow: '<button type="button" class="slick-prev"></button>'
		});

		let sTO4FirstItem = setTimeout(function() {
			cardItems.filter(':first-child').find('.card__content').removeClass('hide');
			clearTimeout(sTO4FirstItem);
		}, 1000);

		card.on('afterChange', function(slick, currentSlide){

			let index = currentSlide.currentSlide,
				content = $(cardItems[index]).find('.card__content');

			content.removeClass('hide');

			content.find('div').each(function(index, el) {
				el = $(el);
				el.removeClass('hide');
			});

			if (index == 3) {
				let i3count = 0;
				let i3SI = setInterval(function() {
					content.find('.kutuzov img:first').toggleClass('hide');
					content.find('.kutuzov img:last').toggleClass('hide');
					if (i3count == 6) clearInterval(i3SI);
					i3count++;
				}, 2000);
			}

			if (content.find('card__popup')) content.find('card__popup').toggleClass('hide');

		});

	});
}(jQuery));