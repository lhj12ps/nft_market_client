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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_common_responsive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/components/common/responsive */ \"./src/components/common/responsive.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/hancoco/Desktop/myFile/react_query/next/pages/counter/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n // import {UP,DOWN} from \"../../src/reducers\"\n\n\n\n\nvar Counter = function Counter() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state;\n  }),\n      counter = _useSelector.counter; // 전역상태에 있는 state를 가져와서 counter에 담는 코드\n\n\n  var onUp = function onUp() {\n    dispatch({\n      type: \"UP\"\n    });\n  };\n\n  var onDown = function onDown() {\n    dispatch({\n      type: \"DOWN\"\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_src_components_common_responsive__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n        children: [\"Counter : \", counter.number]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        onClick: onUp,\n        children: \"+1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        onClick: onDown,\n        children: \"-1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h4\", {\n        children: \"\\uAC1C\\uBCC4\\uD398\\uC774\\uC9C0 \\uBCC4\\uC810\\uC8FC\\uAE30\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Counter, \"mYiMcrgkFgGAgQRxcMVkuDGanlo=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector];\n});\n\n_c = Counter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Counter);\n\nvar _c;\n\n$RefreshReg$(_c, \"Counter\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3VudGVyL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtDQUVBOzs7OztBQUVBLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07RUFBQTs7RUFDcEIsSUFBTUMsUUFBUSxHQUFHRix3REFBVyxFQUE1Qjs7RUFDQSxtQkFBa0JELHdEQUFXLENBQUMsVUFBQ0ksS0FBRDtJQUFBLE9BQVdBLEtBQVg7RUFBQSxDQUFELENBQTdCO0VBQUEsSUFBT0MsT0FBUCxnQkFBT0EsT0FBUCxDQUZvQixDQUU2Qjs7O0VBRWpELElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07SUFDakJILFFBQVEsQ0FBQztNQUFDSSxJQUFJLEVBQUM7SUFBTixDQUFELENBQVI7RUFDRCxDQUZEOztFQUlBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07SUFDbkJMLFFBQVEsQ0FBQztNQUFDSSxJQUFJLEVBQUM7SUFBTixDQUFELENBQVI7RUFDRCxDQUZEOztFQUlBLG9CQUNFO0lBQUEsdUJBQ0UsOERBQUMseUVBQUQ7TUFBQSx3QkFDRTtRQUFBLHlCQUFlRixPQUFPLENBQUNJLE1BQXZCO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURGLGVBRUU7UUFBUSxPQUFPLEVBQUVILElBQWpCO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBRkYsZUFHRTtRQUFRLE9BQU8sRUFBRUUsTUFBakI7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FIRixlQUlFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBSkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREYsaUJBREY7QUFVRCxDQXRCRDs7R0FBTU47VUFDYUQsc0RBQ0NEOzs7S0FGZEU7QUF3Qk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY291bnRlci9pbmRleC5qc3g/YTUyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzcG9uc2l2ZSBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3Jlc3BvbnNpdmVcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG4vLyBpbXBvcnQge1VQLERPV059IGZyb20gXCIuLi8uLi9zcmMvcmVkdWNlcnNcIlxuXG5jb25zdCBDb3VudGVyID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc3Qge2NvdW50ZXJ9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSk7IC8vIOyghOyXreyDge2DnOyXkCDsnojripQgc3RhdGXrpbwg6rCA7KC47JmA7IScIGNvdW50ZXLsl5Ag64u064qUIOy9lOuTnFxuICBcbiAgY29uc3Qgb25VcCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7dHlwZTpcIlVQXCJ9KVxuICB9XG4gIFxuICBjb25zdCBvbkRvd24gPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe3R5cGU6XCJET1dOXCJ9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFJlc3BvbnNpdmU+XG4gICAgICAgIDxoMz5Db3VudGVyIDoge2NvdW50ZXIubnVtYmVyfTwvaDM+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25VcH0+KzE8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkRvd259Pi0xPC9idXR0b24+XG4gICAgICAgIDxoND7qsJzrs4TtjpjsnbTsp4Ag67OE7KCQ7KO86riwPC9oND5cbiAgICAgIDwvUmVzcG9uc2l2ZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXI7XG4iXSwibmFtZXMiOlsiUmVzcG9uc2l2ZSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJDb3VudGVyIiwiZGlzcGF0Y2giLCJzdGF0ZSIsImNvdW50ZXIiLCJvblVwIiwidHlwZSIsIm9uRG93biIsIm51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/counter/index.jsx\n"));

/***/ })

});