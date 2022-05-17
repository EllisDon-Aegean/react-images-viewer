'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    align-items: center;\n    background: ', ';\n    box-sizing: border-box;\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    left: 0;\n    padding-top: ', 'px;\n    padding-right: ', 'px;\n    padding-bottom: ', 'px;\n    padding-left: ', 'px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: ', ';\n  '], ['\n    align-items: center;\n    background: ', ';\n    box-sizing: border-box;\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    left: 0;\n    padding-top: ', 'px;\n    padding-right: ', 'px;\n    padding-bottom: ', 'px;\n    padding-left: ', 'px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: ', ';\n  ']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _util = require('../utils/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerDiv = _styledComponents2.default.div(_templateObject, function (props) {
  return props.defaults.container.background;
}, function (props) {
  return props.defaults.container.gutter.vertical;
}, function (props) {
  return props.defaults.container.gutter.horizontal;
}, function (props) {
  return props.defaults.container.gutter.vertical;
}, function (props) {
  return props.defaults.container.gutter.horizontal;
}, function (props) {
  return props.defaults.container.zIndex;
});

function Container(props) {
  var classes = _noImportant.StyleSheet.create((0, _util.deepMerge)(defaultStyles, props.theme));

  return (
    // <div
    //   id="viewerBackdrop"
    //   className={css(classes.container)}
    //   {...props}
    // />
    _react2.default.createElement(ContainerDiv, _extends({ defaults: _theme2.default, id: 'viewerBackdrop' }, props))
  );
}

Container.propTypes = {
  theme: _propTypes2.default.object
};

var defaultStyles = {
  container: {
    alignItems: 'center',
    backdropColor: _theme2.default.container.background,
    boxSizing: 'border-box',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    paddingTop: _theme2.default.container.gutter.vertical,
    paddingRight: _theme2.default.container.gutter.horizontal,
    paddingBottom: _theme2.default.container.gutter.vertical,
    paddingLeft: _theme2.default.container.gutter.horizontal,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: _theme2.default.container.zIndex
  }
};

exports.default = Container;