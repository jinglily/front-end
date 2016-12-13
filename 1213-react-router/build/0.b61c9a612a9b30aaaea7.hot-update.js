webpackHotUpdate(0,{117:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(7);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(79);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRouter = __webpack_require__(67);\n\nvar _App = __webpack_require__(112);\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Hello Home'\n      );\n    }\n  }]);\n\n  return Home;\n}(_react2.default.Component);\n\nvar Users = function (_React$Component2) {\n  _inherits(Users, _React$Component2);\n\n  function Users() {\n    _classCallCheck(this, Users);\n\n    return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).apply(this, arguments));\n  }\n\n  _createClass(Users, [{\n    key: 'render',\n    value: function render() {\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Hello Users'\n      );\n    }\n  }]);\n\n  return Users;\n}(_react2.default.Component);\n\nvar Routers = function (_Component) {\n  _inherits(Routers, _Component);\n\n  function Routers() {\n    _classCallCheck(this, Routers);\n\n    return _possibleConstructorReturn(this, (Routers.__proto__ || Object.getPrototypeOf(Routers)).apply(this, arguments));\n  }\n\n  _createClass(Routers, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _reactRouter.Router,\n        { history: _reactRouter.browserHistory },\n        _react2.default.createElement(\n          _reactRouter.Route,\n          { path: '/', component: _App2.default },\n          _react2.default.createElement(_reactRouter.Route, { path: '/home', component: Home }),\n          _react2.default.createElement(_reactRouter.Route, { path: '/users', component: Users })\n        )\n      );\n    }\n  }]);\n\n  return Routers;\n}(_react.Component);\n\nexports.default = Routers;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/routers.js\n// module id = 117\n// module chunks = 0\n//# sourceURL=webpack:///./src/routers.js?")}});