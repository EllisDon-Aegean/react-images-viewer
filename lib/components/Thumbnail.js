'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-position: center;\n  background-size: cover;\n  border-radius: 2px;\n  box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .2);\n  cursor: pointer;\n  display: inline-block;\n  height: ', ';\n  margin: ', ';\n  overflow: hidden;\n  width: ', ';\n  box-shadow: ', ';\n'], ['\n  background-position: center;\n  background-size: cover;\n  border-radius: 2px;\n  box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .2);\n  cursor: pointer;\n  display: inline-block;\n  height: ', ';\n  margin: ', ';\n  overflow: hidden;\n  width: ', ';\n  box-shadow: ', ';\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _fallbackImages = require('../constants/fallback-images');

var _fallbackImages2 = _interopRequireDefault(_fallbackImages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Thumbnail(_ref) {
  var index = _ref.index,
      src = _ref.src,
      thumbnail = _ref.thumbnail,
      active = _ref.active,
      _onClick = _ref.onClick,
      theme = _ref.theme;

  var url = thumbnail || src;

  (0, _react.useEffect)(function () {
    var img = new Image();
    img.onerror = handleImgError;
    img.src = url;
  }, []);

  var thumbnailDivRef = (0, _react.useRef)(null);

  var handleImgError = (0, _react.useCallback)(function () {
    if (!thumbnailDivRef.current) return;
    thumbnailDivRef.current.style.backgroundImage = 'url("' + _fallbackImages2.default.REGULAR + '")';
  }, []);

  return _react2.default.createElement(ThumbnailDiv
  // className={css(classes.thumbnail, active && classes.thumbnail__active)}
  , { active: active,
    defaults: _theme2.default,
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      _onClick(index);
    },
    ref: thumbnailDivRef,
    style: { backgroundImage: 'url("' + url + '")' }
  });
}

Thumbnail.propTypes = {
  theme: _propTypes2.default.object,
  active: _propTypes2.default.bool,
  index: _propTypes2.default.number,
  onClick: _propTypes2.default.func.isRequired,
  src: _propTypes2.default.string,
  thumbnail: _propTypes2.default.string
};

var ThumbnailDiv = _styledComponents2.default.div(_templateObject, function (props) {
  return props.defaults.thumbnail.size + "px";
}, function (props) {
  return props.defaults.thumbnail.gutter + "px";
}, function (props) {
  return props.defaults.thumbnail.size + "px";
}, function (props) {
  return props.active ? 'inset 0 0 0 2px ' + props.defaults.thumbnail.activeBorderColor : "none";
});

// const defaultStyles = {
//   thumbnail: {
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     borderRadius: 2,
//     boxShadow: 'inset 0 0 0 1px hsla(0, 0%, 100%, .2)',
//     cursor: 'pointer',
//     display: 'inline-block',
//     height: defaults.thumbnail.size,
//     margin: defaults.thumbnail.gutter,
//     overflow: 'hidden',
//     width: defaults.thumbnail.size,
//   },
//   thumbnail__active: {
//     boxShadow:`inset 0 0 0 2px ${defaults.thumbnail.activeBorderColor}`,
//   }
// }

exports.default = Thumbnail;