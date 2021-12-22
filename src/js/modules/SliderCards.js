// import $ from "jquery";

const SliderCards = {
	_$sliders: $(),

	_destroySliders() {
		try {
			this._$sliders.each(function () {
				$(this).find(".products").slick("unslick");
				$(this).find(".section__more").show();
			});
		} catch (e) {}
	},

	_initSliders() {
		this._$sliders.each(function () {
			$(this)
				.find(".products")
				.slick({
					dots: true,
					infinite: false,
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2,
					appendDots: $(this).find(".slider-cards__dots"),
					responsive: [
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							},
						},
					],
				});

			$(this).find(".section__more").hide();
		});
	},

	_onResize(mql) {
		mql.matches ? this._destroySliders() : this._initSliders();
	},

	init() {
		this._$sliders = $(".slider-cards");

		const mql = window.matchMedia("(min-width: 992px)");

		mql.addListener(this._onResize.bind(this));

		this._onResize(mql);
	},
};

$(function () {
	SliderCards.init();
});

export default SliderCards;
