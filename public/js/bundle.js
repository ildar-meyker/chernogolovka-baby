/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Notify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Notify */ "./src/js/modules/Notify.js");
/* harmony import */ var _modules_SliderLogos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/SliderLogos */ "./src/js/modules/SliderLogos.js");
/* harmony import */ var _modules_SliderQuotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/SliderQuotes */ "./src/js/modules/SliderQuotes.js");
/* harmony import */ var _modules_SliderCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/SliderCards */ "./src/js/modules/SliderCards.js");
/* harmony import */ var _modules_LessMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/LessMore */ "./src/js/modules/LessMore.js");
/* harmony import */ var _modules_NavSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/NavSlider */ "./src/js/modules/NavSlider.js");
/* harmony import */ var _modules_SliderVideos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/SliderVideos */ "./src/js/modules/SliderVideos.js");
/* harmony import */ var _modules_AudioList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/AudioList */ "./src/js/modules/AudioList.js");








$(function () {
  console.log("Hello, world!");
});

/***/ }),

/***/ "./src/js/modules/AudioList.js":
/*!*************************************!*\
  !*** ./src/js/modules/AudioList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/howler@2.2.3/dist/howler.min.js"></script>
// import $ from "jquery";
// import { Howl, Howler } from "howler";
var AudioList = {
  _$currentItem: $(),
  _player: null,
  _isPlayerOn: false,
  _play: function _play() {
    this._$currentItem.addClass("active");

    this._isPlayerOn = true;

    this._player.play();
  },
  _pause: function _pause() {
    this._$currentItem.removeClass("active");

    this._isPlayerOn = false;

    this._player.pause();
  },
  _handlePlayButton: function _handlePlayButton(e) {
    var _this = this;

    var $item = $(e.currentTarget).closest(".audio-list__item");
    var src = $item.data("src");
    var isPlayerOn = this._isPlayerOn;

    if (isPlayerOn) {
      this._pause();
    }

    if (this._$currentItem[0] !== $item[0]) {
      this._$currentItem = $item;
      this._player = new Howl({
        src: [src]
      });

      this._player.on("end", function () {
        _this._$currentItem.removeClass("active");

        _this._isPlayerOn = false;
      });

      this._play();
    } else {
      if (isPlayerOn) return;

      this._play();
    }
  },
  init: function init() {
    if ($(".audio-list").length === 0) return;
    $(document).on("click", ".audio-list__button", this._handlePlayButton.bind(this));
  }
};
$(function () {
  AudioList.init();
});
/* harmony default export */ __webpack_exports__["default"] = (AudioList);

/***/ }),

/***/ "./src/js/modules/LessMore.js":
/*!************************************!*\
  !*** ./src/js/modules/LessMore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import $ from "jquery";
var LessMore = {
  checkHeight: function checkHeight($scope) {
    $(".less-more", $scope).each(function () {
      var $crop = $(this).find(".less-more__crop");
      var $button = $(this).find(".less-more__button");
      var $ruler = $(this).find(".less-more__ruler");
      $button.toggleClass("shown", $ruler.height() > $crop.height()).removeClass("active");
      $crop.attr("style", "");
    });
  },
  toggle: function toggle(e) {
    e.preventDefault();
    var $_ = $(e.currentTarget).closest(".less-more");
    var $ruler = $_.find(".less-more__ruler");
    var $crop = $_.find(".less-more__crop");
    var isActive = $(e.currentTarget).hasClass("active");

    if (!isActive) {
      $(e.currentTarget).addClass("active");
      $crop.css("max-height", $ruler.height());
    } else {
      $(e.currentTarget).removeClass("active");
      $crop.attr("style", "");
    }
  },
  _handleWindowResize: function _handleWindowResize() {
    this.checkHeight();
  },
  init: function init() {
    this.checkHeight();
    $(document).on("click", ".less-more__button", this.toggle.bind(this));
    $(window).on("resize", $.throttle(250, this._handleWindowResize.bind(this)));
  }
};
$(function () {
  LessMore.init();
});
/* harmony default export */ __webpack_exports__["default"] = (LessMore);

/***/ }),

/***/ "./src/js/modules/NavSlider.js":
/*!*************************************!*\
  !*** ./src/js/modules/NavSlider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@7.4.1/swiper-bundle.min.css">
// <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/swiper@7.4.1/swiper-bundle.min.js"></script>
// import $ from "jquery";
// import Swiper from "swiper/bundle";
// import "swiper/css/bundle";
var NavSlider = {
  init: function init() {
    $(".nav-slider").each(function () {
      new Swiper($(this).find(".swiper")[0], {
        mousewheel: {
          forceToAxis: true
        },
        slidesPerView: "auto",
        navigation: {
          prevEl: $(this).find(".nav-slider__prev")[0],
          nextEl: $(this).find(".nav-slider__next")[0]
        }
      });
    });
  }
};
$(function () {
  NavSlider.init();
});
/* harmony default export */ __webpack_exports__["default"] = (NavSlider);

/***/ }),

/***/ "./src/js/modules/Notify.js":
/*!**********************************!*\
  !*** ./src/js/modules/Notify.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import $ from "jquery";
var Notify = {
  _counter: 0,
  _handleItemClick: function _handleItemClick(e) {
    e.preventDefault();
    $(e.currentTarget).remove();
  },
  _notify: function _notify(message, colorType) {
    var uniqueId = ++this._counter;
    $('<div id="notify-' + uniqueId + '" class="notify__item notify__item--' + colorType + '">' + message + "</div>").prependTo($("#notify"));
    setTimeout(function () {
      $("#notify-" + uniqueId).remove();
    }, 8000);
  },
  error: function error(message) {
    this._notify(message, "error");
  },
  warning: function warning(message) {
    this._notify(message, "warning");
  },
  success: function success(message) {
    this._notify(message, "success");
  },
  init: function init() {
    $(document).on("click", ".notify__item", this._handleItemClick.bind(this));
  }
};
$(function () {
  Notify.init();
});
/* harmony default export */ __webpack_exports__["default"] = (Notify);

/***/ }),

/***/ "./src/js/modules/SliderCards.js":
/*!***************************************!*\
  !*** ./src/js/modules/SliderCards.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import $ from "jquery";
var SliderCards = {
  _$sliders: $(),
  _destroySliders: function _destroySliders() {
    try {
      this._$sliders.each(function () {
        $(this).find(".products").slick("unslick");
        $(this).find(".section__more").show();
      });
    } catch (e) {}
  },
  _initSliders: function _initSliders() {
    this._$sliders.each(function () {
      $(this).find(".products").slick({
        dots: true,
        infinite: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        appendDots: $(this).find(".slider-cards__dots"),
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });
      $(this).find(".section__more").hide();
    });
  },
  _onResize: function _onResize(mql) {
    mql.matches ? this._destroySliders() : this._initSliders();
  },
  init: function init() {
    this._$sliders = $(".slider-cards");
    var mql = window.matchMedia("(min-width: 992px)");
    mql.addListener(this._onResize.bind(this));

    this._onResize(mql);
  }
};
$(function () {
  SliderCards.init();
});
/* harmony default export */ __webpack_exports__["default"] = (SliderCards);

/***/ }),

/***/ "./src/js/modules/SliderLogos.js":
/*!***************************************!*\
  !*** ./src/js/modules/SliderLogos.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import $ from "jquery";
var SliderLogos = {
  init: function init() {
    $(".slider-logos__root").each(function () {
      $(this).find(".slider-logos__list").slick({
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $(this).find(".slider-logos__prev"),
        appendDots: $(this).find(".slider-logos__dots"),
        nextArrow: $(this).find(".slider-logos__next"),
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });
    });
  }
};
$(function () {
  SliderLogos.init();
});
/* harmony default export */ __webpack_exports__["default"] = (SliderLogos);

/***/ }),

/***/ "./src/js/modules/SliderQuotes.js":
/*!****************************************!*\
  !*** ./src/js/modules/SliderQuotes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import $ from "jquery";
var SliderQuotes = {
  init: function init() {
    $(".slider-quotes__root").each(function () {
      $(this).find(".slider-quotes__list").slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(this).find(".slider-quotes__prev"),
        appendDots: $(this).find(".slider-quotes__dots"),
        nextArrow: $(this).find(".slider-quotes__next")
      });
    });
  }
};
$(function () {
  SliderQuotes.init();
});
/* harmony default export */ __webpack_exports__["default"] = (SliderQuotes);

/***/ }),

/***/ "./src/js/modules/SliderVideos.js":
/*!****************************************!*\
  !*** ./src/js/modules/SliderVideos.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
// <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
// <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
// import $ from "jquery";
// import "slick-carousel";
// import "slick-carousel/slick/slick.scss";
var SliderVideos = {
  init: function init() {
    $(".slider-videos").each(function () {
      $(this).find(".slider-videos__list").slick({
        dots: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: $(this).find(".slider-videos__prev"),
        appendDots: $(this).find(".slider-videos__dots"),
        nextArrow: $(this).find(".slider-videos__next"),
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });
    });
  }
};
$(function () {
  SliderVideos.init();
});
/* harmony default export */ __webpack_exports__["default"] = (SliderVideos);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map