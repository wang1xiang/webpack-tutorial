/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_14mini_css_extract_plugin"] = self["webpackChunk_14mini_css_extract_plugin"] || []).push([["components"],{

/***/ "./src/album/album.css":
/*!*****************************!*\
  !*** ./src/album/album.css ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://14mini-css-extract-plugin/./src/album/album.css?");

/***/ }),

/***/ "./src/common/global.css":
/*!*******************************!*\
  !*** ./src/common/global.css ***!
  \*******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://14mini-css-extract-plugin/./src/common/global.css?");

/***/ }),

/***/ "./src/posts/posts.css":
/*!*****************************!*\
  !*** ./src/posts/posts.css ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://14mini-css-extract-plugin/./src/posts/posts.css?");

/***/ }),

/***/ "./src/album/album.js":
/*!****************************!*\
  !*** ./src/album/album.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _common_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/fetch */ \"./src/common/fetch.js\");\n/* harmony import */ var _common_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/global.css */ \"./src/common/global.css\");\n/* harmony import */ var _album_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album.css */ \"./src/album/album.css\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  const album = document.createElement('div')\r\n  album.className = 'album'\r\n\r\n  album.innerHTML = '<h2>Albums</h2>'\r\n\r\n  ;(0,_common_fetch__WEBPACK_IMPORTED_MODULE_0__.default)('/photos?albumId=1').then(data => {\r\n    data.forEach(item => {\r\n      const section = document.createElement('section')\r\n      section.className = 'photo'\r\n\r\n      const img = document.createElement('img')\r\n      img.src = item.thumbnailUrl\r\n      section.appendChild(img)\r\n\r\n      const h3 = document.createElement('h3')\r\n      h3.textContent = item.title\r\n      section.appendChild(h3)\r\n\r\n      album.appendChild(section)\r\n    })\r\n  })\r\n\r\n  return album\r\n});\r\n\n\n//# sourceURL=webpack://14mini-css-extract-plugin/./src/album/album.js?");

/***/ }),

/***/ "./src/common/fetch.js":
/*!*****************************!*\
  !*** ./src/common/fetch.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endpoint => {\r\n  return fetch(`https://jsonplaceholder.typicode.com${endpoint}`)\r\n    .then(response => response.json())\r\n});\r\n\n\n//# sourceURL=webpack://14mini-css-extract-plugin/./src/common/fetch.js?");

/***/ }),

/***/ "./src/posts/posts.js":
/*!****************************!*\
  !*** ./src/posts/posts.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _common_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/fetch */ \"./src/common/fetch.js\");\n/* harmony import */ var _common_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/global.css */ \"./src/common/global.css\");\n/* harmony import */ var _posts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.css */ \"./src/posts/posts.css\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  const posts = document.createElement('div')\r\n  posts.className = 'posts'\r\n\r\n  posts.innerHTML = '<h2>Posts</h2>'\r\n\r\n  ;(0,_common_fetch__WEBPACK_IMPORTED_MODULE_0__.default)('/posts').then(data => {\r\n    data.forEach(item => {\r\n      const article = document.createElement('article')\r\n      article.className = 'post'\r\n\r\n      const h3 = document.createElement('h3')\r\n      h3.textContent = item.title\r\n      article.appendChild(h3)\r\n\r\n      const paragraph = document.createElement('p')\r\n      paragraph.textContent = item.body\r\n      article.appendChild(paragraph)\r\n\r\n      posts.appendChild(article)\r\n    })\r\n  })\r\n\r\n  return posts\r\n});\r\n\n\n//# sourceURL=webpack://14mini-css-extract-plugin/./src/posts/posts.js?");

/***/ })

}]);