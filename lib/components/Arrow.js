"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(["\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  outline: none;\n  padding: 10px; // increase hit area\n  position: absolute;\n  top: 50%;\n\n  // disable user select\n  -webkit-touch-callout: none;\n  user-select: none;\n\n  right: ", ";\n  left: ", ";\n\n  height: ", ";\n  margin-top: ", ";\n  width: 40px;\n\n  @media (min-width: 768px) {\n    width: 70,\n  };\n"], ["\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  outline: none;\n  padding: 10px; // increase hit area\n  position: absolute;\n  top: 50%;\n\n  // disable user select\n  -webkit-touch-callout: none;\n  user-select: none;\n\n  right: ", ";\n  left: ", ";\n\n  height: ", ";\n  margin-top: ", ";\n  width: 40px;\n\n  @media (min-width: 768px) {\n    width: 70,\n  };\n"]);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require("../theme");

var _theme2 = _interopRequireDefault(_theme);

var _Icon = require("./Icon");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ArrowButton = _styledComponents2.default.button(_templateObject, function (props) {
  return props.right ? (props.horizontalGutter || props.defaults.container.gutter.horizontal) + "px" : "none";
}, function (props) {
  return props.right ? "none" : (props.horizontalGutter || props.defaults.container.gutter.horizontal) + "px";
}, function (props) {
  return props.height + "px";
}, function (props) {
  return props.height / -2 + "px";
});

function Arrow(_ref) {
  var direction = _ref.direction,
      icon = _ref.icon,
      onClick = _ref.onClick,
      theme = _ref.theme,
      size = _ref.size,
      horizontalGutter = _ref.horizontalGutter,
      props = _objectWithoutProperties(_ref, ["direction", "icon", "onClick", "theme", "size", "horizontalGutter"]);

  var height = size == "medium" ? _theme2.default.arrow.height : _theme2.default.thumbnail.size;

  return _react2.default.createElement(
    ArrowButton,
    _extends({
      type: "button" // default: submit
      , right: direction && direction == "right",
      height: height,
      onClick: onClick,
      onTouchEnd: onClick,
      defaults: _theme2.default,
      horizontalGutter: horizontalGutter
    }, props),
    _react2.default.createElement(_Icon2.default, {
      fill: !!theme.arrow && theme.arrow.fill || _theme2.default.arrow.fill,
      type: icon
    })
  );
}

Arrow.propTypes = {
  theme: _propTypes2.default.object,
  direction: _propTypes2.default.oneOf(["left", "right"]),
  icon: _propTypes2.default.string,
  horizontalGutter: _propTypes2.default.number,
  onClick: _propTypes2.default.func.isRequired
};
// const defaultStyles = {
//   arrow: {
//     background: "none",
//     border: "none",
//     borderRadius: 4,
//     cursor: "pointer",
//     outline: "none",
//     padding: 10, // increase hit area
//     position: "absolute",
//     top: "50%",

//     // disable user select
//     WebkitTouchCallout: "none",
//     userSelect: "none",
//   },

//   // sizes
//   arrow__size__medium: {
//     height: defaults.arrow.height,
//     marginTop: defaults.arrow.height / -2,
//     width: 40,

//     "@media (min-width: 768px)": {
//       width: 70,
//     },
//   },
//   arrow__size__small: {
//     height: defaults.thumbnail.size,
//     marginTop: defaults.thumbnail.size / -2,
//     width: 30,

//     "@media (min-width: 500px)": {
//       width: 40,
//     },
//   },

//   // direciton
//   arrow__direction__right: {
//     right: defaults.container.gutter.horizontal,
//   },
//   arrow__direction__left: {
//     left: defaults.container.gutter.horizontal,
//   },
// };

exports.default = Arrow;