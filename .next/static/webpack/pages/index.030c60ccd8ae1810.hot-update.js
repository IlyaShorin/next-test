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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": function() { return /* binding */ Content; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useStore */ \"./hooks/useStore.ts\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Content_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content.module.css */ \"./components/Content.module.css\");\n/* harmony import */ var _Content_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Content_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Content = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(_c = _s(function Content() {\n    var _this = this;\n    _s();\n    var ref = (0,_hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores)(), _notion = ref.notion, textList = _notion.textList, select = _notion.select;\n    var notion = (0,_hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores)().notion;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        // document.addEventListener('keydown', listener);\n        localStorage.setItem('list', JSON.stringify(textList));\n    // return function () {\n    //   document.removeEventListener('keydown', listener);\n    // };\n    });\n    // const listener = (e: KeyboardEvent) => {\n    //   if (e.key === 'Enter') {\n    //     notion.addTextListItem();\n    //   }\n    // };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Next-test\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            textList.map(function(textElement, index1) {\n                var _this1 = _this;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            onChange: function(e) {\n                                var value = e.target.value;\n                                notion.changeTextListKind(index1, value);\n                            },\n                            defaultValue: textElement.kind,\n                            children: select.map(function(selectElement, index) {\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: selectElement,\n                                    children: selectElement\n                                }, index, false, {\n                                    fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 19\n                                }, _this1));\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, _this),\n                        textElement.kind === 'checkbox' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: textElement.kind,\n                            onChange: function(e) {\n                                return notion.changeCheckboxChecked(index1, e.target.checked);\n                            },\n                            checked: textElement.checked\n                        }, void 0, false, {\n                            fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, _this) : '',\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: function(e) {\n                                notion.changeTextElementValue(index1, e.target.value);\n                            },\n                            value: textElement.value,\n                            onClick: function(e) {\n                                console.log(e.target);\n                            },\n                            autoFocus: index1 === 0,\n                            className: (_Content_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                            onKeyDown: function(e) {\n                                if (e.key === 'Enter') {\n                                    notion.addTextListItem(index1);\n                                    document.querySelector(\".\".concat((_Content_module_css__WEBPACK_IMPORTED_MODULE_5___default().input)));\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, index1, true, {\n                    fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, _this));\n            })\n        ]\n    }, void 0, true));\n}, \"sBdWirl2pHeuMZ39Xpwp/tV/dXo=\", false, function() {\n    return [\n        _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores,\n        _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores\n    ];\n})), \"sBdWirl2pHeuMZ39Xpwp/tV/dXo=\", false, function() {\n    return [\n        _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores,\n        _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores\n    ];\n});\n_c1 = Content;\nvar _c, _c1;\n$RefreshReg$(_c, \"Content$observer\");\n$RefreshReg$(_c1, \"Content\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztnQ0FDakIsRUFBRSxFQUFFQSxDQUFDLENBQUNtQixHQUFHLEtBQUssQ0FBTyxRQUFFLENBQUM7b0NBQ3RCdEMsTUFBTSxDQUFDdUMsZUFBZSxDQUFDdkIsTUFBSztvQ0FDNUJ3QixRQUFRLENBQUNDLGFBQWEsQ0FBRSxDQUFDLEdBQWUsT0FBYjNDLGtFQUFZO2dDQUN6QyxDQUFDOzRCQUNILENBQUM7Ozs7Ozs7bUJBOUNLa0IsTUFBSzs7Ozs7WUFrRG5CLENBQUM7OztBQUdQLENBQUM7O1FBOUVLdEIsc0RBQVM7UUFDTUEsc0RBQVM7Ozs7UUFEeEJBLHNEQUFTO1FBQ01BLHNEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udGVudC50c3g/NTcwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdG9yZXMgfSBmcm9tICcuLi9ob29rcy91c2VTdG9yZSc7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRlbnQubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gb2JzZXJ2ZXIoZnVuY3Rpb24gQ29udGVudCgpIHtcbiAgY29uc3Qge1xuICAgIG5vdGlvbjogeyB0ZXh0TGlzdCwgc2VsZWN0IH0sXG4gIH0gPSB1c2VTdG9yZXMoKTtcbiAgY29uc3QgeyBub3Rpb24gfSA9IHVzZVN0b3JlcygpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBsaXN0ZW5lcik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3QnLCBKU09OLnN0cmluZ2lmeSh0ZXh0TGlzdCkpO1xuICAgIC8vIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbGlzdGVuZXIpO1xuICAgIC8vIH07XG4gIH0pO1xuICAvLyBjb25zdCBsaXN0ZW5lciA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gIC8vICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gIC8vICAgICBub3Rpb24uYWRkVGV4dExpc3RJdGVtKCk7XG4gIC8vICAgfVxuICAvLyB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TmV4dC10ZXN0PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0dlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHAnIC8+XG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICB7dGV4dExpc3QubWFwKCh0ZXh0RWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlIGFzXG4gICAgICAgICAgICAgICAgICB8ICd0aXRsZSBoMSdcbiAgICAgICAgICAgICAgICAgIHwgJ3RleHQnXG4gICAgICAgICAgICAgICAgICB8ICdjYWxsb3V0J1xuICAgICAgICAgICAgICAgICAgfCAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgIG5vdGlvbi5jaGFuZ2VUZXh0TGlzdEtpbmQoaW5kZXgsIHZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0ZXh0RWxlbWVudC5raW5kfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2VsZWN0Lm1hcCgoc2VsZWN0RWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17c2VsZWN0RWxlbWVudH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RFbGVtZW50fVxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIHt0ZXh0RWxlbWVudC5raW5kID09PSAnY2hlY2tib3gnID8gKFxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPXt0ZXh0RWxlbWVudC5raW5kfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgIG5vdGlvbi5jaGFuZ2VDaGVja2JveENoZWNrZWQoaW5kZXgsIGUudGFyZ2V0LmNoZWNrZWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RleHRFbGVtZW50LmNoZWNrZWR9XG4gICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgbm90aW9uLmNoYW5nZVRleHRFbGVtZW50VmFsdWUoaW5kZXgsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RleHRFbGVtZW50LnZhbHVlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYXV0b0ZvY3VzPXtpbmRleCA9PT0gMH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgIG5vdGlvbi5hZGRUZXh0TGlzdEl0ZW0oaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c3R5bGVzLmlucHV0fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59KTtcbiJdLCJuYW1lcyI6WyJ1c2VTdG9yZXMiLCJvYnNlcnZlciIsIkhlYWQiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJDb250ZW50Iiwibm90aW9uIiwidGV4dExpc3QiLCJzZWxlY3QiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYXAiLCJ0ZXh0RWxlbWVudCIsImluZGV4IiwiZGl2Iiwib25DaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJjaGFuZ2VUZXh0TGlzdEtpbmQiLCJkZWZhdWx0VmFsdWUiLCJraW5kIiwic2VsZWN0RWxlbWVudCIsIm9wdGlvbiIsImlucHV0IiwidHlwZSIsImNoYW5nZUNoZWNrYm94Q2hlY2tlZCIsImNoZWNrZWQiLCJjaGFuZ2VUZXh0RWxlbWVudFZhbHVlIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJhdXRvRm9jdXMiLCJjbGFzc05hbWUiLCJvbktleURvd24iLCJrZXkiLCJhZGRUZXh0TGlzdEl0ZW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Content.tsx\n");

/***/ })

});