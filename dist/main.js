/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n  <head>\r\n    <title>Document</title>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n\r\n    <script\r\n      src=\"https://kit.fontawesome.com/4481fae25d.js\"\r\n      crossorigin=\"anonymous\"\r\n    ></script>\r\n    <link\r\n      href=\"https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&display=swap\"\r\n      rel=\"stylesheet\"\r\n    />\r\n  </head>\r\n\r\n  <body>\r\n    <header class=\"header\">\r\n      <div class=\"header-blur\">\r\n        <div class=\"mobile\">\r\n          <div class=\"container\">\r\n            <div class=\"mobile__body\">\r\n              <a href=\"#\" class=\"mobile__logo\">\r\n                <img src=\"img/logo.png\" alt=\"mobile-logo\" />\r\n                <h2>Dart<br /><b>service manager</b></h2>\r\n              </a>\r\n              <div class=\"mobile__burger\">\r\n                <span></span>\r\n              </div>\r\n              <nav class=\"mobile__menu\">\r\n                <ul class=\"mobile__list\">\r\n                  <li>\r\n                    <a href=\"#\" class=\"mobile__link\">Home</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\" class=\"mobile__link\">Service</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\" class=\"mobile__link\">Extension</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\" class=\"mobile__link\">Pricing</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\" class=\"mobile__link\">Help</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\" class=\"mobile__link\">sign up</a>\r\n                  </li>\r\n                </ul>\r\n              </nav>\r\n              <a href=\"#\" class=\"mobile-btn\">sign up</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"intro\">\r\n          <div class=\"container\">\r\n            <div class=\"intro__content\">\r\n              <h1>lorem Ipsum Dolor sit amet</h1>\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n                eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim\r\n                ad minim veniam, quis nostrud exercitation ullamc laboris nisi\r\n                ut aliquip ex ea commodo consequat.\r\n              </p>\r\n              <div class=\"intro__buttons\">\r\n                <button>\r\n                  <a href=\"#\">Buy now</a>\r\n                </button>\r\n                <button>\r\n                  <a href=\"#\">Try for free</a>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"intro__video\">\r\n              <div class=\"intro__video-blur\">\r\n                <div class=\"intro__video-content\">\r\n                  <a href=\"##\">\r\n                    <svg class=\"icon\">\r\n                      <use xlink:href=\"img/sprite.svg#play-arrow\"></use>\r\n                    </svg>\r\n                  </a>\r\n                  <h4>Watch the video</h4>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </header>\r\n\r\n    <section class=\"project-tool\">\r\n      <div class=\"container\">\r\n        <div class=\"section-header\">\r\n          <h1>Easy & Useful</h1>\r\n          <h2>Project Management Tool</h2>\r\n          <p>\r\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r\n            ad minim veniam, quis nostrud\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"project-tool__content\">\r\n          <div class=\"project-tool__element\">\r\n            <div class=\"icon\">\r\n              <svg>\r\n                <use xlink:href=\"img/sprite.svg#calendar\"></use>\r\n              </svg>\r\n            </div>\r\n            <h3>Title Goes Here</h3>\r\n            <p>\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n              eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n            </p>\r\n          </div>\r\n          <div class=\"project-tool__element\">\r\n            <img src=\"img/person.png\" alt=\"\" class=\"icon\" />\r\n\r\n            <h3>Title Goes Here</h3>\r\n            <p>\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n              eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n            </p>\r\n          </div>\r\n          <div class=\"project-tool__element\">\r\n            <img src=\"img/person-2.png\" alt=\"\" class=\"icon\" />\r\n            <h3>Title Goes Here</h3>\r\n            <p>\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n              eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"project-tool__button\">\r\n          <button>\r\n            <a href=\"#\" class=\"get-started-btn\">Get started</a>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <div class=\"stats\">\r\n      <div class=\"container\">\r\n        <div class=\"stats__inner\">\r\n          <div class=\"stats__item\">\r\n            <div class=\"stats__item-inner\">\r\n              <div class=\"icon-wrap\">\r\n                <div class=\"icon\">\r\n                  <svg>\r\n                    <use xlink:href=\"img/sprite.svg#company\"></use>\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n              <h3>\r\n                12000+ <br />\r\n                Business\r\n              </h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"stats__item\">\r\n            <div class=\"stats__item-inner\">\r\n              <div class=\"icon-wrap\">\r\n                <div class=\"icon\">\r\n                  <svg>\r\n                    <use xlink:href=\"img/sprite.svg#download\"></use>\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n              <h3>\r\n                60000+ <br />\r\n                Downloads\r\n              </h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"stats__item\">\r\n            <div class=\"stats__item-inner\">\r\n              <div class=\"icon-wrap\">\r\n                <div class=\"icon\">\r\n                  <svg>\r\n                    <use xlink:href=\"img/sprite.svg#user\"></use>\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n              <h3>\r\n                30000+ <br />\r\n                Free Installs\r\n              </h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"stats__item\">\r\n            <div class=\"stats__item-inner\">\r\n              <div class=\"icon-wrap\">\r\n                <div class=\"icon\">\r\n                  <svg>\r\n                    <use xlink:href=\"img/sprite.svg#download\"></use>\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n              <h3>\r\n                40000+ <br />\r\n                Pro Users\r\n              </h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <section class=\"services\">\r\n      <div class=\"container\">\r\n        <div class=\"section-header\">\r\n          <h1>Services</h1>\r\n          <p>\r\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n            eiusmod tempor incididunt ut labore et dolore magna\r\n          </p>\r\n        </div>\r\n        <div class=\"services__item\">\r\n          <div class=\"services__item-outer active\">\r\n            <div class=\"services__item-header\">\r\n              <div>\r\n                <img src=\"img/trending_up.png\" alt=\"\" />\r\n                <h4>Statistics</h4>\r\n              </div>\r\n              <a href=\"##\" class=\"services-btn\">\r\n                <svg class=\"icon\">\r\n                  <use xlink:href=\"img/sprite.svg#play-arrow\"></use>\r\n                </svg>\r\n              </a>\r\n            </div>\r\n            <div class=\"services__item-inner\">\r\n              <img src=\"img/services.png\" alt=\"\" />\r\n\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\r\n                enim ad minim veniam, <br /><br />\r\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                commodo consequat. Duis aute irure dolor in reprehenderit in\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"services__item\">\r\n          <div class=\"services__item-outer\">\r\n            <div class=\"services__item-header\">\r\n              <div>\r\n                <svg class=\"icon\">\r\n                  <use xlink:href=\"img/sprite.svg#inbox\"></use>\r\n                </svg>\r\n                <h4>inbox</h4>\r\n              </div>\r\n              <a href=\"##\" class=\"services-btn\">\r\n                <svg class=\"icon\">\r\n                  <use xlink:href=\"img/sprite.svg#play-arrow\"></use>\r\n                </svg>\r\n              </a>\r\n            </div>\r\n            <div class=\"services__item-inner\">\r\n              <img src=\"img/services.png\" alt=\"\" />\r\n\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\r\n                enim ad minim veniam, <br /><br />\r\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                commodo consequat. Duis aute irure dolor in reprehenderit in\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"services__item\">\r\n          <div class=\"services__item-outer\">\r\n            <div class=\"services__item-header\">\r\n              <div>\r\n                <svg class=\"icon\">\r\n                  <use xlink:href=\"img/sprite.svg#team\"></use>\r\n                </svg>\r\n                <h4>team</h4>\r\n              </div>\r\n              <a href=\"##\" class=\"services-btn\">\r\n                <svg class=\"icon\">\r\n                  <use xlink:href=\"img/sprite.svg#play-arrow\"></use>\r\n                </svg>\r\n              </a>\r\n            </div>\r\n            <div class=\"services__item-inner\">\r\n              <img src=\"img/services.png\" alt=\"\" />\r\n\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\r\n                enim ad minim veniam, <br /><br />\r\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                commodo consequat. Duis aute irure dolor in reprehenderit in\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"services__item\">\r\n          <div class=\"services__item-outer\">\r\n            <div class=\"services__item-header\">\r\n              <div>\r\n                <svg class=\"icon\">\r\n                  <use xlink:href=\"img/sprite.svg#settings\"></use>\r\n                </svg>\r\n                <h4>settings</h4>\r\n              </div>\r\n              <a href=\"##\" class=\"services-btn\">\r\n                <svg class=\"icon\">\r\n                  <use xlink:href=\"img/sprite.svg#play-arrow\"></use>\r\n                </svg>\r\n              </a>\r\n            </div>\r\n            <div class=\"services__item-inner\">\r\n              <img src=\"img/services.png\" alt=\"\" />\r\n\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\r\n                enim ad minim veniam, <br /><br />\r\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                commodo consequat. Duis aute irure dolor in reprehenderit in\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"services__item\">\r\n          <div class=\"services__item-outer\">\r\n            <div class=\"services__item-header\">\r\n              <div>\r\n                <svg class=\"icon\">\r\n                  <use xlink:href=\"img/sprite.svg#feed\"></use>\r\n                </svg>\r\n                <h4>feed</h4>\r\n              </div>\r\n              <a href=\"##\" class=\"services-btn\">\r\n                <svg class=\"icon\">\r\n                  <use xlink:href=\"img/sprite.svg#play-arrow\"></use>\r\n                </svg>\r\n              </a>\r\n            </div>\r\n            <div class=\"services__item-inner\">\r\n              <img src=\"img/services.png\" alt=\"\" />\r\n\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\r\n                enim ad minim veniam, <br /><br />\r\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                commodo consequat. Duis aute irure dolor in reprehenderit in\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"reviews\">\r\n      <div class=\"reviews-blur\">\r\n        <div class=\"container\">\r\n          <div class=\"reviews__wrap\">\r\n            <div class=\"reviews-lcolumn\">\r\n              <h2>\r\n                What our customers <br />\r\n                have to say about us.\r\n              </h2>\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n                eiusmod tempor incididunt ut labore et dolore magna\r\n              </p>\r\n              <button>\r\n                <a href=\"##\">Get started</a>\r\n              </button>\r\n            </div>\r\n            <div class=\"reviews-rcolumn\">\r\n              <div class=\"reviews__item\">\r\n                <img src=\"img/reviews-1.png\" alt=\"\" />\r\n                <div class=\"reviews__content\">\r\n                  <div class=\"reviews__content-inner\">\r\n                    <h3 class=\"reviews__content-author\">John Doe</h3>\r\n                    <p class=\"reviews__content-text\">\r\n                      <i>\r\n                        Lorem ipsum dolor sit amet, consectetur adipisicing\r\n                        elit, sed do eiusmod tempor incididunt ut labore et\r\n                        dolore magna aliqua. Ut enim ad minim veniam, quis\r\n                        nostrud exercitation ullamco laboris nisi ut aliquip ex\r\n                        ea\r\n                      </i>\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"reviews__item\">\r\n                <img src=\"img/reviews-2.png\" alt=\"\" />\r\n                <div class=\"reviews__content\">\r\n                  <div class=\"reviews__content-inner\">\r\n                    <h3 class=\"reviews__content-author\">Khalessi</h3>\r\n                    <p class=\"reviews__content-text\">\r\n                      <i>\r\n                        Lorem ipsum dolor sit amet, consectetur adipisicing\r\n                        elit, sed do eiusmod tempor incididunt ut labore et\r\n                        dolore magna aliqua. Ut enim ad minim veniam, quis\r\n                        nostrud exercitation ullamco laboris nisi ut aliquip ex\r\n                        ea\r\n                      </i>\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"reviews__item\">\r\n                <img src=\"img/reviews-1.png\" alt=\"\" />\r\n                <div class=\"reviews__content\">\r\n                  <div class=\"reviews__content-inner\">\r\n                    <h3 class=\"reviews__content-author\">John Doe</h3>\r\n                    <p class=\"reviews__content-text\">\r\n                      <i>\r\n                        Lorem ipsum dolor sit amet, consectetur adipisicing\r\n                        elit, sed do eiusmod tempor incididunt ut labore et\r\n                        dolore magna aliqua. Ut enim ad minim veniam, quis\r\n                        nostrud exercitation ullamco laboris nisi ut aliquip ex\r\n                        ea\r\n                      </i>\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"team\">\r\n      <div class=\"container\">\r\n        <div class=\"section-header\">\r\n          <h1>Our Team</h1>\r\n          <p>\r\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n            eiusmod tempor incididunt ut labore et dolore magna\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"team__slider\">\r\n          <div class=\"team__slider-item team-1\">\r\n            <a href=\"##\">\r\n              <img src=\"img/team-member.png\" alt=\"\" />\r\n            </a>\r\n          </div>\r\n          <div class=\"team__slider-item team-2 active\">\r\n            <a href=\"##\">\r\n              <img src=\"img/team-member.png\" alt=\"\" />\r\n            </a>\r\n          </div>\r\n          <div class=\"team__slider-item team-3\">\r\n            <a href=\"##\">\r\n              <img src=\"img/team-member.png\" alt=\"\" />\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"team__resume\">\r\n          <div class=\"team__resume-item team-1 text-hide\">\r\n            <h3>Sophie Turner1</h3>\r\n            <p>\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n              eiusmod tempor incididunt ut labore et dolore magnaLorem ipsum\r\n              dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n              tempor incididunt\r\n            </p>\r\n            <div class=\"team__social\">\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#twitter\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#facebook\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#linkedin\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#social-ball\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#behance\"></use>\r\n                </svg>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"team__resume-item team-2\">\r\n            <h3>Sophie Turner2</h3>\r\n            <p>\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n              eiusmod tempor incididunt ut labore et dolore magnaLorem ipsum\r\n              dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n              tempor incididunt\r\n            </p>\r\n            <div class=\"team__social\">\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#twitter\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#facebook\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#linkedin\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#social-ball\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#behance\"></use>\r\n                </svg>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"team__resume-item team-3 text-hide\">\r\n            <h3>Sophie Turner3</h3>\r\n            <p>\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n              eiusmod tempor incididunt ut labore et dolore magnaLorem ipsum\r\n              dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n              tempor incididunt\r\n            </p>\r\n            <div class=\"team__social\">\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#twitter\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#facebook\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#linkedin\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#social-ball\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#behance\"></use>\r\n                </svg>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"contact\">\r\n      <div class=\"container\">\r\n        <div class=\"section-header\">\r\n          <h1>Contact Us</h1>\r\n          <p>\r\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n            eiusmod tempor incididunt ut labore et dolore magna\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"contact__form\">\r\n          <form name=\"contact-us\" action=\"POST\" action=\"#\">\r\n            <div class=\"contact__form-row row-1\">\r\n              <input type=\"text\" placeholder=\"First Name\" />\r\n              <input type=\"text\" placeholder=\"Last Name\" />\r\n            </div>\r\n            <div class=\"contact__form-row row-2\">\r\n              <input type=\"email\" placeholder=\"Email\" />\r\n              <input type=\"number\" placeholder=\"Phone\" />\r\n            </div>\r\n            <div class=\"contact__form-row row-3\">\r\n              <textarea type=\"text\" placeholder=\"Message\"></textarea>\r\n            </div>\r\n            <div class=\"contact__form-btns\">\r\n              <div class=\"checkbox\">\r\n                <input type=\"checkbox\" />\r\n                <span>subscribe to the newsletter</span>\r\n              </div>\r\n              <button>\r\n                <a href=\"##\">Send</a>\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <footer class=\"footer\">\r\n      <div class=\"container\">\r\n        <div class=\"footer__wrap\">\r\n          <div class=\"footer__wrap-row\">\r\n            <div class=\"logo\">\r\n              <img src=\"img/logo.png\" alt=\"\" />\r\n              <h3>Dart<br /><b>service manager</b></h3>\r\n            </div>\r\n            <div class=\"footer__nav\">\r\n              <a href=\"##\">Home</a>\r\n              <a href=\"##\">Service</a>\r\n              <a href=\"##\">Extension</a>\r\n              <a href=\"##\">Pricing</a>\r\n              <a href=\"##\">Help</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"footer__wrap-row\">\r\n            <div class=\"footer__links\">\r\n              <a href=\"##\">Privecy Policy</a>\r\n              <div class=\"circle\"></div>\r\n              <a href=\"##\">About Us</a>\r\n              <div class=\"circle\"></div>\r\n              <a href=\"##\">About Us</a>\r\n            </div>\r\n            <div class=\"footer__icons\">\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#twitter\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#facebook\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#linkedin\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#social-ball\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"##\">\r\n                <svg>\r\n                  <use xlink:href=\"img/sprite.svg#behance\"></use>\r\n                </svg>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </body>\r\n</html>\r\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_2__);




if (true) {
  __webpack_require__(/*! ./index.html */ "./src/index.html");
} // <------ Services START ------>


jquery__WEBPACK_IMPORTED_MODULE_1__(".services-btn").click(function (e, e1) {
  e = jquery__WEBPACK_IMPORTED_MODULE_1__(this).parent().parent().children(".services__item-inner");
  e1 = jquery__WEBPACK_IMPORTED_MODULE_1__(".services__item-outer.active");

  if (!e.is(':visible')) {
    jquery__WEBPACK_IMPORTED_MODULE_1__(".services__item-inner").slideUp();
    e1.children(".services__item-inner").slideUp(400, function () {
      e1.removeClass("active");
    });
    e.slideDown();
    e.attr('style', 'display: flex;');
    e.parent().addClass("active");
  } else {
    e.slideToggle();
    e.parent().toggleClass("active");
  }
}); // <------ Services START ------>

jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
  // <------ Slick slider reviews START ------>
  jquery__WEBPACK_IMPORTED_MODULE_1__('.reviews-rcolumn').slick({
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2
  }); // <------ Slick slider reviews END ------>
  // <------ Team slider START ------>

  jquery__WEBPACK_IMPORTED_MODULE_1__(".team__slider-item").on('click', function (elem) {
    elem = elem.currentTarget;
    var classArray = elem.className.split(' ');

    if (!classArray.includes('active')) {
      jquery__WEBPACK_IMPORTED_MODULE_1__(".team__slider-item").removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_1__(this).addClass('active');
    }

    var index = elem.className.split(' ')[1];
    var text = jquery__WEBPACK_IMPORTED_MODULE_1__(".team__resume .".concat(index));

    if (!text.is(':visible')) {
      jquery__WEBPACK_IMPORTED_MODULE_1__(".team__resume-item").slideUp(0);
      text.slideDown(0);
    }
  }); // <------ Team slider END ------>
  // <------ Burger START ------>

  jquery__WEBPACK_IMPORTED_MODULE_1__('.mobile__burger').on('click', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_1__('.mobile__burger, .mobile__menu').toggleClass('active-nav');
    jquery__WEBPACK_IMPORTED_MODULE_1__('body').toggleClass('lock');
  }); // <------ Burger END ------>
});

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map