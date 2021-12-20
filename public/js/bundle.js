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


$(function () {
  console.log("Hello, world!");
});

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
      $(this).find("#slider-logos__list").slick({
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map