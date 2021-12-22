// import $ from "jquery";

const SliderQuotes = {
	init() {
		$(".slider-quotes__root").each(function () {
			$(this)
				.find(".slider-quotes__list")
				.slick({
					dots: true,
					infinite: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: $(this).find(".slider-quotes__prev"),
					appendDots: $(this).find(".slider-quotes__dots"),
					nextArrow: $(this).find(".slider-quotes__next"),
				});
		});
	},
};

$(function () {
	SliderQuotes.init();
});

export default SliderQuotes;
