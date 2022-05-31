'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  color: ', ';\n  cursor: auto;\n  display: flex;\n  justify-content: space-between;\n  left: 0;\n  line-height: 1.3;\n  padding-top: ', 'px;\n  padding-right: ', 'px;\n  padding-bottom: ', 'px;\n  padding-left: ', 'px;\n'], ['\n  box-sizing: border-box;\n  color: ', ';\n  cursor: auto;\n  display: flex;\n  justify-content: space-between;\n  left: 0;\n  line-height: 1.3;\n  padding-top: ', 'px;\n  padding-right: ', 'px;\n  padding-bottom: ', 'px;\n  padding-left: ', 'px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: ', ';\n  font-size: ', ';\n  padding-left: 1em; // add a small gutter for the caption\n  font-family: ', ';\n'], ['\n  color: ', ';\n  font-size: ', ';\n  padding-left: 1em; // add a small gutter for the caption\n  font-family: ', ';\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterDiv = _styledComponents2.default.div(_templateObject, function (props) {
  return props.defaults.footer.color;
}, function (props) {
  return props.defaults.footer.gutter.vertical;
}, function (props) {
  return props.defaults.footer.gutter.horizontal;
}, function (props) {
  return props.defaults.footer.gutter.vertical;
}, function (props) {
  return props.defaults.footer.gutter.horizontal;
});

var FooterCountDiv = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.defaults.footer.count.color;
}, function (props) {
  return props.defaults.footer.count.fontSize;
}, function (props) {
  return props.defaults.footer.count.font;
});

function Footer(_ref) {
  var countCurr = _ref.countCurr,
      countSeparator = _ref.countSeparator,
      countTotal = _ref.countTotal,
      showCount = _ref.showCount;

  if (!showCount) return null;

  var imgCount = showCount ? _react2.default.createElement(
    FooterCountDiv,
    { defaults: _theme2.default },
    countCurr,
    countSeparator,
    countTotal
  ) : _react2.default.createElement('span', null);

  return _react2.default.createElement(
    FooterDiv,
    { defaults: _theme2.default },
    imgCount
  );
}

Footer.propTypes = {
  theme: _propTypes2.default.object,
  caption: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  countCurr: _propTypes2.default.number,
  countSeparator: _propTypes2.default.string,
  countTotal: _propTypes2.default.number,
  showCount: _propTypes2.default.bool
};

var defaultStyles = {
  footer: {
    boxSizing: 'border-box',
    color: _theme2.default.footer.color,
    cursor: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    left: 0,
    lineHeight: 1.3,
    paddingTop: _theme2.default.footer.gutter.vertical,
    paddingRight: _theme2.default.footer.gutter.horizontal,
    paddingBottom: _theme2.default.footer.gutter.vertical,
    paddingLeft: _theme2.default.footer.gutter.horizontal
  },
  footerCount: {
    color: _theme2.default.footer.count.color,
    fontSize: _theme2.default.footer.count.fontSize,
    paddingLeft: '1em' // add a small gutter for the caption
  },
  footerCaption: {
    flex: '1 1 0'
  }
};

exports.default = Footer;