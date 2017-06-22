$(document).ready(function(){
	(function($) {
		$(function() {
			$('.styler').styler();
		});
	})(jQuery);
	$('.license').slick({
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1
				}
			},

		]
	});
	//mob-menu-плавное появление
	$('.header__open').click(function () {
			$(this).hide();
			$('.header__close').show();
			$('.nav').addClass('bounceInDownn').show().fadeIn();
			$('.mob_phone2').addClass('bounceInDownn').addClass('header__on').fadeIn();
			$('.page-header').addClass('z-index');
			$('.blackout').fadeIn(400);
			$('.global_wrapper').addClass('body_overflow');
	});
	$('.header__close').click(function () {
			$(this).hide();
			$('.room__nav').fadeOut();
			$('.nav').removeClass('bounceInDownn').fadeOut();
			$('.mob_phone2').removeClass('bounceInDownn').fadeOut();
			$('.header__open').show();
			$('.blackout').fadeOut(400);
			$('.page-header').removeClass('z-index');
			$('.global_wrapper').removeClass('body_overflow');
	});
	$('.blackout').click(function () {
			$(this).fadeOut(400);
			$('.header__close').removeClass('bounceInDownn').fadeOut();
			$('.header__open').removeClass('bounceInDownn').fadeIn();
			$('.room__nav').fadeOut(400);
			$('.nav').fadeOut(400);
			$('.mob_phone2').fadeOut(400);
			$('.page-header').removeClass('z-index');
			$('.global_wrapper').removeClass('body_overflow');
	});
});