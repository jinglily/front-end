webpackHotUpdate(0,{110:function(module,exports,__webpack_require__){eval('\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(8);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(218);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \'render\',\n    value: function render() {\n\n      return _react2.default.createElement(\n        \'div\',\n        null,\n        \'hello world!\',\n        this.props.children,\n        _react2.default.createElement(\n          _reactRouter.Link,\n          { to: \'./home\' },\n          \'Home\'\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nexports.default = App;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/App.js\n// module id = 110\n// module chunks = 0\n//# sourceURL=webpack:///./src/App.js?')}});