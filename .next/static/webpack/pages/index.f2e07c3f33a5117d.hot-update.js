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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": function() { return /* binding */ Content; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useStore */ \"./hooks/useStore.ts\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Content_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content.module.css */ \"./components/Content.module.css\");\n/* harmony import */ var _Content_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Content_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Content = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(_c = _s(function Content() {\n    var _this = this;\n    _s();\n    var ref1 = (0,_hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores)(), _notion = ref1.notion, textList = _notion.textList, select = _notion.select;\n    var notion = (0,_hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores)().notion;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        // document.addEventListener('keydown', listener);\n        localStorage.setItem('list', JSON.stringify(textList));\n    // return function () {\n    //   document.removeEventListener('keydown', listener);\n    // };\n    });\n    // const listener = (e: KeyboardEvent) => {\n    //   if (e.key === 'Enter') {\n    //     notion.addTextListItem();\n    //   }\n    // };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Next-test\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            textList.map(function(textElement, index1) {\n                var _this1 = _this;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            onChange: function(e) {\n                                var value = e.target.value;\n                                notion.changeTextListKind(index1, value);\n                            },\n                            value: textElement.kind,\n                            children: select.map(function(selectElement, index) {\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: selectElement,\n                                    children: selectElement\n                                }, index, false, {\n                                    fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 19\n                                }, _this1));\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, _this),\n                        textElement.kind === 'checkbox' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: textElement.kind,\n                            onChange: function(e) {\n                                return notion.changeCheckboxChecked(index1, e.target.checked);\n                            },\n                            checked: textElement.checked\n                        }, void 0, false, {\n                            fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, _this) : '',\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: function(e) {\n                                notion.changeTextElementValue(index1, e.target.value);\n                            },\n                            value: textElement.value,\n                            autoFocus: index1 === 0,\n                            className: (_Content_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                            onKeyDown: function(e) {\n                                if (e.key === 'Enter') {\n                                    var ref;\n                                    notion.addTextListItem(index1);\n                                    (ref = document.querySelector(\"#\".concat(textElement.value, \"_\").concat(index1))) === null || ref === void 0 ? void 0 : ref.blur();\n                                }\n                            },\n                            id: \"\".concat(textElement.value, \"_\").concat(index1)\n                        }, void 0, false, {\n                            fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, index1, true, {\n                    fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, _this));\n            })\n        ]\n    }, void 0, true));\n}, \"sBdWirl2pHeuMZ39Xpwp/tV/dXo=\", false, function() {\n    return [\n        _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores,\n        _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores\n    ];\n})), \"sBdWirl2pHeuMZ39Xpwp/tV/dXo=\", false, function() {\n    return [\n        _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores,\n        _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores\n    ];\n});\n_c1 = Content;\nvar _c, _c1;\n$RefreshReg$(_c, \"Content$observer\");\n$RefreshReg$(_c1, \"Content\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO3FDQUU1Qm1CLEdBR0csR0FISEEsUUFBUSxDQUNMRSxhQUFhLENBQ1gsQ0FBQyxHQUF1QnJCLE1BQUssQ0FBMUJELFdBQVcsQ0FBQ0ssS0FBSyxFQUFDLENBQUMsSUFBUSxPQUFOSixNQUFLLGdCQUZsQ21CLEdBR0csS0FISEEsSUFBSSxDQUFKQSxDQUlRLEdBSlJBLElBQUksQ0FBSkEsQ0FJUSxHQUpSQSxHQUdHLENBQ0NHLElBQUk7Z0NBQ1YsQ0FBQzs0QkFDSCxDQUFDOzRCQUNEQyxFQUFFLEVBQUcsR0FBdUJ2QixNQUFLLENBQTFCRCxXQUFXLENBQUNLLEtBQUssRUFBQyxDQUFDLElBQVEsT0FBTkosTUFBSzs7Ozs7OzttQkFqRDNCQSxNQUFLOzs7OztZQXFEbkIsQ0FBQzs7O0FBR1AsQ0FBQzs7UUFuRkt0QixzREFBUztRQUNNQSxzREFBUzs7OztRQUR4QkEsc0RBQVM7UUFDTUEsc0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250ZW50LnRzeD81NzA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0b3JlcyB9IGZyb20gJy4uL2hvb2tzL3VzZVN0b3JlJztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250ZW50Lm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgQ29udGVudCA9IG9ic2VydmVyKGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IHtcbiAgICBub3Rpb246IHsgdGV4dExpc3QsIHNlbGVjdCB9LFxuICB9ID0gdXNlU3RvcmVzKCk7XG4gIGNvbnN0IHsgbm90aW9uIH0gPSB1c2VTdG9yZXMoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBsaXN0ZW5lcik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3QnLCBKU09OLnN0cmluZ2lmeSh0ZXh0TGlzdCkpO1xuXG4gICAgLy8gcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBsaXN0ZW5lcik7XG4gICAgLy8gfTtcbiAgfSk7XG4gIC8vIGNvbnN0IGxpc3RlbmVyID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgLy8gICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgLy8gICAgIG5vdGlvbi5hZGRUZXh0TGlzdEl0ZW0oKTtcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OZXh0LXRlc3Q8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcCcgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHt0ZXh0TGlzdC5tYXAoKHRleHRFbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWUgYXNcbiAgICAgICAgICAgICAgICAgIHwgJ3RpdGxlIGgxJ1xuICAgICAgICAgICAgICAgICAgfCAndGV4dCdcbiAgICAgICAgICAgICAgICAgIHwgJ2NhbGxvdXQnXG4gICAgICAgICAgICAgICAgICB8ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgbm90aW9uLmNoYW5nZVRleHRMaXN0S2luZChpbmRleCwgdmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB2YWx1ZT17dGV4dEVsZW1lbnQua2luZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NlbGVjdC5tYXAoKHNlbGVjdEVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3NlbGVjdEVsZW1lbnR9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0RWxlbWVudH1cbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICB7dGV4dEVsZW1lbnQua2luZCA9PT0gJ2NoZWNrYm94JyA/IChcbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT17dGV4dEVsZW1lbnQua2luZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICBub3Rpb24uY2hhbmdlQ2hlY2tib3hDaGVja2VkKGluZGV4LCBlLnRhcmdldC5jaGVja2VkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0ZXh0RWxlbWVudC5jaGVja2VkfVxuICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5vdGlvbi5jaGFuZ2VUZXh0RWxlbWVudFZhbHVlKGluZGV4LCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHZhbHVlPXt0ZXh0RWxlbWVudC52YWx1ZX1cbiAgICAgICAgICAgICAgYXV0b0ZvY3VzPXtpbmRleCA9PT0gMH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgIG5vdGlvbi5hZGRUZXh0TGlzdEl0ZW0oaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcbiAgICAgICAgICAgICAgICAgICAgICBgIyR7dGV4dEVsZW1lbnQudmFsdWV9XyR7aW5kZXh9YFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgID8uYmx1cigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaWQ9e2Ake3RleHRFbGVtZW50LnZhbHVlfV8ke2luZGV4fWB9XG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvPlxuICApO1xufSk7XG4iXSwibmFtZXMiOlsidXNlU3RvcmVzIiwib2JzZXJ2ZXIiLCJIZWFkIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiQ29udGVudCIsIm5vdGlvbiIsInRleHRMaXN0Iiwic2VsZWN0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFwIiwidGV4dEVsZW1lbnQiLCJpbmRleCIsImRpdiIsIm9uQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiY2hhbmdlVGV4dExpc3RLaW5kIiwia2luZCIsInNlbGVjdEVsZW1lbnQiLCJvcHRpb24iLCJpbnB1dCIsInR5cGUiLCJjaGFuZ2VDaGVja2JveENoZWNrZWQiLCJjaGVja2VkIiwiY2hhbmdlVGV4dEVsZW1lbnRWYWx1ZSIsImF1dG9Gb2N1cyIsImNsYXNzTmFtZSIsIm9uS2V5RG93biIsImtleSIsImRvY3VtZW50IiwiYWRkVGV4dExpc3RJdGVtIiwicXVlcnlTZWxlY3RvciIsImJsdXIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Content.tsx\n");

/***/ })

});