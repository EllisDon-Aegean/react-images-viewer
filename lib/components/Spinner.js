'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n'], ['\n  display: flex;\n  justify-content: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  @keyframes bouncingKeyFrames {\n    0% {\n      opacity: 1;\n      transform: translateY(0);\n    }\n    100%{\n      opacity: .1;\n      transform: ', '\n    }\n  }\n\n  width: ', ';\n  height: ', ';\n  margin: ', ';\n  background: ', ';\n  border-radius: 50%;\n  animation-name: bouncingKeyFrames;\n  animation-duration: .6s;\n  animation-direction: alternate;\n  animation-iteration-count: infinite;\n  animation-delay: ', ';\n'], ['\n  @keyframes bouncingKeyFrames {\n    0% {\n      opacity: 1;\n      transform: translateY(0);\n    }\n    100%{\n      opacity: .1;\n      transform: ', '\n    }\n  }\n\n  width: ', ';\n  height: ', ';\n  margin: ', ';\n  background: ', ';\n  border-radius: 50%;\n  animation-name: bouncingKeyFrames;\n  animation-duration: .6s;\n  animation-direction: alternate;\n  animation-iteration-count: infinite;\n  animation-delay: ', ';\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Spinner = function Spinner(props) {
  //const classes = StyleSheet.create(styles(props))

  return _react2.default.createElement(
    BouncingLoaderDiv,
    null,
    _react2.default.createElement(ChildDiv, { size: props.size, color: props.color, animationDelay: "0" }),
    _react2.default.createElement(ChildDiv, { size: props.size, color: props.color, animationDelay: "0.2" }),
    _react2.default.createElement(ChildDiv, { size: props.size, color: props.color, animationDelay: "0.4" })
  );
};

Spinner.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number
};

var bouncingKeyframes = function bouncingKeyframes(size) {
  return {
    '0%': {
      opacity: 1,
      transform: 'translateY(0)'
    },
    '100%': {
      opacity: .1,
      transform: 'translateY(-' + size + 'px)'
    }
  };
};

var BouncingLoaderDiv = _styledComponents2.default.div(_templateObject);

var ChildDiv = _styledComponents2.default.div(_templateObject2, function (props) {
  return 'translateY(-' + props.size + 'px)';
}, function (props) {
  return props.size + "px";
}, function (props) {
  return props.size + "px";
}, function (props) {
  return 3 * props.size + 'px ' + .2 * props.size + 'px';
}, function (props) {
  return props.color;
}, function (props) {
  return props.animationDelay + "s";
});

var styles = function styles(_ref) {
  var color = _ref.color,
      size = _ref.size;
  return {
    bouncingLoader: {
      display: 'flex',
      justifyContent: 'center'
    },
    child: {
      width: size,
      height: size,
      margin: 3 * size + 'px ' + .2 * size + 'px',
      background: color,
      borderRadius: '50%',
      animationName: bouncingKeyframes(size),
      animationDuration: '.6s',
      animationDirection: 'alternate',
      animationIterationCount: 'infinite'
    },
    child2: {
      animationDelay: '0.2s'
    },
    child3: {
      animationDelay: '0.4s'
    }
  };
};

exports.default = Spinner;