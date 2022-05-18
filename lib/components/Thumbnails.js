'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  bottom: ', ';\n  color: #fff;\n  height: ', ';\n  left: ', ';\n  overflow-x: scroll;\n  overflow-y: hidden;\n  position: absolute;\n  right: ', ';\n  text-align: center;\n  white-space: nowrap;\n'], ['\n  bottom: ', ';\n  color: #fff;\n  height: ', ';\n  left: ', ';\n  overflow-x: scroll;\n  overflow-y: hidden;\n  position: absolute;\n  right: ', ';\n  text-align: center;\n  white-space: nowrap;\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Thumbnail = require('./Thumbnail');

var _Thumbnail2 = _interopRequireDefault(_Thumbnail);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Thumbnails(_ref) {
  var currImg = _ref.currImg,
      imgs = _ref.imgs,
      onClickThumbnail = _ref.onClickThumbnail;

  return _react2.default.createElement(
    ThumbnailsDiv,
    { defaults: _theme2.default },
    imgs.map(function (img, idx) {
      _react2.default.createElement(_Thumbnail2.default, _extends({}, img, {
        active: idx === currImg,
        index: idx,
        key: idx,
        onClick: onClickThumbnail
      }));
    })
  );
}

Thumbnails.propTypes = {
  currImg: _propTypes2.default.number,
  imgs: _propTypes2.default.array,
  onClickThumbnail: _propTypes2.default.func.isRequired
};

var ThumbnailsDiv = _styledComponents2.default.div(_templateObject, function (props) {
  return props.defaults.container.gutter.vertical;
}, function (props) {
  return props.defaults.thumbnail.height;
}, function (props) {
  return props.defaults.container.gutter.horizontal;
}, function (props) {
  return props.defaults.container.gutter.horizontal;
});

// const classes = StyleSheet.create({
//   Thumbnails: {
//     bottom: defaults.container.gutter.vertical,
//     color: '#fff',
//     height: defaults.thumbnail.height,
//     left: defaults.container.gutter.horizontal,
//     overflowX: 'scroll',
//     overflowY: 'hidden',
//     position: 'absolute',
//     right: defaults.container.gutter.horizontal,
//     textAlign: 'center',
//     whiteSpace: 'nowrap',
//   }
// })

exports.default = Thumbnails;