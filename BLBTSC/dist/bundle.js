/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./DZ/index.ts":
/*!*********************!*\
  !*** ./DZ/index.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// index.ts\nconst users_1 = __webpack_require__(/*! ./users */ \"./DZ/users.ts\");\nconst userinfo_1 = __webpack_require__(/*! ./userinfo */ \"./DZ/userinfo.ts\");\nfunction getUsersJobPositions(users, userInfo) {\n    const updatedUsersArray = [];\n    users.forEach(user => {\n        const userInformation = userInfo.find(info => info.userid === user.userid);\n        if (userInformation) {\n            updatedUsersArray.push({\n                name: user.name,\n                position: userInformation.organization.position,\n                age: userInformation.age,\n                gender: user.gender\n            });\n        }\n    });\n    return updatedUsersArray;\n}\nconst usersPositions = getUsersJobPositions(users_1.usersArray, userinfo_1.UsersInfoArray);\nconsole.log('userPositions', usersPositions);\n\n\n//# sourceURL=webpack://typescrypt/./DZ/index.ts?");

/***/ }),

/***/ "./DZ/userinfo.ts":
/*!************************!*\
  !*** ./DZ/userinfo.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UsersInfoArray = void 0;\nexports.UsersInfoArray = [\n    {\n        userid: '127e4567-e89b-12d3-a458-426614174000',\n        name: 'John',\n        birthdate: '1982-02-17T21:00:00.000Z',\n        age: 40,\n        organization: {\n            name: 'Amazon',\n            position: 'General manager'\n        }\n    },\n    {\n        userid: '127e4567-e89a-12f3-a458-327395154000',\n        name: 'Anna',\n        birthdate: '1988-02-17T21:00:00.000Z',\n        age: 34,\n        organization: {\n            name: 'Amazon',\n            position: 'Manager'\n        }\n    }\n];\n\n\n//# sourceURL=webpack://typescrypt/./DZ/userinfo.ts?");

/***/ }),

/***/ "./DZ/users.ts":
/*!*********************!*\
  !*** ./DZ/users.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.usersArray = void 0;\n//variables\nexports.usersArray = [\n    {\n        userid: '127e4567-e89b-12d3-a458-426614174000',\n        name: 'John',\n        gender: 'man'\n    },\n    {\n        userid: '127e4567-e89a-12f3-a458-327395154000',\n        name: 'Anna',\n        gender: 'woman'\n    }\n];\n\n\n//# sourceURL=webpack://typescrypt/./DZ/users.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./DZ/index.ts");
/******/ 	
/******/ })()
;