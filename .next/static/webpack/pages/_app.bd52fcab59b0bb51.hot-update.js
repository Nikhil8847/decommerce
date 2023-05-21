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

/***/ "./components/hooks/web3/useListedNfts.ts":
/*!************************************************!*\
  !*** ./components/hooks/web3/useListedNfts.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hookFactory\": function() { return /* binding */ hookFactory; }\n/* harmony export */ });\n/* harmony import */ var C_Users_dukef_OneDrive_Desktop_decommerce_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_dukef_OneDrive_Desktop_decommerce_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_dukef_OneDrive_Desktop_decommerce_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\n\n\n\n\n\nvar hookFactory = function(param) {\n    var contract = param.contract;\n    return function() {\n        var _ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contract ? \"web3/useListedNfts\" : null, _asyncToGenerator(C_Users_dukef_OneDrive_Desktop_decommerce_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var nfts, coreNfts, i, item, tokenURI, metaRes, meta;\n            return C_Users_dukef_OneDrive_Desktop_decommerce_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        nfts = [];\n                        _ctx.next = 3;\n                        return contract.getAllNftsOnSale();\n                    case 3:\n                        coreNfts = _ctx.sent;\n                        i = 0;\n                    case 5:\n                        if (!(i < coreNfts.length)) {\n                            _ctx.next = 20;\n                            break;\n                        }\n                        item = coreNfts[i];\n                        _ctx.next = 9;\n                        return contract.tokenURI(item.tokenId);\n                    case 9:\n                        tokenURI = _ctx.sent;\n                        _ctx.next = 12;\n                        return fetch(tokenURI);\n                    case 12:\n                        metaRes = _ctx.sent;\n                        _ctx.next = 15;\n                        return metaRes.json();\n                    case 15:\n                        meta = _ctx.sent;\n                        nfts.push({\n                            price: parseFloat(ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(item.price)),\n                            tokenId: item.tokenId.toNumber(),\n                            creator: item.creator,\n                            isListed: item.isListed,\n                            meta: meta\n                        });\n                    case 17:\n                        i++;\n                        _ctx.next = 5;\n                        break;\n                    case 20:\n                        return _ctx.abrupt(\"return\", nfts);\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))), data = _ref1.data, swr = _objectWithoutProperties(_ref1, [\n            \"data\"\n        ]);\n        var _contract = contract;\n        var buyNft = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n            var _ref = _asyncToGenerator(C_Users_dukef_OneDrive_Desktop_decommerce_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(tokenId, value) {\n                var result;\n                return C_Users_dukef_OneDrive_Desktop_decommerce_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            console.log(\"Buying nft with tokenID \".concat(tokenId));\n                            _ctx.next = 4;\n                            return _contract.buyNft(tokenId, {\n                                value: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(value.toString())\n                            });\n                        case 4:\n                            result = _ctx.sent;\n                            _ctx.next = 7;\n                            return react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.promise(result.wait(), {\n                                pending: \"Processing transaction\",\n                                success: \"Nft is yours! Go to Profile page\",\n                                error: \"Processing error\"\n                            });\n                        case 7:\n                            _ctx.next = 12;\n                            break;\n                        case 9:\n                            _ctx.prev = 9;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.error(_ctx.t0.message);\n                        case 12:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        9\n                    ]\n                ]);\n            }));\n            return function(tokenId, value) {\n                return _ref.apply(this, arguments);\n            };\n        }(), [\n            _contract\n        ]);\n        return _objectSpread({}, swr, {\n            buyNft: buyNft,\n            data: data || []\n        });\n    };\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvb2tzL3dlYjMvdXNlTGlzdGVkTmZ0cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWdDO0FBQ0k7QUFDRztBQUNkO0lBU1pJLFdBQVcsR0FDdEI7UUFBR0MsUUFBUSxTQUFSQSxRQUFRO1dBQ1gsV0FBTTtRQUNKLElBQXlCRixLQXVCeEIsR0F2QndCQSwrQ0FBTSxDQUM3QkUsUUFBUSxHQUFHLG9CQUFvQixHQUFHLElBQUksRUFDdEMsMExBQVk7Z0JBQ0pDLElBQUksRUFDSkMsUUFBUSxFQUVMQyxDQUFDLEVBQ0ZDLElBQUksRUFDSkMsUUFBUSxFQUNSQyxPQUFPLEVBQ1BDLElBQUk7Ozs7d0JBUE5OLElBQUksR0FBRyxFQUFFLENBQVU7OytCQUNGRCxRQUFRLENBQUVRLGdCQUFnQixFQUFFOzt3QkFBN0NOLFFBQVEsWUFBcUM7d0JBRTFDQyxDQUFDLEdBQUcsQ0FBQzs7NEJBQUVBLENBQUFBLENBQUFBLENBQUMsR0FBR0QsUUFBUSxDQUFDTyxNQUFNOzs7O3dCQUMzQkwsSUFBSSxHQUFHRixRQUFRLENBQUNDLENBQUMsQ0FBQyxDQUFDOzsrQkFDRkgsUUFBUSxDQUFFSyxRQUFRLENBQUNELElBQUksQ0FBQ00sT0FBTyxDQUFDOzt3QkFBakRMLFFBQVEsWUFBeUM7OytCQUNqQ00sS0FBSyxDQUFDTixRQUFRLENBQUM7O3dCQUEvQkMsT0FBTyxZQUF3Qjs7K0JBQ2xCQSxPQUFPLENBQUNNLElBQUksRUFBRTs7d0JBQTNCTCxJQUFJLFlBQXVCO3dCQUVqQ04sSUFBSSxDQUFDWSxJQUFJLENBQUM7NEJBQ1JDLEtBQUssRUFBRUMsVUFBVSxDQUFDcEIsNERBQXdCLENBQUNTLElBQUksQ0FBQ1UsS0FBSyxDQUFDLENBQUM7NEJBQ3ZESixPQUFPLEVBQUVOLElBQUksQ0FBQ00sT0FBTyxDQUFDUSxRQUFRLEVBQUU7NEJBQ2hDQyxPQUFPLEVBQUVmLElBQUksQ0FBQ2UsT0FBTzs0QkFDckJDLFFBQVEsRUFBRWhCLElBQUksQ0FBQ2dCLFFBQVE7NEJBQ3ZCYixJQUFJLEVBQUpBLElBQUk7eUJBQ0wsQ0FBQyxDQUFDOzt3QkFaZ0NKLENBQUMsRUFBRTs7OztxREFlakNGLElBQUk7Ozs7OztTQUNaLEdBQ0YsRUF2QkssSUFBTSxHQUFhSCxLQXVCeEIsQ0F2Qk91QixJQUFJLEVBQUtDLEdBQUcsNEJBQUt4QixLQXVCeEI7WUF2Qk91QixNQUFJO1VBdUJWO1FBRUYsSUFBTUUsU0FBUyxHQUFHdkIsUUFBUTtRQUMxQixJQUFNd0IsTUFBTSxHQUFHNUIsa0RBQVc7dUJBQ3hCLHdMQUFPYyxPQUFlLEVBQUVlLEtBQWEsRUFBSztvQkFHaENDLE1BQU07Ozs7OzRCQURaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQywwQkFBeUIsQ0FBWSxPQUFWbEIsT0FBTyxDQUFJLENBQUMsQ0FBQzs7bUNBQy9CYSxTQUFTLENBQUVDLE1BQU0sQ0FBQ2QsT0FBTyxFQUFFO2dDQUM5Q2UsS0FBSyxFQUFFOUIsMkRBQXVCLENBQUM4QixLQUFLLENBQUNLLFFBQVEsRUFBRSxDQUFDOzZCQUNqRCxDQUFDOzs0QkFGSUosTUFBTSxZQUVWOzttQ0FFSTdCLHlEQUFhLENBQUM2QixNQUFNLENBQUVNLElBQUksRUFBRSxFQUFFO2dDQUNsQ0MsT0FBTyxFQUFFLHdCQUF3QjtnQ0FDakNDLE9BQU8sRUFBRSxrQ0FBa0M7Z0NBQzNDQyxLQUFLLEVBQUUsa0JBQWtCOzZCQUMxQixDQUFDOzs7Ozs7OzRCQUVGUixPQUFPLENBQUNRLEtBQUssQ0FBQ0MsUUFBRUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O2FBRTVCOzRCQWZNM0IsT0FBZSxFQUFFZSxLQUFhOzs7YUFnQnJDO1lBQUNGLFNBQVM7U0FBQyxDQUNaO1FBRUQsT0FBTyxrQkFDRkQsR0FBRztZQUNORSxNQUFNLEVBQU5BLE1BQU07WUFDTkgsSUFBSSxFQUFFQSxJQUFJLElBQUksRUFBRTtVQUNqQixDQUFDO0tBQ0g7Q0FBQTtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9va3Mvd2ViMy91c2VMaXN0ZWROZnRzLnRzP2Q2MmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3J5cHRvSG9va0ZhY3RvcnkgfSBmcm9tIFwiQF90eXBlcy9ob29rc1wiO1xyXG5pbXBvcnQgeyBOZnQgfSBmcm9tIFwiQF90eXBlcy9uZnRcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbnR5cGUgVXNlTGlzdGVkTmZ0c1Jlc3BvbnNlID0ge1xyXG4gIGJ1eU5mdDogKHRva2VuOiBudW1iZXIsIHZhbHVlOiBudW1iZXIpID0+IFByb21pc2U8dm9pZD47XHJcbn07XHJcbnR5cGUgTGlzdGVkTmZ0c0hvb2tGYWN0b3J5ID0gQ3J5cHRvSG9va0ZhY3Rvcnk8TmZ0W10sIFVzZUxpc3RlZE5mdHNSZXNwb25zZT47XHJcblxyXG5leHBvcnQgdHlwZSBVc2VMaXN0ZWROZnRzSG9vayA9IFJldHVyblR5cGU8TGlzdGVkTmZ0c0hvb2tGYWN0b3J5PjtcclxuXHJcbmV4cG9ydCBjb25zdCBob29rRmFjdG9yeTogTGlzdGVkTmZ0c0hvb2tGYWN0b3J5ID1cclxuICAoeyBjb250cmFjdCB9KSA9PlxyXG4gICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgLi4uc3dyIH0gPSB1c2VTV1IoXHJcbiAgICAgIGNvbnRyYWN0ID8gXCJ3ZWIzL3VzZUxpc3RlZE5mdHNcIiA6IG51bGwsXHJcbiAgICAgIGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZnRzID0gW10gYXMgTmZ0W107XHJcbiAgICAgICAgY29uc3QgY29yZU5mdHMgPSBhd2FpdCBjb250cmFjdCEuZ2V0QWxsTmZ0c09uU2FsZSgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvcmVOZnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBpdGVtID0gY29yZU5mdHNbaV07XHJcbiAgICAgICAgICBjb25zdCB0b2tlblVSSSA9IGF3YWl0IGNvbnRyYWN0IS50b2tlblVSSShpdGVtLnRva2VuSWQpO1xyXG4gICAgICAgICAgY29uc3QgbWV0YVJlcyA9IGF3YWl0IGZldGNoKHRva2VuVVJJKTtcclxuICAgICAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCBtZXRhUmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgICBuZnRzLnB1c2goe1xyXG4gICAgICAgICAgICBwcmljZTogcGFyc2VGbG9hdChldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoaXRlbS5wcmljZSkpLFxyXG4gICAgICAgICAgICB0b2tlbklkOiBpdGVtLnRva2VuSWQudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgY3JlYXRvcjogaXRlbS5jcmVhdG9yLFxyXG4gICAgICAgICAgICBpc0xpc3RlZDogaXRlbS5pc0xpc3RlZCxcclxuICAgICAgICAgICAgbWV0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5mdHM7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgX2NvbnRyYWN0ID0gY29udHJhY3Q7XHJcbiAgICBjb25zdCBidXlOZnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgYXN5bmMgKHRva2VuSWQ6IG51bWJlciwgdmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgQnV5aW5nIG5mdCB3aXRoIHRva2VuSUQgJHt0b2tlbklkICB9YCk7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBfY29udHJhY3QhLmJ1eU5mdCh0b2tlbklkLCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBldGhlcnMudXRpbHMucGFyc2VFdGhlcih2YWx1ZS50b1N0cmluZygpKSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UocmVzdWx0IS53YWl0KCksIHtcclxuICAgICAgICAgICAgcGVuZGluZzogXCJQcm9jZXNzaW5nIHRyYW5zYWN0aW9uXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiTmZ0IGlzIHlvdXJzISBHbyB0byBQcm9maWxlIHBhZ2VcIixcclxuICAgICAgICAgICAgZXJyb3I6IFwiUHJvY2Vzc2luZyBlcnJvclwiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbX2NvbnRyYWN0XVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zd3IsXHJcbiAgICAgIGJ1eU5mdCxcclxuICAgICAgZGF0YTogZGF0YSB8fCBbXSxcclxuICAgIH07XHJcbiAgfTtcclxuIl0sIm5hbWVzIjpbImV0aGVycyIsInVzZUNhbGxiYWNrIiwidG9hc3QiLCJ1c2VTV1IiLCJob29rRmFjdG9yeSIsImNvbnRyYWN0IiwibmZ0cyIsImNvcmVOZnRzIiwiaSIsIml0ZW0iLCJ0b2tlblVSSSIsIm1ldGFSZXMiLCJtZXRhIiwiZ2V0QWxsTmZ0c09uU2FsZSIsImxlbmd0aCIsInRva2VuSWQiLCJmZXRjaCIsImpzb24iLCJwdXNoIiwicHJpY2UiLCJwYXJzZUZsb2F0IiwidXRpbHMiLCJmb3JtYXRFdGhlciIsInRvTnVtYmVyIiwiY3JlYXRvciIsImlzTGlzdGVkIiwiZGF0YSIsInN3ciIsIl9jb250cmFjdCIsImJ1eU5mdCIsInZhbHVlIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInBhcnNlRXRoZXIiLCJ0b1N0cmluZyIsInByb21pc2UiLCJ3YWl0IiwicGVuZGluZyIsInN1Y2Nlc3MiLCJlcnJvciIsImUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hooks/web3/useListedNfts.ts\n");

/***/ })

});