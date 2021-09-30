"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import '@babel/polyfill'
// import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
var Module = /*#__PURE__*/function (_React$Component) {
  _inherits(Module, _React$Component);

  var _super = _createSuper(Module);

  function Module(props) {
    var _this;

    _classCallCheck(this, Module);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "changeAcive", function (e) {
      var isShow = _this.state.isShow;

      _this.setState({
        isShow: e.target.innerText
      }, function () {
        // 重新发送api
        _this.getListData();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getListData", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this$state, isShow, titles;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, isShow = _this$state.isShow, titles = _this$state.titles;
              titles.map(function (item) {
                if (item.name == isShow) {
                  document.getElementById('loadingDiv').style.display = ""; // 发送请求

                  axios.get("".concat(item.path)).then(function (res) {
                    if (res.status == 200) {
                      document.getElementById('loadingDiv').style.display = "none";

                      _this.setState({
                        list: res.data.items
                      });
                    }
                  })["catch"](function (err) {
                    console.log('err', err); // 捕获异常

                    alert('请求已经达到上限');
                  });
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.state = {
      list: [],
      isShow: 'All',
      titles: [{
        name: 'All',
        path: 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories'
      }, {
        name: 'JavaScript',
        path: 'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories'
      }, {
        name: 'Ruby',
        path: 'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories'
      }, {
        name: 'Java',
        path: 'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories'
      }, {
        name: 'CSS',
        path: 'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories'
      }]
    };
    return _this;
  } // 切换 title 选项


  _createClass(Module, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getListData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          list = _this$state2.list,
          titles = _this$state2.titles,
          isShow = _this$state2.isShow;
      var newDiv = list.map(function (item, index) {
        return /*#__PURE__*/React.createElement("div", {
          className: "productOne",
          key: item.id
        }, /*#__PURE__*/React.createElement("span", null, " #", index + 1, " "), /*#__PURE__*/React.createElement("div", {
          className: "titleImg"
        }, /*#__PURE__*/React.createElement("img", {
          src: item.owner.avatar_url,
          alt: ""
        })), /*#__PURE__*/React.createElement("p", null, " ", item.name, " "), /*#__PURE__*/React.createElement("div", {
          className: "titleInfo"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
          className: "fa fa-user icon1",
          "aria-hidden": "true"
        }), /*#__PURE__*/React.createElement("b", null, item.name)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
          className: "fa fa-star icon2",
          "aria-hidden": "true"
        }), item.stargazers_count, " starts"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
          className: "fa fa-share-alt icon3",
          "aria-hidden": "true"
        }), item.forks_count, " forks"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
          className: "fa fa-exclamation-triangle icon4",
          "aria-hidden": "true"
        }), item.open_issues_count, " open issues")));
      });
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "title"
      }, /*#__PURE__*/React.createElement("ul", null, titles.map(function (item) {
        return /*#__PURE__*/React.createElement("li", {
          key: item.name,
          className: item.name == isShow ? 'active' : '',
          onClick: _this2.changeAcive
        }, item.name);
      }))), /*#__PURE__*/React.createElement("div", {
        className: "mian"
      }, newDiv));
    }
  }]);

  return Module;
}(React.Component);

var App = /*#__PURE__*/function (_React$Component2) {
  _inherits(App, _React$Component2);

  var _super2 = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super2.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Module, null));
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('container'));