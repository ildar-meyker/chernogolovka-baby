// import $ from "jquery";

const SliderLogos = {
	init() {
		$(".slider-logos__root").each(function () {
			$(this)
				.find("#slider-logos__list")
				.slick({
					dots: true,
					infinite: false,
					slidesToShow: 4,
					slidesToScroll: 4,
					prevArrow: $(this).find(".slider-logos__prev"),
					appendDots: $(this).find(".slider-logos__dots"),
					nextArrow: $(this).find(".slider-logos__next"),
					responsive: [
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3,
							},
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2,
							},
						},

						{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							},
						},
					],
				});
		});
	},
};

$(function () {
	SliderLogos.init();
});

export default SliderLogos;
