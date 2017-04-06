'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\nytes\\Projects\\next-manager\\components\\view.js';
var View = exports.View = function (_React$Component) {
  (0, _inherits3.default)(View, _React$Component);

  function View(props) {
    (0, _classCallCheck3.default)(this, View);

    return (0, _possibleConstructorReturn3.default)(this, (View.__proto__ || (0, _getPrototypeOf2.default)(View)).call(this, props));
  }

  (0, _createClass3.default)(View, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: this.styles, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, this.props.children);
    }
  }, {
    key: 'styles',
    get: function get() {
      return {
        display: 'inline-block',
        border: '1px solid gray',
        padding: '15px',
        minWidth: '320px',
        minHeight: '200px',
        boxSizing: 'border-box'
      };
    }
  }]);

  return View;
}(_react2.default.Component);