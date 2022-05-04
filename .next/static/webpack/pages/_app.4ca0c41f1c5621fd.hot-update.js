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

/***/ "./store/Notion.ts":
/*!*************************!*\
  !*** ./store/Notion.ts ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NotionPageStore\": function() { return /* binding */ NotionPageStore; }\n/* harmony export */ });\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/dist/mobx.esm.js\");\n\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nvar NotionPageStore = /*#__PURE__*/ function() {\n    \"use strict\";\n    function NotionPageStore() {\n        _classCallCheck(this, NotionPageStore);\n        this.textList = [\n            {\n                kind: 'text',\n                value: ''\n            }\n        ];\n        this.select = [\n            'title h1',\n            'text',\n            'callout',\n            'checkbox'\n        ];\n        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeAutoObservable)(this);\n        if (true) {\n            this.textList = JSON.parse(localStorage.getItem('list') || '[{\"kind\":\"text\",\"value\":\"\"}]');\n        }\n    }\n    _createClass(NotionPageStore, [\n        {\n            key: \"changeTextListKind\",\n            value: function changeTextListKind(index, value) {\n                if (value === 'checkbox') {\n                    this.textList[index].checked = false;\n                }\n                this.textList[index].kind = value;\n            }\n        },\n        {\n            key: \"changeCheckboxChecked\",\n            value: function changeCheckboxChecked(index, value) {\n                this.textList[index].checked = value;\n            }\n        },\n        {\n            key: \"changeTextElementValue\",\n            value: function changeTextElementValue(index, value) {\n                this.textList[index].value = value;\n            }\n        },\n        {\n            key: \"addTextListItem\",\n            value: function addTextListItem(index) {\n                this.textList.splice(index, 0, {\n                    kind: 'text',\n                    value: ''\n                }).reverse();\n            }\n        }\n    ]);\n    return NotionPageStore;\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9Ob3Rpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xDLElBQU1DLGVBQWUsaUJBQXJCLFFBQVE7O2FBQUZBLGVBQWU7O1FBQXJCLElBMEJOLENBekJDQyxRQUFRLEdBQWEsQ0FBQztZQUFBLENBQUM7Z0JBQUNDLElBQUksRUFBRSxDQUFNO2dCQUFFQyxLQUFLLEVBQUUsQ0FBRTtZQUFDLENBQUM7UUFBQSxDQUFDO1FBRDdDLElBMEJOLENBeEJDQyxNQUFNLEdBQUcsQ0FBQztZQUFBLENBQVU7WUFBRSxDQUFNO1lBQUUsQ0FBUztZQUFFLENBQVU7UUFBQSxDQUFDO1FBRWxETCx3REFBa0IsQ0FBQyxJQUFJO1FBQ3ZCLEVBQUUsRUFBRSxJQUE2QixFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDRSxRQUFRLEdBQUdJLElBQUksQ0FBQ0MsS0FBSyxDQUN4QkMsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTSxVQUFLLENBQThCO1FBRWxFLENBQUM7Ozs7WUFFSEMsR0FBa0IsRUFBbEJBLENBQWtCO21CQUFsQkEsUUFBUSxDQUFSQSxrQkFBa0IsQ0FBQ0MsS0FBYSxFQUFFUCxLQUFpQixFQUFFLENBQUM7Z0JBQ3BELEVBQUUsRUFBRUEsS0FBSyxLQUFLLENBQVUsV0FBRSxDQUFDO29CQUN6QixJQUFJLENBQUNGLFFBQVEsQ0FBQ1MsS0FBSyxFQUFFQyxPQUFPLEdBQUcsS0FBSztnQkFDdEMsQ0FBQztnQkFDRCxJQUFJLENBQUNWLFFBQVEsQ0FBQ1MsS0FBSyxFQUFFUixJQUFJLEdBQUdDLEtBQUs7WUFDbkMsQ0FBQzs7O1lBQ0RTLEdBQXFCLEVBQXJCQSxDQUFxQjttQkFBckJBLFFBQVEsQ0FBUkEscUJBQXFCLENBQUNGLEtBQWEsRUFBRVAsS0FBYyxFQUFFLENBQUM7Z0JBQ3BELElBQUksQ0FBQ0YsUUFBUSxDQUFDUyxLQUFLLEVBQUVDLE9BQU8sR0FBR1IsS0FBSztZQUN0QyxDQUFDOzs7WUFDRFUsR0FBc0IsRUFBdEJBLENBQXNCO21CQUF0QkEsUUFBUSxDQUFSQSxzQkFBc0IsQ0FBQ0gsS0FBYSxFQUFFUCxLQUFzQixFQUFFLENBQUM7Z0JBQzdELElBQUksQ0FBQ0YsUUFBUSxDQUFDUyxLQUFLLEVBQUVQLEtBQUssR0FBR0EsS0FBSztZQUNwQyxDQUFDOzs7WUFDRFcsR0FBZSxFQUFmQSxDQUFlO21CQUFmQSxRQUFRLENBQVJBLGVBQWUsQ0FBQ0osS0FBYSxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQ1QsUUFBUSxDQUFDYyxNQUFNLENBQUNMLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFBQ1IsSUFBSSxFQUFFLENBQU07b0JBQUVDLEtBQUssRUFBRSxDQUFFO2dCQUFDLENBQUMsRUFBRWEsT0FBTztZQUNyRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL05vdGlvbi50cz8yZDlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VBdXRvT2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnO1xuaW1wb3J0IHsgTGlzdFR5cGUsIFNlbGVjdFR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBOb3Rpb25QYWdlU3RvcmUge1xuICB0ZXh0TGlzdDogTGlzdFR5cGUgPSBbeyBraW5kOiAndGV4dCcsIHZhbHVlOiAnJyB9XTtcbiAgc2VsZWN0ID0gWyd0aXRsZSBoMScsICd0ZXh0JywgJ2NhbGxvdXQnLCAnY2hlY2tib3gnXTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbWFrZUF1dG9PYnNlcnZhYmxlKHRoaXMpO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy50ZXh0TGlzdCA9IEpTT04ucGFyc2UoXG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0JykgfHwgJ1t7XCJraW5kXCI6XCJ0ZXh0XCIsXCJ2YWx1ZVwiOlwiXCJ9XSdcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGNoYW5nZVRleHRMaXN0S2luZChpbmRleDogbnVtYmVyLCB2YWx1ZTogU2VsZWN0VHlwZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgdGhpcy50ZXh0TGlzdFtpbmRleF0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnRleHRMaXN0W2luZGV4XS5raW5kID0gdmFsdWU7XG4gIH1cbiAgY2hhbmdlQ2hlY2tib3hDaGVja2VkKGluZGV4OiBudW1iZXIsIHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy50ZXh0TGlzdFtpbmRleF0uY2hlY2tlZCA9IHZhbHVlO1xuICB9XG4gIGNoYW5nZVRleHRFbGVtZW50VmFsdWUoaW5kZXg6IG51bWJlciwgdmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMudGV4dExpc3RbaW5kZXhdLnZhbHVlID0gdmFsdWU7XG4gIH1cbiAgYWRkVGV4dExpc3RJdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnRleHRMaXN0LnNwbGljZShpbmRleCwgMCwgeyBraW5kOiAndGV4dCcsIHZhbHVlOiAnJyB9KS5yZXZlcnNlKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtYWtlQXV0b09ic2VydmFibGUiLCJOb3Rpb25QYWdlU3RvcmUiLCJ0ZXh0TGlzdCIsImtpbmQiLCJ2YWx1ZSIsInNlbGVjdCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjaGFuZ2VUZXh0TGlzdEtpbmQiLCJpbmRleCIsImNoZWNrZWQiLCJjaGFuZ2VDaGVja2JveENoZWNrZWQiLCJjaGFuZ2VUZXh0RWxlbWVudFZhbHVlIiwiYWRkVGV4dExpc3RJdGVtIiwic3BsaWNlIiwicmV2ZXJzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/Notion.ts\n");

/***/ })

});