(function($) {
	$(document).ready(function(){
		let card = $('.card');

		if (!card) return;

		let	cardItems = card.find('.card__item'),
			cardLength = cardItems.length;

		if (!cardItems || cardLength <= 0) return;

		card.slick({
			arrows: false,
			infinite: false
		});

		card.on('afterChange', function(slick, currentSlide){

			let index = currentSlide.currentSlide,
				content = $(cardItems[index]).find('.card__content');

			content.removeClass('hide');

		});

	});
}(jQuery));