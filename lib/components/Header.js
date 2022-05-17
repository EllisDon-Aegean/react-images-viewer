'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _util = require('../utils/util');

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Header(_ref) {
  var caption = _ref.caption,
      customControls = _ref.customControls,
      onClose = _ref.onClose,
      showCloseBtn = _ref.showCloseBtn,
      closeBtnTitle = _ref.closeBtnTitle,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['caption', 'customControls', 'onClose', 'showCloseBtn', 'closeBtnTitle', 'theme']);

  var classes = _noImportant.StyleSheet.create((0, _util.deepMerge)(defaultStyles, theme));

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _noImportant.css)(classes.header) }, props),
    !!showCloseBtn && _react2.default.createElement(
      'div',
      { className: (0, _noImportant.css)(classes.titlediv) },
      _react2.default.createElement(
        'button',
        {
          title: closeBtnTitle,
          className: (0, _noImportant.css)(classes.close),
          onClick: onClose
        },
        _react2.default.createElement(_Icon2.default, { fill: !!theme.close && theme.close.fill || _theme2.default.close.fill, type: 'close' })
      ),
      _react2.default.createElement(
        'span',
        { className: (0, _noImportant.css)(classes.title) },
        caption
      )
    ),
    customControls ? _react2.default.createElement(
      'div',
      { className: (0, _noImportant.css)(classes.controls) },
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

var defaultStyles = {
  header: {
    display: 'flex',
    height: _theme2.default.header.height,
    position: 'relative',
    width: '65vw'
  },
  controls: {
    position: 'absolute',
    right: '0px'
  },
  titlediv: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    verticalAlign: 'middle',
    color: _theme2.default.footer.count.color,
    display: 'inline-block'
  },
  close: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    position: 'relative',
    top: 0,
    verticalAlign: 'bottom',
    zIndex: 1,

    // increase hit area
    height: 40,
    padding: 10,
    width: 40
  }
};

exports.default = Header;