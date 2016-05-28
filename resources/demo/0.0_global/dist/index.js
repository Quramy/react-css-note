'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _card = require('./card');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = "React and CSS";

_reactDom2.default.render(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    _card.Card,
    { title: title },
    'Hello, Component!'
  ),
  _react2.default.createElement(
    _card.Card,
    { title: title, primary: true },
    'Hello, Component!'
  )
), document.getElementById('app'));