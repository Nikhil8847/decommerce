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

/***/ "./components/ui/product/list/index.tsx":
/*!**********************************************!*\
  !*** ./components/ui/product/list/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hooks/web3 */ \"./components/hooks/web3/index.ts\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ \"./components/ui/product/item/index.tsx\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar NftList = function() {\n    var _this1 = _this;\n    var ref;\n    _s();\n    var nfts = (0,_hooks_web3__WEBPACK_IMPORTED_MODULE_1__.useListedNfts)().nfts;\n    console.log(\"LSKFJLKSJFLDKJFLSDKJFLSD : \" + nfts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none\",\n        children: (ref = nfts.data) === null || ref === void 0 ? void 0 : ref.map(function(nft) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col rounded-lg shadow-lg overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    item: nft,\n                    buyNft: nfts.buyNft\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dukef\\\\OneDrive\\\\Desktop\\\\decommerce\\\\components\\\\ui\\\\product\\\\list\\\\index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, _this1)\n            }, nft.meta.image, false, {\n                fileName: \"C:\\\\Users\\\\dukef\\\\OneDrive\\\\Desktop\\\\decommerce\\\\components\\\\ui\\\\product\\\\list\\\\index.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dukef\\\\OneDrive\\\\Desktop\\\\decommerce\\\\components\\\\ui\\\\product\\\\list\\\\index.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_s(NftList, \"ZxI/hUuCKSkj6XpzzmwsRiNCD/0=\", false, function() {\n    return [\n        _hooks_web3__WEBPACK_IMPORTED_MODULE_1__.useListedNfts\n    ];\n});\n_c = NftList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NftList);\nvar _c;\n$RefreshReg$(_c, \"NftList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL3Byb2R1Y3QvbGlzdC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBNEM7QUFFZDs7QUFFOUIsSUFBTUUsT0FBTyxHQUFzQixXQUFNOztRQUtsQ0MsR0FBUzs7SUFKZCxJQUFNLElBQU0sR0FBS0gsMERBQWEsRUFBRSxDQUF4QkcsSUFBSTtJQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBR0YsSUFBSSxDQUFDLENBQUM7SUFDbEQscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGdFQUFnRTtrQkFDNUVKLENBQUFBLEdBQVMsR0FBVEEsSUFBSSxDQUFDSyxJQUFJLGNBQVRMLEdBQVMsV0FBSyxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLEdBQVMsQ0FBRU0sR0FBRyxDQUFDLFNBQUNDLEdBQUc7aUNBQ2xCLDhEQUFDSixLQUFHO2dCQUVGQyxTQUFTLEVBQUMsb0RBQW9EOzBCQUU5RCw0RUFBQ04sNkNBQU87b0JBQUNVLElBQUksRUFBRUQsR0FBRztvQkFBRUUsTUFBTSxFQUFFVCxJQUFJLENBQUNTLE1BQU07Ozs7OzBCQUFJO2VBSHRDRixHQUFHLENBQUNHLElBQUksQ0FBQ0MsS0FBSzs7OztzQkFJZjtTQUNQLENBQUM7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0dBZktaLE9BQU87O1FBQ01GLHNEQUFhOzs7QUFEMUJFLEtBQUFBLE9BQU87QUFpQmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL3Byb2R1Y3QvbGlzdC9pbmRleC50c3g/MTY5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VMaXN0ZWROZnRzIH0gZnJvbSBcIkBob29rcy93ZWIzXCI7XHJcbmltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZnRJdGVtIGZyb20gXCIuLi9pdGVtXCI7XHJcblxyXG5jb25zdCBOZnRMaXN0OiBGdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCB7IG5mdHMgfSA9IHVzZUxpc3RlZE5mdHMoKTtcclxuICBjb25zb2xlLmxvZyhcIkxTS0ZKTEtTSkZMREtKRkxTREtKRkxTRCA6IFwiICsgbmZ0cyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgbWF4LXctbGcgbXgtYXV0byBncmlkIGdhcC01IGxnOmdyaWQtY29scy0zIGxnOm1heC13LW5vbmVcIj5cclxuICAgICAge25mdHMuZGF0YT8ubWFwKChuZnQpID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e25mdC5tZXRhLmltYWdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByb3VuZGVkLWxnIHNoYWRvdy1sZyBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxOZnRJdGVtIGl0ZW09e25mdH0gYnV5TmZ0PXtuZnRzLmJ1eU5mdH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmZ0TGlzdDtcclxuIl0sIm5hbWVzIjpbInVzZUxpc3RlZE5mdHMiLCJOZnRJdGVtIiwiTmZ0TGlzdCIsIm5mdHMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YSIsIm1hcCIsIm5mdCIsIml0ZW0iLCJidXlOZnQiLCJtZXRhIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/product/list/index.tsx\n");

/***/ })

});