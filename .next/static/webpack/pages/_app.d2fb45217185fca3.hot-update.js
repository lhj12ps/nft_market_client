"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/reducers/counter.js":
/*!*********************************!*\
  !*** ./src/reducers/counter.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/interopRequireDefault.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.UP = exports.DOWN = void 0;\n\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\"));\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nvar initialState = {\n  number: 0\n};\nvar UP = \"COUNTER/Up\";\nexports.UP = UP;\nvar DOWN = \"COUNTER/Down\";\nexports.DOWN = DOWN;\n\nvar counter = function counter() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var payload = action.payload;\n  console.log('payload: ', payload);\n\n  switch (action.type) {\n    case UP:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        number: state.number + 1\n      });\n\n    case DOWN:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        number: state.number - 1\n      });\n\n    default:\n      return state;\n  }\n};\n\nmodule.exports = {\n  counter: counter\n};\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvY291bnRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUc7RUFDbkJDLE1BQU0sRUFBQztBQURZLENBQXJCO0FBSU8sSUFBTUMsRUFBRSxHQUFHLFlBQVg7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHLGNBQWI7OztBQUVQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0VBQUEsSUFBakNDLEtBQWlDLHVFQUF6QkwsWUFBeUI7RUFBQSxJQUFYTSxNQUFXO0VBQ2hELElBQU9DLE9BQVAsR0FBa0JELE1BQWxCLENBQU9DLE9BQVA7RUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF3QkYsT0FBeEI7O0VBQ0EsUUFBT0QsTUFBTSxDQUFDSSxJQUFkO0lBQ0UsS0FBS1IsRUFBTDtNQUNFLHVDQUNLRyxLQURMO1FBRUVKLE1BQU0sRUFBQ0ksS0FBSyxDQUFDSixNQUFOLEdBQWE7TUFGdEI7O0lBSUYsS0FBS0UsSUFBTDtNQUNFLHVDQUNLRSxLQURMO1FBRUVKLE1BQU0sRUFBQ0ksS0FBSyxDQUFDSixNQUFOLEdBQWE7TUFGdEI7O0lBSUY7TUFDRSxPQUFPSSxLQUFQO0VBWko7QUFjRCxDQWpCRDs7QUFtQkFNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtFQUFFUixPQUFPLEVBQVBBO0FBQUYsQ0FBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL2NvdW50ZXIuanM/MzQ5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG51bWJlcjowLFxufTtcblxuZXhwb3J0IGNvbnN0IFVQID0gXCJDT1VOVEVSL1VwXCJcbmV4cG9ydCBjb25zdCBET1dOID0gXCJDT1VOVEVSL0Rvd25cIlxuXG5jb25zdCBjb3VudGVyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3Qge3BheWxvYWR9ID0gYWN0aW9uXG4gIGNvbnNvbGUubG9nKCdwYXlsb2FkOiAnLHBheWxvYWQpXG4gIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSBVUDpcbiAgICAgIHJldHVybntcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG51bWJlcjpzdGF0ZS5udW1iZXIrMVxuICAgICAgfVxuICAgIGNhc2UgRE9XTjpcbiAgICAgIHJldHVybntcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG51bWJlcjpzdGF0ZS5udW1iZXItMVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IGNvdW50ZXIgfTtcbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJudW1iZXIiLCJVUCIsIkRPV04iLCJjb3VudGVyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/reducers/counter.js\n"));

/***/ })

});