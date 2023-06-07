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

/***/ "./src/pages/App.js":
/*!**************************!*\
  !*** ./src/pages/App.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _js_utils_cssUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/utils/cssUtils */ \"./src/js/utils/cssUtils.js\");\n/* harmony import */ var _js_utils_localStorageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/utils/localStorageUtils */ \"./src/js/utils/localStorageUtils.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import \"../../styles/Home.css\";\nfunction App(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var selectedVendor = \"McDonalds\";\n    var stateVendor = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.selectedVendor;\n    });\n    var localStorageVendor = JSON.parse(_js_utils_localStorageUtils__WEBPACK_IMPORTED_MODULE_3__.localStorageSelectedVendor);\n    if (stateVendor) {\n        selectedVendor = stateVendor;\n    }\n    if (localStorageVendor) {\n        selectedVendor = localStorageVendor;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"fixed-top bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"nav nav-underline py-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {\n                                    to: \"/category/\".concat(selectedVendor),\n                                    className: _js_utils_cssUtils__WEBPACK_IMPORTED_MODULE_2__.calculateNavLinkClass,\n                                    children: \"Shop\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SheCodesHomework\\\\food-delivery-app\\\\src\\\\pages\\\\App.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SheCodesHomework\\\\food-delivery-app\\\\src\\\\pages\\\\App.js\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item px-3 border-start\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {\n                                    to: \"/cart\",\n                                    className: _js_utils_cssUtils__WEBPACK_IMPORTED_MODULE_2__.calculateNavLinkClass,\n                                    children: \"Shopping Cart\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SheCodesHomework\\\\food-delivery-app\\\\src\\\\pages\\\\App.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SheCodesHomework\\\\food-delivery-app\\\\src\\\\pages\\\\App.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\SheCodesHomework\\\\food-delivery-app\\\\src\\\\pages\\\\App.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\SheCodesHomework\\\\food-delivery-app\\\\src\\\\pages\\\\App.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\SheCodesHomework\\\\food-delivery-app\\\\src\\\\pages\\\\App.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__._)({}, pageProps), void 0, false, {\n                        fileName: \"D:\\\\SheCodesHomework\\\\food-delivery-app\\\\src\\\\pages\\\\App.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\SheCodesHomework\\\\food-delivery-app\\\\src\\\\pages\\\\App.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\SheCodesHomework\\\\food-delivery-app\\\\src\\\\pages\\\\App.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\SheCodesHomework\\\\food-delivery-app\\\\src\\\\pages\\\\App.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"bvlv/UOsLzSJEjCLMRAJCmQWZ9Q=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ1M7QUFDVTtBQUNjO0FBQzNFLGtDQUFrQztBQUVuQixTQUFTSyxJQUFJLEtBQXdCO1FBQXRCQyxZQUFGLE1BQUVBLFdBQVdDLFlBQWIsTUFBYUE7O0lBQ3ZDLElBQUlDLGlCQUFpQjtJQUNyQixJQUFJQyxjQUFjVCx3REFBV0EsQ0FBQyxTQUFDVTtlQUFVQSxNQUFNRjs7SUFDL0MsSUFBSUcscUJBQXFCQyxLQUFLQyxNQUFNVCxtRkFBMEJBO0lBRTlELElBQUlLLGFBQWE7UUFDZkQsaUJBQWlCQztJQUNuQjtJQUVBLElBQUlFLG9CQUFvQjtRQUN0QkgsaUJBQWlCRztJQUNuQjtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRTt3QkFBR0YsV0FBVTs7MENBQ1osOERBQUNHO2dDQUFHSCxXQUFVOzBDQUNaLDRFQUFDZCxxREFBT0E7b0NBQ05rQixJQUFJLGFBQTRCLE9BQWZYO29DQUNqQk8sV0FBV1oscUVBQXFCQTs4Q0FDakM7Ozs7Ozs7Ozs7OzBDQUlILDhEQUFDZTtnQ0FBR0gsV0FBVTswQ0FDWiw0RUFBQ2QscURBQU9BO29DQUFDa0IsSUFBRztvQ0FBUUosV0FBV1oscUVBQXFCQTs4Q0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU85RCw4REFBQ1c7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDVCxXQUFBQSw2REFBQUEsS0FBY0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QjtHQXpDd0JGOztRQUVKTCxvREFBV0E7OztLQUZQSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvQXBwLmpzPzYxOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgT3V0bGV0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlTmF2TGlua0NsYXNzIH0gZnJvbSBcIi4uL2pzL3V0aWxzL2Nzc1V0aWxzXCI7XHJcbmltcG9ydCB7IGxvY2FsU3RvcmFnZVNlbGVjdGVkVmVuZG9yIH0gZnJvbSBcIi4uL2pzL3V0aWxzL2xvY2FsU3RvcmFnZVV0aWxzXCI7XHJcbi8vIGltcG9ydCBcIi4uLy4uL3N0eWxlcy9Ib21lLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGxldCBzZWxlY3RlZFZlbmRvciA9IFwiTWNEb25hbGRzXCI7XHJcbiAgbGV0IHN0YXRlVmVuZG9yID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zZWxlY3RlZFZlbmRvcik7XHJcbiAgbGV0IGxvY2FsU3RvcmFnZVZlbmRvciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlU2VsZWN0ZWRWZW5kb3IpO1xyXG5cclxuICBpZiAoc3RhdGVWZW5kb3IpIHtcclxuICAgIHNlbGVjdGVkVmVuZG9yID0gc3RhdGVWZW5kb3I7XHJcbiAgfVxyXG5cclxuICBpZiAobG9jYWxTdG9yYWdlVmVuZG9yKSB7XHJcbiAgICBzZWxlY3RlZFZlbmRvciA9IGxvY2FsU3RvcmFnZVZlbmRvcjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZpeGVkLXRvcCBiZy13aGl0ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi11bmRlcmxpbmUgcHktMlwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89e2AvY2F0ZWdvcnkvJHtzZWxlY3RlZFZlbmRvcn1gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjYWxjdWxhdGVOYXZMaW5rQ2xhc3N9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2hvcFxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHB4LTMgYm9yZGVyLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvY2FydFwiIGNsYXNzTmFtZT17Y2FsY3VsYXRlTmF2TGlua0NsYXNzfT5cclxuICAgICAgICAgICAgICAgIFNob3BwaW5nIENhcnRcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsIk5hdkxpbmsiLCJPdXRsZXQiLCJjYWxjdWxhdGVOYXZMaW5rQ2xhc3MiLCJsb2NhbFN0b3JhZ2VTZWxlY3RlZFZlbmRvciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlbGVjdGVkVmVuZG9yIiwic3RhdGVWZW5kb3IiLCJzdGF0ZSIsImxvY2FsU3RvcmFnZVZlbmRvciIsIkpTT04iLCJwYXJzZSIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsInVsIiwibGkiLCJ0byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/App.js\n"));

/***/ })

});