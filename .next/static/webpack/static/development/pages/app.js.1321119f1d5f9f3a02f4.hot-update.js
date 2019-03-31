webpackHotUpdate("static/development/pages/app.js",{

/***/ "./pages/Room_Check.js":
/*!*****************************!*\
  !*** ./pages/Room_Check.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/samiazarsheik/Desktop/learning/Sami/assessment/Assessment1/pages/Room_Check.js";



var Cust_Select = function Cust_Select(props) {
  var tobeShownOptions = props.personType === "Adults" ? [1, 2] : [0, 1, 2];
  var ageRange = props.personType === "Adults" ? "(18+)" : "(0-17)";

  var selectHandler = function selectHandler(e) {
    console.log(e.target.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2942352378" + " " + "personType",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2942352378",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.personType), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2942352378",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, ageRange), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    disabled: props.enable ? true : null,
    onChange: selectHandler,
    className: "jsx-2942352378",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, tobeShownOptions.map(function (option) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: option,
      value: option,
      className: "jsx-2942352378",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, option);
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2942352378",
    __self: this
  }, ".personType.jsx-2942352378{width:70px;height:90px;line-height:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1pYXphcnNoZWlrL0Rlc2t0b3AvbGVhcm5pbmcvU2FtaS9hc3Nlc3NtZW50L0Fzc2Vzc21lbnQxL3BhZ2VzL1Jvb21fQ2hlY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JrQixBQUdzQixXQUNDLFlBQ0ksZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9zYW1pYXphcnNoZWlrL0Rlc2t0b3AvbGVhcm5pbmcvU2FtaS9hc3Nlc3NtZW50L0Fzc2Vzc21lbnQxL3BhZ2VzL1Jvb21fQ2hlY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDdXN0X1NlbGVjdCA9IHByb3BzID0+IHtcbiAgY29uc3QgdG9iZVNob3duT3B0aW9ucyA9IHByb3BzLnBlcnNvblR5cGUgPT09IFwiQWR1bHRzXCIgPyBbMSwgMl0gOiBbMCwgMSwgMl07XG4gIGNvbnN0IGFnZVJhbmdlID0gcHJvcHMucGVyc29uVHlwZSA9PT0gXCJBZHVsdHNcIiA/IFwiKDE4KylcIiA6IFwiKDAtMTcpXCI7XG5cbiAgY29uc3Qgc2VsZWN0SGFuZGxlciA9IGUgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcnNvblR5cGVcIj5cbiAgICAgIDxwPntwcm9wcy5wZXJzb25UeXBlfTwvcD5cbiAgICAgIDxwPnthZ2VSYW5nZX08L3A+XG4gICAgICA8c2VsZWN0IGRpc2FibGVkPXtwcm9wcy5lbmFibGUgPyB0cnVlIDogbnVsbH0gb25DaGFuZ2U9e3NlbGVjdEhhbmRsZXJ9PlxuICAgICAgICB7dG9iZVNob3duT3B0aW9ucy5tYXAob3B0aW9uID0+IChcbiAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9ufSB2YWx1ZT17b3B0aW9ufT5cbiAgICAgICAgICAgIHtvcHRpb259XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wZXJzb25UeXBlIHtcbiAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gQ3VzdF9TZWxlY3QuZGVmYXVsdFByb3BzID0ge1xuLy8gICBlbmFibGU6IHRydWVcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RfU2VsZWN0O1xuIl19 */\n/*@ sourceURL=/Users/samiazarsheik/Desktop/learning/Sami/assessment/Assessment1/pages/Room_Check.js */"));
}; // Cust_Select.defaultProps = {
//   enable: true
// };


/* harmony default export */ __webpack_exports__["default"] = (Cust_Select);

/***/ })

})
//# sourceMappingURL=app.js.1321119f1d5f9f3a02f4.hot-update.js.map