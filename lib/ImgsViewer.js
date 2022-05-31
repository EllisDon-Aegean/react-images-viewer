"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  margin: 0px;\n  position: relative;\n  display: flex;\n  place-content: center;\n  min-height: 70vh;\n  align-items: center;\n"], ["\n  margin: 0px;\n  position: relative;\n  display: flex;\n  place-content: center;\n  min-height: 70vh;\n  align-items: center;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  // opacity animation to make spinner appear with delay\n  opacity: ", ";\n  transition: opacity .3s;\n  pointer-events: none;\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  // opacity animation to make spinner appear with delay\n  opacity: ", ";\n  transition: opacity .3s;\n  pointer-events: none;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 8000;\n  width: 100%;\n  display: flex;\n  place-content: center;\n  bottom: 3em;\n"], ["\n  position: absolute;\n  z-index: 8000;\n  width: 100%;\n  display: flex;\n  place-content: center;\n  bottom: 3em;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 33.333%;\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n  color: white;\n  cursor: pointer;\n  transition: all ease-in-out 0.1s;\n  :hover {\n    background-color: rgba(255, 255, 255, 0.6);\n  }\n  :disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"], ["\n  height: 100%;\n  width: 33.333%;\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n  color: white;\n  cursor: pointer;\n  transition: all ease-in-out 0.1s;\n  :hover {\n    background-color: rgba(255, 255, 255, 0.6);\n  }\n  :disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  display: block; // removes browser default gutter\n  height: auto;\n  margin: 0 auto; // main center on very short screens or very narrow img\n  max-width: 100%;\n\n  // disable user select\n  -webkit-touch-callout: none;\n  user-select: none;\n\n  // opacity animation on image load\n  opacity: 0;\n  transition: opacity .3s;\n\n  opacity: ", ";\n"], ["\n  display: block; // removes browser default gutter\n  height: auto;\n  margin: 0 auto; // main center on very short screens or very narrow img\n  max-width: 100%;\n\n  // disable user select\n  -webkit-touch-callout: none;\n  user-select: none;\n\n  // opacity animation on image load\n  opacity: 0;\n  transition: opacity .3s;\n\n  opacity: ", ";\n"]);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactScrolllock = require("react-scrolllock");

var _reactScrolllock2 = _interopRequireDefault(_reactScrolllock);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactZoomPanPinch = require("react-zoom-pan-pinch");

var _theme = require("./theme");

var _theme2 = _interopRequireDefault(_theme);

var _GlobalStyle = require("./components/GlobalStyle");

var _GlobalStyle2 = _interopRequireDefault(_GlobalStyle);

var _Arrow = require("./components/Arrow");

var _Arrow2 = _interopRequireDefault(_Arrow);

var _Container = require("./components/Container");

var _Container2 = _interopRequireDefault(_Container);

var _Footer = require("./components/Footer");

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require("./components/Header");

var _Header2 = _interopRequireDefault(_Header);

var _PaginatedThumbnails = require("./components/PaginatedThumbnails");

var _PaginatedThumbnails2 = _interopRequireDefault(_PaginatedThumbnails);

var _Spinner = require("./components/Spinner");

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Icon = require("./components/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _util = require("./utils/util");

var _fallbackImages = require("./constants/fallback-images");

var _fallbackImages2 = _interopRequireDefault(_fallbackImages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function normalizeSourceSet(data) {
  var sourceSet = data.srcSet || data.srcset;

  if (Array.isArray(sourceSet)) {
    return sourceSet.join();
  }

  return sourceSet;
}

var ThemeContext = _react2.default.createContext({
  theme: _theme2.default,
  toggleTheme: function toggleTheme(newTheme) {}
});

var ImgsViewer = function (_Component) {
  _inherits(ImgsViewer, _Component);

  function ImgsViewer(props) {
    _classCallCheck(this, ImgsViewer);

    var _this = _possibleConstructorReturn(this, (ImgsViewer.__proto__ || Object.getPrototypeOf(ImgsViewer)).call(this, props));

    _this.theme = (0, _util.deepMerge)(_theme2.default, _this.props.theme);
    // this.classes = StyleSheet.create(
    //   deepMerge(defaultStyles, this.props.theme)
    // );
    _this.toggleTheme = function (theme) {
      _this.setState(function () {
        return { theme: theme };
      });
    };
    _this.state = {
      imgLoaded: false,
      imgHasError: false,
      theme: _this.theme,
      toggleTheme: _this.toggleTheme
    };

    _this.transformWrapperRef = (0, _react.createRef)();

    _util.bindFunctions.call(_this, ["gotoNext", "gotoPrev", "closeBackdrop", "handleKeyboardInput", "handleImgLoaded", "handleImgError"]);
    return _this;
  }

  _createClass(ImgsViewer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        if (this.props.enableKeyboardInput) {
          window.addEventListener("keydown", this.handleKeyboardInput);
        }
        if (typeof this.props.currImg === "number") {
          this.preloadImg(this.props.currImg, this.handleImgLoaded, this.handleImgError);
        }
      }
    }
    // static getDerivedStateFromProps (nextProps, prevState) {

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (!_util.canUseDom) return;

      // const instance = this

      // always to preload imgs with both directions
      // then when user changs direction, img also show quickly
      if (nextProps.preloadNextImg) {
        var nextIdx = nextProps.currImg + 1;
        var prevIdx = nextProps.currImg - 1;
        // if (!this) return null
        this.preloadImg(prevIdx);
        this.preloadImg(nextIdx);
      }
      // preload currImg
      if (this.props.currImg !== nextProps.currImg || !this.props.isOpen && nextProps.isOpen) {
        this.preloadImgData(nextProps.imgs[nextProps.currImg], this.handleImgLoaded, this.handleImgError);
      }

      // add/remove event listeners
      if (!this.props.isOpen && nextProps.isOpen && nextProps.enableKeyboardInput) {
        window.addEventListener("keydown", this.handleKeyboardInput);
      }
      if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
        window.removeEventListener("keydown", this.handleKeyboardInput);
      }

      return null;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.enableKeyboardInput) {
        window.removeEventListener("keydown", this.handleKeyboardInput);
      }
    }

    // ====================
    // Methods
    // ====================

  }, {
    key: "preloadImg",
    value: function preloadImg(idx, onload, onerror) {
      return this.preloadImgData(this.props.imgs[idx], onload, onerror);
    }
  }, {
    key: "preloadImgData",
    value: function preloadImgData(data, onload, onerror) {
      if (!data) return;

      var img = new Image();
      var sourceSet = normalizeSourceSet(data);

      // Todo: add error handling for missing imgs
      img.onerror = onerror;
      img.onload = onload;
      img.src = data.src;

      if (sourceSet) img.srcset = sourceSet;

      return img;
    }
  }, {
    key: "gotoNext",
    value: function gotoNext(event) {
      var _props = this.props,
          currImg = _props.currImg,
          imgs = _props.imgs;
      var imgLoaded = this.state.imgLoaded;


      if (!imgLoaded || currImg === imgs.length - 1) return;

      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (this.transformWrapperRef.current) {
        this.transformWrapperRef.current.resetTransform();
      }

      this.props.onClickNext();
    }
  }, {
    key: "gotoPrev",
    value: function gotoPrev(event) {
      var currImg = this.props.currImg;
      var imgLoaded = this.state.imgLoaded;


      if (!imgLoaded || currImg === 0) return;

      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (this.transformWrapperRef.current) {
        this.transformWrapperRef.current.resetTransform();
      }

      this.props.onClickPrev();
    }
  }, {
    key: "closeBackdrop",
    value: function closeBackdrop(event) {
      if (event.target.id === "viewerBackdrop" || event.target.tagName === "FIGURE") {
        this.props.onClose();
      }
    }
  }, {
    key: "handleKeyboardInput",
    value: function handleKeyboardInput(event) {
      var keyCode = event.keyCode;

      if (keyCode === 37 || keyCode === 33 || keyCode === 38) {
        // left, pageup, up
        this.gotoPrev(event);
        return true;
      } else if (keyCode === 39 || keyCode === 34 || keyCode === 40) {
        // right, pagedown, down
        this.gotoNext(event);
        return true;
      } else if (keyCode === 27 || keyCode === 32) {
        // esc, space
        this.props.onClose();
        return true;
      }
      return false;
    }
  }, {
    key: "handleImgLoaded",
    value: function handleImgLoaded(e) {
      var imgHasError = this.state.imgHasError;

      if (e.target.src === _fallbackImages2.default.LARGE && imgHasError) {
        this.setState({ imgLoaded: true });
      } else {
        this.setState({ imgLoaded: true, imgHasError: false });
      }
    }
  }, {
    key: "handleImgError",
    value: function handleImgError(e) {
      if (e && e.target) e.target.src = _fallbackImages2.default.LARGE;
      this.setState({ imgHasError: true });
    }

    // ====================
    // Renderers
    // ====================

  }, {
    key: "renderArrowPrev",
    value: function renderArrowPrev(theme) {
      if (this.props.currImg === 0) return null;

      return _react2.default.createElement(_Arrow2.default, {
        theme: theme,
        direction: "left",
        icon: "filledArrowLeft",
        onClick: this.gotoPrev,
        title: this.props.leftArrowTitle,
        type: "button"
      });
    }
  }, {
    key: "renderArrowNext",
    value: function renderArrowNext(theme) {
      if (this.props.currImg === this.props.imgs.length - 1) return null;

      return _react2.default.createElement(_Arrow2.default, {
        theme: theme,
        direction: "right",
        icon: "filledArrowRight",
        onClick: this.gotoNext,
        title: this.props.rightArrowTitle,
        type: "button"

      });
    }
  }, {
    key: "renderDialog",
    value: function renderDialog(newState) {
      var _this2 = this;

      var _props2 = this.props,
          backdropCloseable = _props2.backdropCloseable,
          isOpen = _props2.isOpen,
          showThumbnails = _props2.showThumbnails,
          width = _props2.width;
      var imgLoaded = this.state.imgLoaded;


      if (!isOpen) return _react2.default.createElement("span", { key: "closed" });

      var offsetThumbnails = showThumbnails ? this.theme.thumbnail.size + this.theme.container.gutter.vertical : 0;

      return _react2.default.createElement(
        ThemeContext.Consumer,
        null,
        function (_ref) {
          var theme = _ref.theme,
              toggleTheme = _ref.toggleTheme;

          theme = newState.theme;
          return _react2.default.createElement(
            _Container2.default,
            {
              theme: theme,
              key: "open",
              onClick: backdropCloseable && _this2.closeBackdrop,
              onTouchEnd: backdropCloseable && _this2.closeBackdrop
            },
            _react2.default.createElement(
              _react.Fragment,
              null,
              _react2.default.createElement(
                "div",
                {
                  style: {
                    position: "relative",
                    marginBottom: offsetThumbnails,
                    maxWidth: width,
                    minWidth: "50vw",
                    minHeight: "50vh"
                  }
                },
                imgLoaded && _this2.renderHeader(theme),
                " ",
                _this2.renderImgs(theme),
                _this2.renderSpinner(),
                " ",
                imgLoaded && _this2.renderFooter(theme),
                imgLoaded && _this2.renderArrowPrev(theme),
                imgLoaded && _this2.renderArrowNext(theme)
              ),
              imgLoaded && _this2.renderThumbnails(theme),
              _this2.props.preventScroll && _react2.default.createElement(_reactScrolllock2.default, null)
            )
          );
        }
      );
    }
  }, {
    key: "renderImgs",
    value: function renderImgs(theme) {
      var _this3 = this;

      var _props3 = this.props,
          currImg = _props3.currImg,
          imgs = _props3.imgs,
          onClickImg = _props3.onClickImg,
          showThumbnails = _props3.showThumbnails;
      var _state = this.state,
          imgLoaded = _state.imgLoaded,
          imgHasError = _state.imgHasError;


      if (!imgs || !imgs.length) return null;

      var img = imgs[currImg];
      var sourceSet = normalizeSourceSet(img);
      var sizes = sourceSet ? "100vw" : null;

      var thumbnailsSize = showThumbnails ? theme.thumbnail.size : 0;
      var heightOffset = theme.header.height + theme.footer.height + thumbnailsSize + theme.container.gutter.vertical + "px";

      return _react2.default.createElement(
        Figure,
        null,
        _react2.default.createElement(
          _reactZoomPanPinch.TransformWrapper,
          { ref: this.transformWrapperRef },
          function (_ref2) {
            var zoomIn = _ref2.zoomIn,
                zoomOut = _ref2.zoomOut,
                resetTransform = _ref2.resetTransform,
                state = _ref2.state;
            return _react2.default.createElement(
              _react2.default.Fragment,
              null,
              imgLoaded && !imgHasError && _react2.default.createElement(
                Tools,
                null,
                _react2.default.createElement(
                  "div",
                  { style: {
                      borderRadius: "2px",
                      padding: "2px",
                      display: "flex",
                      background: "rgba(0, 0, 0, 0.6)",
                      height: "36px",
                      width: "108px"
                    } },
                  _react2.default.createElement(
                    ToolsButton,
                    {
                      title: "Zoom out",
                      style: { bottom: "6px" },
                      left: true,
                      onClick: function onClick() {
                        return zoomOut();
                      },
                      disabled: state.scale <= 1
                    },
                    _react2.default.createElement(_Icon2.default, { type: "minus" })
                  ),
                  _react2.default.createElement(
                    ToolsButton,
                    {
                      title: "Reset zoom",
                      borderRadius: "0px",
                      onClick: function onClick() {
                        return resetTransform();
                      },
                      disabled: state.scale === 1
                    },
                    _react2.default.createElement(_Icon2.default, { type: "resetZoom" })
                  ),
                  _react2.default.createElement(
                    ToolsButton,
                    { title: "Zoom in", right: true, onClick: function onClick() {
                        return zoomIn();
                      } },
                    _react2.default.createElement(_Icon2.default, { type: "plus" })
                  )
                )
              ),
              _react2.default.createElement(
                _reactZoomPanPinch.TransformComponent,
                null,
                _react2.default.createElement(Img, {
                  onClick: onClickImg,
                  sizes: sizes,
                  alt: img.alt,
                  src: img.src,
                  srcSet: sourceSet,
                  imgLoaded: imgLoaded,
                  onError: _this3.handleImgError,
                  style: {
                    cursor: onClickImg ? "pointer" : "auto",
                    maxHeight: "calc(100vh - " + heightOffset
                  }
                })
              )
            );
          }
        )
      );
    }
  }, {
    key: "renderThumbnails",
    value: function renderThumbnails(theme) {
      var _props4 = this.props,
          imgs = _props4.imgs,
          currImg = _props4.currImg,
          leftArrowTitle = _props4.leftArrowTitle,
          rightArrowTitle = _props4.rightArrowTitle,
          onClickThumbnail = _props4.onClickThumbnail,
          showThumbnails = _props4.showThumbnails,
          thumbnailOffset = _props4.thumbnailOffset;


      if (!showThumbnails) return null;

      return _react2.default.createElement(_PaginatedThumbnails2.default, {
        theme: theme,
        leftTitle: leftArrowTitle,
        rightTitle: rightArrowTitle,
        currImg: currImg,
        imgs: imgs,
        offset: thumbnailOffset,
        onClickThumbnail: onClickThumbnail
      });
    }
  }, {
    key: "renderHeader",
    value: function renderHeader(theme) {
      var _props5 = this.props,
          imgs = _props5.imgs,
          currImg = _props5.currImg,
          closeBtnTitle = _props5.closeBtnTitle,
          customControls = _props5.customControls,
          onClose = _props5.onClose,
          showCloseBtn = _props5.showCloseBtn;


      return _react2.default.createElement(_Header2.default, {
        theme: theme,
        customControls: customControls,
        onClose: onClose,
        caption: imgs[currImg].caption,
        showCloseBtn: showCloseBtn,
        closeBtnTitle: closeBtnTitle
      });
    }
  }, {
    key: "renderFooter",
    value: function renderFooter(theme) {
      var _props6 = this.props,
          currImg = _props6.currImg,
          imgs = _props6.imgs,
          imgCountSeparator = _props6.imgCountSeparator,
          showImgCount = _props6.showImgCount;


      if (!imgs || !imgs.length) return null;

      return _react2.default.createElement(_Footer2.default, {
        theme: theme,
        countCurr: currImg + 1,
        countSeparator: imgCountSeparator,
        countTotal: imgs.length,
        showCount: showImgCount
      });
    }
  }, {
    key: "renderSpinner",
    value: function renderSpinner() {
      var _props7 = this.props,
          spinner = _props7.spinner,
          spinnerDisabled = _props7.spinnerDisabled,
          spinnerColor = _props7.spinnerColor,
          spinnerSize = _props7.spinnerSize;
      var imgLoaded = this.state.imgLoaded;

      var Spinner = spinner;
      if (spinnerDisabled) return null;
      return _react2.default.createElement(
        SpinnerDiv,
        {
          spinnerActive: !imgLoaded
        },
        _react2.default.createElement(Spinner, { color: spinnerColor, size: spinnerSize })
      );
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        ThemeContext.Provider,
        { value: this.state },
        _react2.default.createElement(_GlobalStyle2.default, null),
        this.renderDialog(this.state)
      );
    }
  }]);

  return ImgsViewer;
}(_react.Component);

ImgsViewer.propTypes = {
  backdropCloseable: _propTypes2.default.bool,
  closeBtnTitle: _propTypes2.default.string,
  currImg: _propTypes2.default.number,
  customControls: _propTypes2.default.arrayOf(_propTypes2.default.node),
  enableKeyboardInput: _propTypes2.default.bool,
  imgCountSeparator: _propTypes2.default.string,
  imgs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    src: _propTypes2.default.string.isRequired,
    srcSet: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
    caption: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    thumbnail: _propTypes2.default.string,
    alt: _propTypes2.default.string
  })).isRequired,
  isOpen: _propTypes2.default.bool,
  leftArrowTitle: _propTypes2.default.string,
  onClickImg: _propTypes2.default.func,
  onClickNext: _propTypes2.default.func,
  onClickPrev: _propTypes2.default.func,
  onClickThumbnail: _propTypes2.default.func,
  onClose: _propTypes2.default.func.isRequired,
  preloadNextImg: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  rightArrowTitle: _propTypes2.default.string,
  showCloseBtn: _propTypes2.default.bool,
  showImgCount: _propTypes2.default.bool,
  showThumbnails: _propTypes2.default.bool,
  spinnerDisabled: _propTypes2.default.bool,
  spinner: _propTypes2.default.func,
  spinnerColor: _propTypes2.default.string,
  spinnerSize: _propTypes2.default.number,
  theme: _propTypes2.default.object,
  thumbnailOffset: _propTypes2.default.number,
  width: _propTypes2.default.number
};
ImgsViewer.defaultProps = {
  currImg: 0,
  enableKeyboardInput: true,
  imgCountSeparator: " / ",
  onClickShowNextImg: true,
  preloadNextImg: true,
  preventScroll: true,
  showCloseBtn: true,
  showImgCount: true,
  spinnerDisabled: false,
  spinner: _Spinner2.default,
  spinnerColor: "#fff",
  spinnerSize: 50,
  theme: {},
  thumbnailOffset: 2,
  width: 1024
};

var Figure = _styledComponents2.default.figure(_templateObject);

var SpinnerDiv = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.spinnerActive ? 1 : 0;
});

var Tools = _styledComponents2.default.div(_templateObject3);

var ToolsButton = _styledComponents2.default.button(_templateObject4);

var Img = _styledComponents2.default.img(_templateObject5, function (props) {
  return props.imgLoaded && "1";
});

exports.default = ImgsViewer;