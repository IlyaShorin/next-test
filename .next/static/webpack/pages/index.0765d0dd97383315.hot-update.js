"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Content.tsx":
/*!********************************!*\
  !*** ./components/Content.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": function() { return /* binding */ Content; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useStore */ \"./hooks/useStore.ts\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Content_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content.module.css */ \"./components/Content.module.css\");\n/* harmony import */ var _Content_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Content_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Content = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(_c = _s(function Content() {\n    var _this = this;\n    _s();\n    var ref2 = (0,_hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores)(), _notion = ref2.notion, textList = _notion.textList, select = _notion.select;\n    var notion = (0,_hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores)().notion;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        // document.addEventListener('keydown', listener);\n        localStorage.setItem('list', JSON.stringify(textList));\n        ref1.current && ref1.current.focus();\n    // return function () {\n    //   document.removeEventListener('keydown', listener);\n    // };\n    });\n    // const listener = (e: KeyboardEvent) => {\n    //   if (e.key === 'Enter') {\n    //     notion.addTextListItem();\n    //   }\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(function() {});\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Next-test\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            textList.map(function(textElement, index1) {\n                var _this1 = _this;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            onChange: function(e) {\n                                var value = e.target.value;\n                                notion.changeTextListKind(index1, value);\n                            },\n                            defaultValue: textElement.kind,\n                            children: select.map(function(selectElement, index) {\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: selectElement,\n                                    children: selectElement\n                                }, index, false, {\n                                    fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 19\n                                }, _this1));\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, _this),\n                        textElement.kind === 'checkbox' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: textElement.kind,\n                            onChange: function(e) {\n                                return notion.changeCheckboxChecked(index1, e.target.checked);\n                            },\n                            checked: textElement.checked\n                        }, void 0, false, {\n                            fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 15\n                        }, _this) : '',\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: function(e) {\n                                notion.changeTextElementValue(index1, e.target.value);\n                            },\n                            value: textElement.value,\n                            className: (_Content_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                            onKeyDown: function(e) {\n                                if (e.key === 'Enter') {\n                                    notion.addTextListItem(index1);\n                                    if (ref1.current) ref1.current.focus();\n                                }\n                            },\n                            ref: function(ref) {\n                                return console.log(ref);\n                            },\n                            id: \"\".concat(textElement.value, \"_\").concat(index1)\n                        }, void 0, false, {\n                            fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, index1, true, {\n                    fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, _this));\n            })\n        ]\n    }, void 0, true));\n}, \"8sonDZQ8uqi51RKtVx71SzDvPv0=\", false, function() {\n    return [\n        _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores,\n        _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores\n    ];\n})), \"8sonDZQ8uqi51RKtVx71SzDvPv0=\", false, function() {\n    return [\n        _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores,\n        _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores\n    ];\n});\n_c1 = Content;\nvar _c, _c1;\n$RefreshReg$(_c, \"Content$observer\");\n$RefreshReg$(_c1, \"Content\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLENBQUM7Z0NBQ2pCLEVBQUUsRUFBRUEsQ0FBQyxDQUFDZSxHQUFHLEtBQUssQ0FBTyxRQUFFLENBQUM7b0NBQ3RCckMsTUFBTSxDQUFDc0MsZUFBZSxDQUFDbkIsTUFBSztvQ0FDNUIsRUFBRSxFQUFFaEIsSUFBRyxDQUFDSyxPQUFPLEVBQUVMLElBQUcsQ0FBQ0ssT0FBTyxDQUFDQyxLQUFLO2dDQUNwQyxDQUFDOzRCQUNILENBQUM7NEJBQ0ROLEdBQUcsRUFBRSxRQUFRLENBQVBBLEdBQUc7Z0NBQUtvQyxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDckMsR0FBRzs7NEJBQzdCc0MsRUFBRSxFQUFHLEdBQXVCdEIsTUFBSyxDQUExQkQsV0FBVyxDQUFDSyxLQUFLLEVBQUMsQ0FBQyxJQUFRLE9BQU5KLE1BQUs7Ozs7Ozs7bUJBNUMzQkEsTUFBSzs7Ozs7WUFnRG5CLENBQUM7OztBQUdQLENBQUM7O1FBL0VLM0Isc0RBQVM7UUFDTUEsc0RBQVM7Ozs7UUFEeEJBLHNEQUFTO1FBQ01BLHNEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udGVudC50c3g/NTcwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdG9yZXMgfSBmcm9tICcuLi9ob29rcy91c2VTdG9yZSc7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250ZW50Lm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgQ29udGVudCA9IG9ic2VydmVyKGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IHtcbiAgICBub3Rpb246IHsgdGV4dExpc3QsIHNlbGVjdCB9LFxuICB9ID0gdXNlU3RvcmVzKCk7XG4gIGNvbnN0IHsgbm90aW9uIH0gPSB1c2VTdG9yZXMoKTtcbiAgbGV0IHJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbGlzdGVuZXIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkodGV4dExpc3QpKTtcbiAgICByZWYuY3VycmVudCAmJiByZWYuY3VycmVudC5mb2N1cygpO1xuICAgIC8vIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbGlzdGVuZXIpO1xuICAgIC8vIH07XG4gIH0pO1xuICAvLyBjb25zdCBsaXN0ZW5lciA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gIC8vICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gIC8vICAgICBub3Rpb24uYWRkVGV4dExpc3RJdGVtKCk7XG4gIC8vICAgfVxuICAvLyB9O1xuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge30pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TmV4dC10ZXN0PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0dlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHAnIC8+XG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICB7dGV4dExpc3QubWFwKCh0ZXh0RWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlIGFzXG4gICAgICAgICAgICAgICAgICB8ICd0aXRsZSBoMSdcbiAgICAgICAgICAgICAgICAgIHwgJ3RleHQnXG4gICAgICAgICAgICAgICAgICB8ICdjYWxsb3V0J1xuICAgICAgICAgICAgICAgICAgfCAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgIG5vdGlvbi5jaGFuZ2VUZXh0TGlzdEtpbmQoaW5kZXgsIHZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0ZXh0RWxlbWVudC5raW5kfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2VsZWN0Lm1hcCgoc2VsZWN0RWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17c2VsZWN0RWxlbWVudH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RFbGVtZW50fVxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIHt0ZXh0RWxlbWVudC5raW5kID09PSAnY2hlY2tib3gnID8gKFxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPXt0ZXh0RWxlbWVudC5raW5kfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgIG5vdGlvbi5jaGFuZ2VDaGVja2JveENoZWNrZWQoaW5kZXgsIGUudGFyZ2V0LmNoZWNrZWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RleHRFbGVtZW50LmNoZWNrZWR9XG4gICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgbm90aW9uLmNoYW5nZVRleHRFbGVtZW50VmFsdWUoaW5kZXgsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RleHRFbGVtZW50LnZhbHVlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgICAgbm90aW9uLmFkZFRleHRMaXN0SXRlbShpbmRleCk7XG4gICAgICAgICAgICAgICAgICBpZiAocmVmLmN1cnJlbnQpIHJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZWY9eyhyZWYpID0+IGNvbnNvbGUubG9nKHJlZil9XG4gICAgICAgICAgICAgIGlkPXtgJHt0ZXh0RWxlbWVudC52YWx1ZX1fJHtpbmRleH1gfVxuICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn0pO1xuIl0sIm5hbWVzIjpbInVzZVN0b3JlcyIsIm9ic2VydmVyIiwiSGVhZCIsInVzZUVmZmVjdCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsInN0eWxlcyIsIkNvbnRlbnQiLCJub3Rpb24iLCJ0ZXh0TGlzdCIsInNlbGVjdCIsInJlZiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY3VycmVudCIsImZvY3VzIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1hcCIsInRleHRFbGVtZW50IiwiaW5kZXgiLCJkaXYiLCJvbkNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImNoYW5nZVRleHRMaXN0S2luZCIsImRlZmF1bHRWYWx1ZSIsImtpbmQiLCJzZWxlY3RFbGVtZW50Iiwib3B0aW9uIiwiaW5wdXQiLCJ0eXBlIiwiY2hhbmdlQ2hlY2tib3hDaGVja2VkIiwiY2hlY2tlZCIsImNoYW5nZVRleHRFbGVtZW50VmFsdWUiLCJjbGFzc05hbWUiLCJvbktleURvd24iLCJrZXkiLCJhZGRUZXh0TGlzdEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Content.tsx\n");

/***/ })

});