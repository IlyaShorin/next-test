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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": function() { return /* binding */ Content; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useStore */ \"./hooks/useStore.ts\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Content_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content.module.css */ \"./components/Content.module.css\");\n/* harmony import */ var _Content_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Content_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Content = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(_c = _s(function Content() {\n    var _this = this;\n    _s();\n    var ref = (0,_hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores)(), _notion = ref.notion, textList = _notion.textList, select = _notion.select;\n    var notion = (0,_hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores)().notion;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        // document.addEventListener('keydown', listener);\n        localStorage.setItem('list', JSON.stringify(textList));\n    // return function () {\n    //   document.removeEventListener('keydown', listener);\n    // };\n    });\n    // const listener = (e: KeyboardEvent) => {\n    //   if (e.key === 'Enter') {\n    //     notion.addTextListItem();\n    //   }\n    // };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Next-test\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            textList.map(function(textElement, index1) {\n                var _this1 = _this;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            onChange: function(e) {\n                                var value = e.target.value;\n                                notion.changeTextListKind(index1, value);\n                            },\n                            value: textElement.kind,\n                            children: select.map(function(selectElement, index) {\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: selectElement,\n                                    children: selectElement\n                                }, index, false, {\n                                    fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 19\n                                }, _this1));\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, _this),\n                        textElement.kind === 'checkbox' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: textElement.kind,\n                            onChange: function(e) {\n                                return notion.changeCheckboxChecked(index1, e.target.checked);\n                            },\n                            checked: textElement.checked\n                        }, void 0, false, {\n                            fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 15\n                        }, _this) : '',\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: function(e) {\n                                notion.changeTextElementValue(index1, e.target.value);\n                            },\n                            value: textElement.value,\n                            onClick: function(e) {\n                                console.log(e.target);\n                            },\n                            autoFocus: index1 === 0,\n                            className: (_Content_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                            onKeyDown: function(e) {\n                                if (e.key === 'Enter') {\n                                    notion.addTextListItem(index1);\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, index1, true, {\n                    fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, _this));\n            })\n        ]\n    }, void 0, true));\n}, \"f7RLF26R3Szuha8SrDpE9sEhFYQ=\", false, function() {\n    return [\n        _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores,\n        _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores\n    ];\n})), \"f7RLF26R3Szuha8SrDpE9sEhFYQ=\", false, function() {\n    return [\n        _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores,\n        _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores\n    ];\n});\n_c1 = Content;\nvar _c, _c1;\n$RefreshReg$(_c, \"Content$observer\");\n$RefreshReg$(_c1, \"Content\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUN2QnVDLFNBQVMsRUFBRSxRQUFRLENBQVBqQixDQUFDLEVBQUssQ0FBQztnQ0FDakIsRUFBRSxFQUFFQSxDQUFDLENBQUNrQixHQUFHLEtBQUssQ0FBTyxRQUFFLENBQUM7b0NBQ3RCdEMsTUFBTSxDQUFDdUMsZUFBZSxDQUFDdEIsTUFBSztnQ0FDOUIsQ0FBQzs0QkFDSCxDQUFDOzs7Ozs7O21CQTdDS0EsTUFBSzs7Ozs7WUFpRG5CLENBQUM7OztBQUdQLENBQUM7O1FBOUVLeEIsc0RBQVM7UUFDTUEsc0RBQVM7Ozs7UUFEeEJBLHNEQUFTO1FBQ01BLHNEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udGVudC50c3g/NTcwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdG9yZXMgfSBmcm9tICcuLi9ob29rcy91c2VTdG9yZSc7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGVudC5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBvYnNlcnZlcihmdW5jdGlvbiBDb250ZW50KCkge1xuICBjb25zdCB7XG4gICAgbm90aW9uOiB7IHRleHRMaXN0LCBzZWxlY3QgfSxcbiAgfSA9IHVzZVN0b3JlcygpO1xuICBjb25zdCB7IG5vdGlvbiB9ID0gdXNlU3RvcmVzKCk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbGlzdGVuZXIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkodGV4dExpc3QpKTtcbiAgICAvLyByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIC8vICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGxpc3RlbmVyKTtcbiAgICAvLyB9O1xuICB9KTtcbiAgLy8gY29uc3QgbGlzdGVuZXIgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAvLyAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAvLyAgICAgbm90aW9uLmFkZFRleHRMaXN0SXRlbSgpO1xuICAvLyAgIH1cbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk5leHQtdGVzdDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwJyAvPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAge3RleHRMaXN0Lm1hcCgodGV4dEVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZSBhc1xuICAgICAgICAgICAgICAgICAgfCAndGl0bGUgaDEnXG4gICAgICAgICAgICAgICAgICB8ICd0ZXh0J1xuICAgICAgICAgICAgICAgICAgfCAnY2FsbG91dCdcbiAgICAgICAgICAgICAgICAgIHwgJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICBub3Rpb24uY2hhbmdlVGV4dExpc3RLaW5kKGluZGV4LCB2YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHZhbHVlPXt0ZXh0RWxlbWVudC5raW5kfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2VsZWN0Lm1hcCgoc2VsZWN0RWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17c2VsZWN0RWxlbWVudH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RFbGVtZW50fVxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIHt0ZXh0RWxlbWVudC5raW5kID09PSAnY2hlY2tib3gnID8gKFxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPXt0ZXh0RWxlbWVudC5raW5kfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgIG5vdGlvbi5jaGFuZ2VDaGVja2JveENoZWNrZWQoaW5kZXgsIGUudGFyZ2V0LmNoZWNrZWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RleHRFbGVtZW50LmNoZWNrZWR9XG4gICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgbm90aW9uLmNoYW5nZVRleHRFbGVtZW50VmFsdWUoaW5kZXgsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RleHRFbGVtZW50LnZhbHVlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYXV0b0ZvY3VzPXtpbmRleCA9PT0gMH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgIG5vdGlvbi5hZGRUZXh0TGlzdEl0ZW0oaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59KTtcbiJdLCJuYW1lcyI6WyJ1c2VTdG9yZXMiLCJvYnNlcnZlciIsIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJzdHlsZXMiLCJDb250ZW50Iiwibm90aW9uIiwidGV4dExpc3QiLCJzZWxlY3QiLCJyZWYiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYXAiLCJ0ZXh0RWxlbWVudCIsImluZGV4IiwiZGl2Iiwib25DaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJjaGFuZ2VUZXh0TGlzdEtpbmQiLCJraW5kIiwic2VsZWN0RWxlbWVudCIsIm9wdGlvbiIsImlucHV0IiwidHlwZSIsImNoYW5nZUNoZWNrYm94Q2hlY2tlZCIsImNoZWNrZWQiLCJjaGFuZ2VUZXh0RWxlbWVudFZhbHVlIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJhdXRvRm9jdXMiLCJjbGFzc05hbWUiLCJvbktleURvd24iLCJrZXkiLCJhZGRUZXh0TGlzdEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Content.tsx\n");

/***/ })

});