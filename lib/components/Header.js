'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  height: ', ';\n  position: relative;\n  width: 65vw;\n'], ['\n  display: flex;\n  height: ', ';\n  position: relative;\n  width: 65vw;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  right: 0px;\n'], ['\n  position: absolute;\n  right: 0px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n'], ['\n  display: flex;\n  align-items: center;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  vertical-align: middle;\n  color: ', ';\n  display: inline-block;\n  font-family: ', ';\n'], ['\n  vertical-align: middle;\n  color: ', ';\n  display: inline-block;\n  font-family: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  top: 0px;\n  vertical-align: bottom;\n  z-index: 1;\n\n  height: 40px;\n  padding: 10px;\n  width: 40px;\n'], ['\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  top: 0px;\n  vertical-align: bottom;\n  z-index: 1;\n\n  height: 40px;\n  padding: 10px;\n  width: 40px;\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Header(_ref) {
  var caption = _ref.caption,
      customControls = _ref.customControls,
      onClose = _ref.onClose,
      showCloseBtn = _ref.showCloseBtn,
      closeBtnTitle = _ref.closeBtnTitle,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['caption', 'customControls', 'onClose', 'showCloseBtn', 'closeBtnTitle', 'theme']);

  //const classes = StyleSheet.create(deepMerge(defaultStyles, theme))

  return _react2.default.createElement(
    HeaderDiv,
    _extends({ defaults: _theme2.default }, props),
    !!showCloseBtn && _react2.default.createElement(
      TitleDiv,
      null,
      _react2.default.createElement(
        CloseButton,
        {
          title: closeBtnTitle,
          onClick: onClose
        },
        _react2.default.createElement(_Icon2.default, { fill: !!theme.close && theme.close.fill || _theme2.default.close.fill, type: 'close' })
      ),
      _react2.default.createElement(
        Title,
        { defaults: _theme2.default },
        caption
      )
    ),
    customControls ? _react2.default.createElement(
      ControlsDiv,
      null,
      customControls
    ) : _react2.default.createElement('span', null)
  );
}

Header.propTypes = {
  theme: _propTypes2.default.object,
  customControls: _propTypes2.default.array,
  onClose: _propTypes2.default.func.isRequired,
  showCloseBtn: _propTypes2.default.bool,
  closeBtnTitle: _propTypes2.default.string,
  caption: _propTypes2.default.string
};

var HeaderDiv = _styledComponents2.default.div(_templateObject, function (props) {
  return props.defaults.header.height;
});

var ControlsDiv = _styledComponents2.default.div(_templateObject2);

var TitleDiv = _styledComponents2.default.div(_templateObject3);

var Title = _styledComponents2.default.span(_templateObject4, function (props) {
  return props.defaults.footer.count.color;
}, function (props) {
  return props.defaults.header.font;
});

var CloseButton = _styledComponents2.default.button(_templateObject5);

// const defaultStyles = {
//   header: {
//     display: 'flex',
//     height: defaults.header.height,
//     position: 'relative',
//     width: '65vw'
//   },
//   controls: {
//     position: 'absolute',
//     right: '0px'
//   },
//   titlediv: {
//     display: 'flex',
//     alignItems: 'center'
//   },
//   title: {
//     verticalAlign: 'middle',
//     color: defaults.footer.count.color,
//     display: 'inline-block',
//     fontFamily: defaults.header.font
//   },
//   close: {
//     background: 'none',
//     border: 'none',
//     cursor: 'pointer',
//     outline: 'none',
//     position: 'relative',
//     top: 0,
//     verticalAlign: 'bottom',
//     zIndex: 1,

//     // increase hit area
//     height: 40,
//     padding: 10,
//     width: 40,
//   }
// }

exports.default = Header;