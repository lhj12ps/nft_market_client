"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/counter",{

/***/ "./pages/counter/index.jsx":
/*!*********************************!*\
  !*** ./pages/counter/index.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_common_responsive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/components/common/responsive */ \"./src/components/common/responsive.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/reducers */ \"./src/reducers/index.js\");\n/* harmony import */ var _src_reducers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_reducers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/hancoco/Desktop/myFile/react_query/next/pages/counter/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Counter = function Counter() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  var counter = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state;\n  }); // 전역상태에 있는 state를 가져와서 counter에 담는 코드\n\n  console.log();\n\n  var onUp = function onUp() {\n    dispatch((0,_src_reducers__WEBPACK_IMPORTED_MODULE_2__.up)());\n  };\n\n  var onDown = function onDown() {\n    dispatch((0,_src_reducers__WEBPACK_IMPORTED_MODULE_2__.down)());\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_src_components_common_responsive__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n        children: [\"Counter : \", counter.number]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        onClick: onUp,\n        children: \"+1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        onClick: onDown,\n        children: \"-1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h4\", {\n        children: \"\\uAC1C\\uBCC4\\uD398\\uC774\\uC9C0 \\uBCC4\\uC810\\uC8FC\\uAE30\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Counter, \"gthwM6sqboLtlTmr2wLRFX51eJQ=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector];\n});\n\n_c = Counter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Counter);\n\nvar _c;\n\n$RefreshReg$(_c, \"Counter\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3VudGVyL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07RUFBQTs7RUFDcEIsSUFBTUMsUUFBUSxHQUFHSix3REFBVyxFQUE1QjtFQUNBLElBQU1LLE9BQU8sR0FBR04sd0RBQVcsQ0FBQyxVQUFDTyxLQUFEO0lBQUEsT0FBV0EsS0FBWDtFQUFBLENBQUQsQ0FBM0IsQ0FGb0IsQ0FFMkI7O0VBQy9DQyxPQUFPLENBQUNDLEdBQVI7O0VBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtJQUNqQkwsUUFBUSxDQUFDSCxpREFBRSxFQUFILENBQVI7RUFDRCxDQUZEOztFQUlBLElBQU1TLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07SUFDbkJOLFFBQVEsQ0FBQ0YsbURBQUksRUFBTCxDQUFSO0VBQ0QsQ0FGRDs7RUFJQSxvQkFDRTtJQUFBLHVCQUNFLDhEQUFDLHlFQUFEO01BQUEsd0JBQ0U7UUFBQSx5QkFBZUcsT0FBTyxDQUFDTSxNQUF2QjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FERixlQUVFO1FBQVEsT0FBTyxFQUFFRixJQUFqQjtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUZGLGVBR0U7UUFBUSxPQUFPLEVBQUVDLE1BQWpCO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBSEYsZUFJRTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUpGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGLGlCQURGO0FBVUQsQ0F2QkQ7O0dBQU1QO1VBQ2FILHNEQUNERDs7O0tBRlpJO0FBeUJOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvdW50ZXIvaW5kZXguanN4P2E1MmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3BvbnNpdmUgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yZXNwb25zaXZlXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHt1cCxkb3dufSBmcm9tIFwiLi4vLi4vc3JjL3JlZHVjZXJzXCJcblxuY29uc3QgQ291bnRlciA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIGNvbnN0IGNvdW50ZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlKTsgLy8g7KCE7Jet7IOB7YOc7JeQIOyeiOuKlCBzdGF0ZeulvCDqsIDsoLjsmYDshJwgY291bnRlcuyXkCDri7TripQg7L2U65OcXG4gIGNvbnNvbGUubG9nKClcbiAgXG4gIGNvbnN0IG9uVXAgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2godXAoKSlcbiAgfVxuICBcbiAgY29uc3Qgb25Eb3duID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKGRvd24oKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxSZXNwb25zaXZlPlxuICAgICAgICA8aDM+Q291bnRlciA6IHtjb3VudGVyLm51bWJlcn08L2gzPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uVXB9PisxPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25Eb3dufT4tMTwvYnV0dG9uPlxuICAgICAgICA8aDQ+6rCc67OE7Y6Y7J207KeAIOuzhOygkOyjvOq4sDwvaDQ+XG4gICAgICA8L1Jlc3BvbnNpdmU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyO1xuIl0sIm5hbWVzIjpbIlJlc3BvbnNpdmUiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwidXAiLCJkb3duIiwiQ291bnRlciIsImRpc3BhdGNoIiwiY291bnRlciIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsIm9uVXAiLCJvbkRvd24iLCJudW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/counter/index.jsx\n"));

/***/ })

});