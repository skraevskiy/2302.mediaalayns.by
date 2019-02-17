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
			arrows: false,
			infinite: false
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

		});

	});
}(jQuery));