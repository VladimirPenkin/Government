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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/application/accept.js":
/*!***********************************!*\
  !*** ./src/application/accept.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _law__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./law */ \"./src/application/law.js\");\n\r\n\r\nlet acceptLaw = document.querySelector(\"#accept\").addEventListener(\"click\", () => {\r\n\r\n    let idLaw = document.querySelector(\"#idLaw\").value;\r\n    let nameLaw = document.querySelector(\"#nameLaw\").value;\r\n    let textLaw = document.querySelector(\"#textLaw\").value;\r\n\r\n    _law__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add({ id: idLaw, name: nameLaw, text: textLaw });\r\n\r\n    document.querySelector(\"#idLaw\").value = \"\";\r\n    document.querySelector(\"#nameLaw\").value = \"\";\r\n    document.querySelector(\"#textLaw\").value = \"\";\r\n\r\n});\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (acceptLaw);\n\n//# sourceURL=webpack:///./src/application/accept.js?");

/***/ }),

/***/ "./src/application/event.js":
/*!**********************************!*\
  !*** ./src/application/event.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _law__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./law */ \"./src/application/law.js\");\n\r\n\r\nlet makeEvent = document.querySelector(\"#event\").addEventListener(\"click\", () => {\r\n    _law__WEBPACK_IMPORTED_MODULE_0__[\"default\"].spendHoliday();\r\n    alert(`Budget after party: ${_law__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBudget()}\\nSatisfactions after party: ${_law__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllSatisfactions()}`\r\n    );\r\n});\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeEvent);\n\n//# sourceURL=webpack:///./src/application/event.js?");

/***/ }),

/***/ "./src/application/law.js":
/*!********************************!*\
  !*** ./src/application/law.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst _data = {\r\n    laws: [],\r\n    budget: 1000000,\r\n    citizensSatisfactions: 0\r\n};\r\n\r\nconst Store = {\r\n    add: item => {\r\n        _data.laws.push(item);\r\n        _data.citizensSatisfactions += -10;\r\n    },\r\n    getAllLaw: () => [..._data.laws],\r\n    getAllSatisfactions: () => _data.citizensSatisfactions,\r\n    getBudget: () => _data.budget,\r\n    spendHoliday: () => {\r\n        _data.budget += -50000;\r\n        _data.citizensSatisfactions += +5;\r\n    }\r\n};\r\n\r\nObject.freeze(Store);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Store);\r\n\n\n//# sourceURL=webpack:///./src/application/law.js?");

/***/ }),

/***/ "./src/application/satisfaction.js":
/*!*****************************************!*\
  !*** ./src/application/satisfaction.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _law__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./law */ \"./src/application/law.js\");\n\r\n\r\nlet showSatisfactions = document.querySelector(\"#satisfaction\").addEventListener(\"click\", () => {\r\n    alert(`Satisfactions after accepted laws: ${_law__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllSatisfactions()}`\r\n    );\r\n\r\n});\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (showSatisfactions);\n\n//# sourceURL=webpack:///./src/application/satisfaction.js?");

/***/ }),

/***/ "./src/application/tableLaw.js":
/*!*************************************!*\
  !*** ./src/application/tableLaw.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _law__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./law */ \"./src/application/law.js\");\n\r\n\r\nlet showAllLaws = document.querySelector(\"#laws\").addEventListener(\"click\", () => {\r\n\r\n    let lawObj = _law__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllLaw();\r\n\r\n    document.querySelector(\"#conteiner\").innerHTML = \"\";\r\n    let table = document.createElement(\"table\");\r\n\r\n    table.innerHTML +=\r\n        `<tr><td>№</td><td>Name</td><td>Text</td></tr>`\r\n    for (let i = 0; i < lawObj.length; i++) {\r\n        table.innerHTML +=\r\n            `<tr><td>${lawObj[i].id}</td><td>${lawObj[i].name}</td><td>${lawObj[i].text}</td></tr>`\r\n    };\r\n\r\n    document.querySelector(\"#conteiner\").prepend(table);\r\n\r\n})\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (showAllLaws);\n\n//# sourceURL=webpack:///./src/application/tableLaw.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _application_accept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application/accept */ \"./src/application/accept.js\");\n/* harmony import */ var _application_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application/event */ \"./src/application/event.js\");\n/* harmony import */ var _application_tableLaw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application/tableLaw */ \"./src/application/tableLaw.js\");\n/* harmony import */ var _application_satisfaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application/satisfaction */ \"./src/application/satisfaction.js\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\nObject(_application_accept__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nObject(_application_event__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nObject(_application_tableLaw__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\nObject(_application_satisfaction__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });