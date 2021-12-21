// import $ from "jquery";

const LessMore = {
	checkHeight($scope) {
		$(".less-more", $scope).each(function () {
			const $crop = $(this).find(".less-more__crop");
			const $button = $(this).find(".less-more__button");
			const $ruler = $(this).find(".less-more__ruler");

			$button
				.toggleClass("shown", $ruler.height() > $crop.height())
				.removeClass("active");

			$crop.attr("style", "");
		});
	},

	toggle(e) {
		e.preventDefault();

		const $_ = $(e.currentTarget).closest(".less-more");
		const $ruler = $_.find(".less-more__ruler");
		const $crop = $_.find(".less-more__crop");

		const isActive = $(e.currentTarget).hasClass("active");

		if (!isActive) {
			$(e.currentTarget).addClass("active");
			$crop.css("max-height", $ruler.height());
		} else {
			$(e.currentTarget).removeClass("active");
			$crop.attr("style", "");
		}
	},

	_handleWindowResize() {
		this.checkHeight();
	},

	init() {
		this.checkHeight();

		$(document).on("click", ".less-more__button", this.toggle.bind(this));

		$(window).on(
			"resize",
			$.throttle(250, this._handleWindowResize.bind(this))
		);
	},
};

$(function () {
	LessMore.init();
});

export default LessMore;
