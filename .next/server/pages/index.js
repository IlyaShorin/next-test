/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Content.module.css":
/*!***************************************!*\
  !*** ./components/Content.module.css ***!
  \***************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"input\": \"Content_input__uhj_C\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRlbnQubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdGVzdC8uL2NvbXBvbmVudHMvQ29udGVudC5tb2R1bGUuY3NzPzA0NTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5wdXRcIjogXCJDb250ZW50X2lucHV0X191aGpfQ1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Content.module.css\n");

/***/ }),

/***/ "./components/Content.tsx":
/*!********************************!*\
  !*** ./components/Content.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": () => (/* binding */ Content)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useStore */ \"./hooks/useStore.ts\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ \"mobx-react-lite\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Content_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content.module.css */ \"./components/Content.module.css\");\n/* harmony import */ var _Content_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Content_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst Content = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(function Content() {\n    const { notion: { textList , select  } ,  } = (0,_hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores)();\n    const { notion  } = (0,_hooks_useStore__WEBPACK_IMPORTED_MODULE_1__.useStores)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        document.addEventListener('keydown', listener);\n        localStorage.setItem('list', JSON.stringify(textList));\n        return function() {\n            document.removeEventListener('keydown', listener);\n        };\n    });\n    const listener = (e)=>{\n        if (e.key === 'Enter') {\n            notion.addTextListItem();\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Next-test\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            textList.map((textElement, index1)=>{\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            onChange: (e)=>{\n                                const value = e.target.value;\n                                notion.changeTextListKind(index1, value);\n                            },\n                            defaultValue: textElement.kind,\n                            children: select.map((selectElement, index)=>{\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: selectElement,\n                                    children: selectElement\n                                }, index, false, {\n                                    fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 19\n                                }, this));\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this),\n                        textElement.kind === 'checkbox' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: textElement.kind,\n                            onChange: (e)=>notion.changeCheckboxChecked(index1, e.target.checked)\n                            ,\n                            checked: textElement.checked\n                        }, void 0, false, {\n                            fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, this) : '',\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: (e)=>{\n                                notion.changeTextElementValue(index1, e.target.value);\n                            },\n                            value: textElement.value,\n                            className: (_Content_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                            autoFocus: index1 === 0\n                        }, void 0, false, {\n                            fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index1, true, {\n                    fileName: \"/Users/ilyashorin/www/next-test/components/Content.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this));\n            })\n        ]\n    }, void 0, true));\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdQLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRlc3QvLi9jb21wb25lbnRzL0NvbnRlbnQudHN4PzU3MDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RvcmVzIH0gZnJvbSAnLi4vaG9va3MvdXNlU3RvcmUnO1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250ZW50Lm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgQ29udGVudCA9IG9ic2VydmVyKGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIGNvbnN0IHtcbiAgICBub3Rpb246IHsgdGV4dExpc3QsIHNlbGVjdCB9LFxuICB9ID0gdXNlU3RvcmVzKCk7XG4gIGNvbnN0IHsgbm90aW9uIH0gPSB1c2VTdG9yZXMoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbGlzdGVuZXIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkodGV4dExpc3QpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGxpc3RlbmVyKTtcbiAgICB9O1xuICB9KTtcbiAgY29uc3QgbGlzdGVuZXIgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgbm90aW9uLmFkZFRleHRMaXN0SXRlbSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk5leHQtdGVzdDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwJyAvPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAge3RleHRMaXN0Lm1hcCgodGV4dEVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZSBhc1xuICAgICAgICAgICAgICAgICAgfCAndGl0bGUgaDEnXG4gICAgICAgICAgICAgICAgICB8ICd0ZXh0J1xuICAgICAgICAgICAgICAgICAgfCAnY2FsbG91dCdcbiAgICAgICAgICAgICAgICAgIHwgJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICBub3Rpb24uY2hhbmdlVGV4dExpc3RLaW5kKGluZGV4LCB2YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGV4dEVsZW1lbnQua2luZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NlbGVjdC5tYXAoKHNlbGVjdEVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3NlbGVjdEVsZW1lbnR9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0RWxlbWVudH1cbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICB7dGV4dEVsZW1lbnQua2luZCA9PT0gJ2NoZWNrYm94JyA/IChcbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT17dGV4dEVsZW1lbnQua2luZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICBub3Rpb24uY2hhbmdlQ2hlY2tib3hDaGVja2VkKGluZGV4LCBlLnRhcmdldC5jaGVja2VkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0ZXh0RWxlbWVudC5jaGVja2VkfVxuICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5vdGlvbi5jaGFuZ2VUZXh0RWxlbWVudFZhbHVlKGluZGV4LCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHZhbHVlPXt0ZXh0RWxlbWVudC52YWx1ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgIGF1dG9Gb2N1cz17aW5kZXggPT09IDB9XG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvPlxuICApO1xufSk7XG4iXSwibmFtZXMiOlsidXNlU3RvcmVzIiwib2JzZXJ2ZXIiLCJIZWFkIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiQ29udGVudCIsIm5vdGlvbiIsInRleHRMaXN0Iiwic2VsZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibGlzdGVuZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwiYWRkVGV4dExpc3RJdGVtIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1hcCIsInRleHRFbGVtZW50IiwiaW5kZXgiLCJkaXYiLCJvbkNoYW5nZSIsInZhbHVlIiwidGFyZ2V0IiwiY2hhbmdlVGV4dExpc3RLaW5kIiwiZGVmYXVsdFZhbHVlIiwia2luZCIsInNlbGVjdEVsZW1lbnQiLCJvcHRpb24iLCJpbnB1dCIsInR5cGUiLCJjaGFuZ2VDaGVja2JveENoZWNrZWQiLCJjaGVja2VkIiwiY2hhbmdlVGV4dEVsZW1lbnRWYWx1ZSIsImNsYXNzTmFtZSIsImF1dG9Gb2N1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Content.tsx\n");

/***/ }),

/***/ "./context/index.ts":
/*!**************************!*\
  !*** ./context/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RootStoreContext\": () => (/* binding */ RootStoreContext),\n/* harmony export */   \"RootStoreContextProvider\": () => (/* binding */ RootStoreContextProvider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ \"./store/index.ts\");\n\n\nconst RootStoreContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(_store__WEBPACK_IMPORTED_MODULE_1__.rootStore);\nconst RootStoreContextProvider = RootStoreContext.Provider;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFDO0FBQ0Q7QUFFN0IsS0FBSyxDQUFDRSxnQkFBZ0IsR0FBR0Ysb0RBQWEsQ0FBQ0MsNkNBQVM7QUFDaEQsS0FBSyxDQUFDRSx3QkFBd0IsR0FBR0QsZ0JBQWdCLENBQUNFLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRlc3QvLi9jb250ZXh0L2luZGV4LnRzP2IzZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJvb3RTdG9yZSB9IGZyb20gJy4uL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IFJvb3RTdG9yZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHJvb3RTdG9yZSk7XG5leHBvcnQgY29uc3QgUm9vdFN0b3JlQ29udGV4dFByb3ZpZGVyID0gUm9vdFN0b3JlQ29udGV4dC5Qcm92aWRlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0Iiwicm9vdFN0b3JlIiwiUm9vdFN0b3JlQ29udGV4dCIsIlJvb3RTdG9yZUNvbnRleHRQcm92aWRlciIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/index.ts\n");

/***/ }),

/***/ "./hooks/useStore.ts":
/*!***************************!*\
  !*** ./hooks/useStore.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useStores\": () => (/* binding */ useStores)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context/index.ts\");\n\n\nconst useStores = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.RootStoreContext);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VTdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtDO0FBQ1c7QUFFdEMsS0FBSyxDQUFDRSxTQUFTLE9BQVMsQ0FBQztJQUM5QixNQUFNLENBQUNGLGlEQUFVLENBQUNDLHNEQUFnQjtBQUNwQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10ZXN0Ly4vaG9va3MvdXNlU3RvcmUudHM/OGNhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm9vdFN0b3JlQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgdXNlU3RvcmVzID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChSb290U3RvcmVDb250ZXh0KTtcbn07XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlJvb3RTdG9yZUNvbnRleHQiLCJ1c2VTdG9yZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useStore.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Content */ \"./components/Content.tsx\");\n\n\nconst Main = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Content__WEBPACK_IMPORTED_MODULE_1__.Content, {}, void 0, false, {\n        fileName: \"/Users/ilyashorin/www/next-test/pages/index.tsx\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDK0M7QUFJL0MsS0FBSyxDQUFDQyxJQUFJLE9BQW1CLENBQUM7SUFDNUIsTUFBTSw2RUFBRUQsd0RBQU87Ozs7O0FBQ2pCLENBQUM7QUFFRCxpRUFBZUMsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10ZXN0Ly4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGVudCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IE1haW46IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gPENvbnRlbnQgLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sIm5hbWVzIjpbIkNvbnRlbnQiLCJNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./store/Notion.ts":
/*!*************************!*\
  !*** ./store/Notion.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NotionPageStore\": () => (/* binding */ NotionPageStore)\n/* harmony export */ });\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);\n\nclass NotionPageStore {\n    constructor(){\n        this.textList = [\n            {\n                kind: 'text',\n                value: ''\n            }\n        ];\n        this.select = [\n            'title h1',\n            'text',\n            'callout',\n            'checkbox'\n        ];\n        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeAutoObservable)(this);\n        if (false) {}\n    }\n    changeTextListKind(index, value) {\n        if (value === 'checkbox') {\n            this.textList[index].checked = false;\n        }\n        this.textList[index].kind = value;\n    }\n    changeCheckboxChecked(index, value) {\n        this.textList[index].checked = value;\n    }\n    changeTextElementValue(index, value) {\n        this.textList[index].value = value;\n    }\n    addTextListItem() {\n        this.textList.push({\n            kind: 'text',\n            value: ''\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9Ob3Rpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBR2xDLE1BQU1DLGVBQWU7aUJBR1osQ0FBQztRQUhWLElBMEJOLENBekJDQyxRQUFRLEdBQWEsQ0FBQztZQUFBLENBQUM7Z0JBQUNDLElBQUksRUFBRSxDQUFNO2dCQUFFQyxLQUFLLEVBQUUsQ0FBRTtZQUFDLENBQUM7UUFBQSxDQUFDO1FBRDdDLElBMEJOLENBeEJDQyxNQUFNLEdBQUcsQ0FBQztZQUFBLENBQVU7WUFBRSxDQUFNO1lBQUUsQ0FBUztZQUFFLENBQVU7UUFBQSxDQUFDO1FBRWxETCx3REFBa0IsQ0FBQyxJQUFJO1FBQ3ZCLEVBQUUsRUFBRSxLQUE2QixFQUFFLEVBSWxDO0lBQ0gsQ0FBQztJQUNEVSxrQkFBa0IsQ0FBQ0MsS0FBYSxFQUFFUCxLQUFpQixFQUFFLENBQUM7UUFDcEQsRUFBRSxFQUFFQSxLQUFLLEtBQUssQ0FBVSxXQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDRixRQUFRLENBQUNTLEtBQUssRUFBRUMsT0FBTyxHQUFHLEtBQUs7UUFDdEMsQ0FBQztRQUNELElBQUksQ0FBQ1YsUUFBUSxDQUFDUyxLQUFLLEVBQUVSLElBQUksR0FBR0MsS0FBSztJQUNuQyxDQUFDO0lBQ0RTLHFCQUFxQixDQUFDRixLQUFhLEVBQUVQLEtBQWMsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQ0YsUUFBUSxDQUFDUyxLQUFLLEVBQUVDLE9BQU8sR0FBR1IsS0FBSztJQUN0QyxDQUFDO0lBQ0RVLHNCQUFzQixDQUFDSCxLQUFhLEVBQUVQLEtBQXNCLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUNGLFFBQVEsQ0FBQ1MsS0FBSyxFQUFFUCxLQUFLLEdBQUdBLEtBQUs7SUFDcEMsQ0FBQztJQUNEVyxlQUFlLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUNiLFFBQVEsQ0FBQ2MsSUFBSSxDQUFDLENBQUM7WUFBQ2IsSUFBSSxFQUFFLENBQU07WUFBRUMsS0FBSyxFQUFFLENBQUU7UUFBQyxDQUFDO0lBQ2hELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRlc3QvLi9zdG9yZS9Ob3Rpb24udHM/MmQ5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlQXV0b09ic2VydmFibGUgfSBmcm9tICdtb2J4JztcbmltcG9ydCB7IExpc3RUeXBlLCBTZWxlY3RUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgTm90aW9uUGFnZVN0b3JlIHtcbiAgdGV4dExpc3Q6IExpc3RUeXBlID0gW3sga2luZDogJ3RleHQnLCB2YWx1ZTogJycgfV07XG4gIHNlbGVjdCA9IFsndGl0bGUgaDEnLCAndGV4dCcsICdjYWxsb3V0JywgJ2NoZWNrYm94J107XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIG1ha2VBdXRvT2JzZXJ2YWJsZSh0aGlzKTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMudGV4dExpc3QgPSBKU09OLnBhcnNlKFxuICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdCcpIHx8ICdbe1wia2luZFwiOlwidGV4dFwiLFwidmFsdWVcIjpcIlwifV0nXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBjaGFuZ2VUZXh0TGlzdEtpbmQoaW5kZXg6IG51bWJlciwgdmFsdWU6IFNlbGVjdFR5cGUpIHtcbiAgICBpZiAodmFsdWUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHRoaXMudGV4dExpc3RbaW5kZXhdLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy50ZXh0TGlzdFtpbmRleF0ua2luZCA9IHZhbHVlO1xuICB9XG4gIGNoYW5nZUNoZWNrYm94Q2hlY2tlZChpbmRleDogbnVtYmVyLCB2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMudGV4dExpc3RbaW5kZXhdLmNoZWNrZWQgPSB2YWx1ZTtcbiAgfVxuICBjaGFuZ2VUZXh0RWxlbWVudFZhbHVlKGluZGV4OiBudW1iZXIsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB0aGlzLnRleHRMaXN0W2luZGV4XS52YWx1ZSA9IHZhbHVlO1xuICB9XG4gIGFkZFRleHRMaXN0SXRlbSgpIHtcbiAgICB0aGlzLnRleHRMaXN0LnB1c2goeyBraW5kOiAndGV4dCcsIHZhbHVlOiAnJyB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1ha2VBdXRvT2JzZXJ2YWJsZSIsIk5vdGlvblBhZ2VTdG9yZSIsInRleHRMaXN0Iiwia2luZCIsInZhbHVlIiwic2VsZWN0IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNoYW5nZVRleHRMaXN0S2luZCIsImluZGV4IiwiY2hlY2tlZCIsImNoYW5nZUNoZWNrYm94Q2hlY2tlZCIsImNoYW5nZVRleHRFbGVtZW50VmFsdWUiLCJhZGRUZXh0TGlzdEl0ZW0iLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/Notion.ts\n");

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RootStore\": () => (/* binding */ RootStore),\n/* harmony export */   \"rootStore\": () => (/* binding */ rootStore)\n/* harmony export */ });\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Notion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notion */ \"./store/Notion.ts\");\n\n\nclass RootStore {\n    constructor(){\n        this.notion = new _Notion__WEBPACK_IMPORTED_MODULE_1__.NotionPageStore();\n        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeAutoObservable)(this);\n    }\n}\nconst rootStore = new RootStore();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QztBQUNDO0FBRW5DLE1BQU1FLFNBQVM7aUJBR04sQ0FBQztRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ0Ysb0RBQWU7UUFFakNELHdEQUFrQixDQUFDLElBQUk7SUFDekIsQ0FBQzs7QUFHSSxLQUFLLENBQUNJLFNBQVMsR0FBRyxHQUFHLENBQUNGLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRlc3QvLi9zdG9yZS9pbmRleC50cz9iNWIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VBdXRvT2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnO1xuaW1wb3J0IHsgTm90aW9uUGFnZVN0b3JlIH0gZnJvbSAnLi9Ob3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgUm9vdFN0b3JlIHtcbiAgbm90aW9uO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubm90aW9uID0gbmV3IE5vdGlvblBhZ2VTdG9yZSgpO1xuXG4gICAgbWFrZUF1dG9PYnNlcnZhYmxlKHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByb290U3RvcmUgPSBuZXcgUm9vdFN0b3JlKCk7XG4iXSwibmFtZXMiOlsibWFrZUF1dG9PYnNlcnZhYmxlIiwiTm90aW9uUGFnZVN0b3JlIiwiUm9vdFN0b3JlIiwibm90aW9uIiwicm9vdFN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/index.ts\n");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("mobx");

/***/ }),

/***/ "mobx-react-lite":
/*!**********************************!*\
  !*** external "mobx-react-lite" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("mobx-react-lite");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();