(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('prop-types'), require('react'), require('styled-components'), require('react-scrolllock')) :
  typeof define === 'function' && define.amd ? define(['prop-types', 'react', 'styled-components', 'react-scrolllock'], factory) :
  (global.ImgsViewer = factory(global.PropTypes,global.React,global['styled-components'],global.ScrollLock));
}(this, (function (PropTypes,React,styled,ScrollLock) { 'use strict';

  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  var React__default = 'default' in React ? React['default'] : React;
  styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;
  ScrollLock = ScrollLock && ScrollLock.hasOwnProperty('default') ? ScrollLock['default'] : ScrollLock;

  // ===================
  // Theme
  // ===================

  var theme = {};

  // container
  theme.container = {
    background: 'rgba(0, 0, 0, .8)',
    gutter: {
      horizontal: 10,
      vertical: 10
    },
    zIndex: 2001

    // header
  };theme.header = {
    height: 40,
    font: "Arial"
  };
  theme.close = {
    fill: 'white'

    // footer
  };theme.footer = {
    color: '#fff',
    count: {
      color: 'rgba(255, 255, 255, .75)',
      fontSize: '.85em',
      font: "Arial"
    },
    height: 40,
    gutter: {
      horizontal: 0,
      vertical: 5
    },
    font: "Arial"

    // thumbnails
  };theme.thumbnail = {
    activeBorderColor: '#fff',
    size: 50,
    gutter: 2

    // arrow
  };theme.arrow = {
    background: 'none',
    fill: '#fff',
    height: 120
  };

  var arrowLeft = (function (fill) {
  		return "<svg fill=\"" + fill + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"0 0 512 512\" xml:space=\"preserve\">\n\t\t<path d=\"M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z\"/>\n\t</svg>";
  });

  var arrowRight = (function (fill) {
  		return "<svg fill=\"" + fill + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"0 0 512 512\" xml:space=\"preserve\">\n\t\t<path d=\"M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z\"/>\n\t</svg>";
  });

  var close = (function (fill) {
  	return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"" + fill + "\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n\t\t<path fill-rule=\"evenodd\" d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\"/>\n  \t</svg>";
  });

  var plus = (function (fill) {
     return "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"" + fill + "\">\n    <path d=\"M9 9V1.5C9 0.947715 9.44771 0.5 10 0.5C10.5523 0.5 11 0.947715 11 1.5V9H18.5C19.0523 9 19.5 9.44771 19.5 10C19.5 10.5523 19.0523 11 18.5 11H11V18.5C11 19.0523 10.5523 19.5 10 19.5C9.44771 19.5 9 19.0523 9 18.5V11H1.5C0.947715 11 0.5 10.5523 0.5 10C0.5 9.44771 0.947715 9 1.5 9H9Z\"/>\n    </svg>";
  });

  var minus = (function (fill) {
     return "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n    viewBox=\"0 0 472.615 472.615\" style=\"enable-background:new 0 0 472.615 472.615;\" xml:space=\"preserve\" fill=\"" + fill + "\">\n<g>\n   <g>\n       <rect y=\"196.923\" width=\"472.615\" height=\"78.769\"/>\n   </g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>";
  });

  var cross = (function (fill) {
     return "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"" + fill + "\">\n    <path d=\"M6.50285 7.91694L0.293015 1.70711C-0.097509 1.31658 -0.097509 0.683418 0.293015 0.292893C0.68354 -0.0976311 1.3167 -0.0976311 1.70723 0.292893L7.91707 6.50273L14.1269 0.292893C14.5174 -0.0976311 15.1506 -0.0976311 15.5411 0.292893C15.9316 0.683418 15.9316 1.31658 15.5411 1.70711L9.33128 7.91694L15.5411 14.1268C15.9316 14.5173 15.9316 15.1505 15.5411 15.541C15.1506 15.9315 14.5174 15.9315 14.1269 15.541L7.91707 9.33116L1.70723 15.541C1.3167 15.9315 0.68354 15.9315 0.293015 15.541C-0.097509 15.1505 -0.097509 14.5173 0.293015 14.1268L6.50285 7.91694Z\"/>\n    </svg>";
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var taggedTemplateLiteral = function (strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  };

  var icons = { arrowLeft: arrowLeft, arrowRight: arrowRight, close: close, plus: plus, cross: cross, minus: minus };

  var Icon = function Icon(_ref) {
    var fill = _ref.fill,
        type = _ref.type,
        props = objectWithoutProperties(_ref, ["fill", "type"]);

    var icon = icons[type];

    return React__default.createElement("span", _extends({ dangerouslySetInnerHTML: { __html: icon(fill) } }, props));
  };

  Icon.propTypes = {
    fill: PropTypes.string,
    type: PropTypes.oneOf(Object.keys(icons))
  };
  Icon.defaultProps = {
    fill: "#fff"
  };

  var _templateObject = taggedTemplateLiteral(["\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  outline: none;\n  padding: 10px; // increase hit area\n  position: absolute;\n  top: 50%;\n\n  // disable user select\n  -webkit-touch-callout: none;\n  user-select: none;\n\n  right: ", ";\n  left: ", ";\n\n  height: ", ";\n  margin-top: ", ";\n  width: 40px;\n\n  @media (min-width: 768px) {\n    width: 70,\n  };\n"], ["\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  outline: none;\n  padding: 10px; // increase hit area\n  position: absolute;\n  top: 50%;\n\n  // disable user select\n  -webkit-touch-callout: none;\n  user-select: none;\n\n  right: ", ";\n  left: ", ";\n\n  height: ", ";\n  margin-top: ", ";\n  width: 40px;\n\n  @media (min-width: 768px) {\n    width: 70,\n  };\n"]);

  var ArrowButton = styled.button(_templateObject, function (props) {
    return props.right ? props.defaults.container.gutter.horizontal + "px" : "none";
  }, function (props) {
    return props.right ? "none" : props.defaults.container.gutter.horizontal + "px";
  }, function (props) {
    return props.height + "px";
  }, function (props) {
    return props.height / -2 + "px";
  });

  function Arrow(_ref) {
    var direction = _ref.direction,
        icon = _ref.icon,
        onClick = _ref.onClick,
        theme$$1 = _ref.theme,
        size = _ref.size,
        props = objectWithoutProperties(_ref, ["direction", "icon", "onClick", "theme", "size"]);

    var height = size == "medium" ? theme.arrow.height : theme.thumbnail.size;

    return React__default.createElement(
      ArrowButton,
      _extends({
        type: "button" // default: submit
        , right: direction && direction == "right",
        height: height,
        onClick: onClick,
        onTouchEnd: onClick,
        defaults: theme
      }, props),
      React__default.createElement(Icon, {
        fill: !!theme$$1.arrow && theme$$1.arrow.fill || theme.arrow.fill,
        type: icon
      })
    );
  }

  Arrow.propTypes = {
    theme: PropTypes.object,
    direction: PropTypes.oneOf(["left", "right"]),
    icon: PropTypes.string,
    onClick: PropTypes.func.isRequired
  };

  var _templateObject$1 = taggedTemplateLiteral(['\n    align-items: center;\n    background: ', ';\n    box-sizing: border-box;\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    left: 0;\n    padding-top: ', 'px;\n    padding-right: ', 'px;\n    padding-bottom: ', 'px;\n    padding-left: ', 'px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: ', ';\n  '], ['\n    align-items: center;\n    background: ', ';\n    box-sizing: border-box;\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    left: 0;\n    padding-top: ', 'px;\n    padding-right: ', 'px;\n    padding-bottom: ', 'px;\n    padding-left: ', 'px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: ', ';\n  ']);

  var ContainerDiv = styled.div(_templateObject$1, function (props) {
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
    // const classes = StyleSheet.create(deepMerge(defaultStyles, props.theme))

    return (
      // <div
      //   id="viewerBackdrop"
      //   className={css(classes.container)}
      //   {...props}
      // />
      React__default.createElement(ContainerDiv, _extends({ defaults: theme, id: 'viewerBackdrop' }, props))
    );
  }

  Container.propTypes = {
    theme: PropTypes.object
  };

  var defaultStyles = {
    container: {
      alignItems: 'center',
      backdropColor: theme.container.background,
      boxSizing: 'border-box',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      left: 0,
      paddingTop: theme.container.gutter.vertical,
      paddingRight: theme.container.gutter.horizontal,
      paddingBottom: theme.container.gutter.vertical,
      paddingLeft: theme.container.gutter.horizontal,
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: theme.container.zIndex
    }
  };

  var _templateObject$2 = taggedTemplateLiteral(['\n    box-sizing: border-box;\n    color: ', ';\n    cursor: auto;\n    display: flex;\n    justify-content: space-between;\n    left: 0;\n    line-height: 1.3;\n    padding-top: ', 'px;\n    padding-right: ', 'px;\n    padding-bottom: ', 'px;\n    padding-left: ', 'px;\n  '], ['\n    box-sizing: border-box;\n    color: ', ';\n    cursor: auto;\n    display: flex;\n    justify-content: space-between;\n    left: 0;\n    line-height: 1.3;\n    padding-top: ', 'px;\n    padding-right: ', 'px;\n    padding-bottom: ', 'px;\n    padding-left: ', 'px;\n  ']),
      _templateObject2 = taggedTemplateLiteral(['\n    color: ', ';\n    font-size: ', ';\n    padding-left: 1em; // add a small gutter for the caption\n    font-family: ', ';\n  '], ['\n    color: ', ';\n    font-size: ', ';\n    padding-left: 1em; // add a small gutter for the caption\n    font-family: ', ';\n  ']);

  function Footer(_ref) {
    var countCurr = _ref.countCurr,
        countSeparator = _ref.countSeparator,
        countTotal = _ref.countTotal,
        showCount = _ref.showCount,
        theme$$1 = _ref.theme,
        props = objectWithoutProperties(_ref, ['countCurr', 'countSeparator', 'countTotal', 'showCount', 'theme']);

    if (!showCount) return null;

    //const classes = StyleSheet.create(deepMerge(defaultStyles, theme))

    var FooterDiv = styled.div(_templateObject$2, function (props) {
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

    var FooterCountDiv = styled.div(_templateObject2, function (props) {
      return props.defaults.footer.count.color;
    }, function (props) {
      return props.defaults.footer.count.fontSize;
    }, function (props) {
      return props.defaults.footer.count.font;
    });

    var imgCount = showCount ? React__default.createElement(
      FooterCountDiv,
      { defaults: theme },
      countCurr,
      countSeparator,
      countTotal
    ) : React__default.createElement('span', null);

    return React__default.createElement(
      FooterDiv,
      { defaults: theme },
      imgCount
    );
  }

  Footer.propTypes = {
    theme: PropTypes.object,
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    countCurr: PropTypes.number,
    countSeparator: PropTypes.string,
    countTotal: PropTypes.number,
    showCount: PropTypes.bool
  };

  var defaultStyles$1 = {
    footer: {
      boxSizing: 'border-box',
      color: theme.footer.color,
      cursor: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      left: 0,
      lineHeight: 1.3,
      paddingTop: theme.footer.gutter.vertical,
      paddingRight: theme.footer.gutter.horizontal,
      paddingBottom: theme.footer.gutter.vertical,
      paddingLeft: theme.footer.gutter.horizontal
    },
    footerCount: {
      color: theme.footer.count.color,
      fontSize: theme.footer.count.fontSize,
      paddingLeft: '1em' // add a small gutter for the caption
    },
    footerCaption: {
      flex: '1 1 0'
    }
  };

  var _templateObject$3 = taggedTemplateLiteral(['\n  display: flex;\n  height: ', ';\n  position: relative;\n  width: 100%;\n'], ['\n  display: flex;\n  height: ', ';\n  position: relative;\n  width: 100%;\n']),
      _templateObject2$1 = taggedTemplateLiteral(['\n  position: absolute;\n  right: 0px;\n'], ['\n  position: absolute;\n  right: 0px;\n']),
      _templateObject3 = taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n'], ['\n  display: flex;\n  align-items: center;\n']),
      _templateObject4 = taggedTemplateLiteral(['\n  vertical-align: middle;\n  color: ', ';\n  display: inline-block;\n  font-family: ', ';\n'], ['\n  vertical-align: middle;\n  color: ', ';\n  display: inline-block;\n  font-family: ', ';\n']),
      _templateObject5 = taggedTemplateLiteral(['\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  top: 0px;\n  vertical-align: bottom;\n  z-index: 1;\n\n  height: 40px;\n  padding: 10px;\n  width: 40px;\n'], ['\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  top: 0px;\n  vertical-align: bottom;\n  z-index: 1;\n\n  height: 40px;\n  padding: 10px;\n  width: 40px;\n']);

  function Header(_ref) {
    var caption = _ref.caption,
        customControls = _ref.customControls,
        onClose = _ref.onClose,
        showCloseBtn = _ref.showCloseBtn,
        closeBtnTitle = _ref.closeBtnTitle,
        theme$$1 = _ref.theme,
        props = objectWithoutProperties(_ref, ['caption', 'customControls', 'onClose', 'showCloseBtn', 'closeBtnTitle', 'theme']);

    //const classes = StyleSheet.create(deepMerge(defaultStyles, theme))

    return React__default.createElement(
      HeaderDiv,
      _extends({ defaults: theme }, props),
      React__default.createElement(
        InnerDiv,
        { defaults: theme },
        !!showCloseBtn && React__default.createElement(
          TitleDiv,
          null,
          React__default.createElement(
            CloseButton,
            {
              title: closeBtnTitle,
              onClick: onClose
            },
            React__default.createElement(Icon, { fill: !!theme$$1.close && theme$$1.close.fill || theme.close.fill, type: 'close' })
          ),
          React__default.createElement(
            Title,
            { defaults: theme },
            caption
          )
        ),
        customControls ? React__default.createElement(
          ControlsDiv,
          null,
          customControls
        ) : React__default.createElement('span', null)
      )
    );
  }

  Header.propTypes = {
    theme: PropTypes.object,
    customControls: PropTypes.array,
    onClose: PropTypes.func.isRequired,
    showCloseBtn: PropTypes.bool,
    closeBtnTitle: PropTypes.string,
    caption: PropTypes.string
  };

  var HeaderDiv = styled.div(_templateObject$3, function (props) {
    return props.defaults.header.height;
  });

  var InnerDiv = styled.div(_templateObject$3, function (props) {
    return props.defaults.header.height;
  });

  var ControlsDiv = styled.div(_templateObject2$1);

  var TitleDiv = styled.div(_templateObject3);

  var Title = styled.span(_templateObject4, function (props) {
    return props.defaults.footer.count.color;
  }, function (props) {
    return props.defaults.header.font;
  });

  var CloseButton = styled.button(_templateObject5);

  var _templateObject$4 = taggedTemplateLiteral(['\n  background-position: center;\n  background-size: cover;\n  border-radius: 2px;\n  box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .2);\n  cursor: pointer;\n  display: inline-block;\n  height: ', ';\n  margin: ', ';\n  overflow: hidden;\n  width: ', ';\n  box-shadow: ', ';\n'], ['\n  background-position: center;\n  background-size: cover;\n  border-radius: 2px;\n  box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .2);\n  cursor: pointer;\n  display: inline-block;\n  height: ', ';\n  margin: ', ';\n  overflow: hidden;\n  width: ', ';\n  box-shadow: ', ';\n']);

  function Thumbnail(_ref) {
    var index = _ref.index,
        src = _ref.src,
        thumbnail = _ref.thumbnail,
        active = _ref.active,
        _onClick = _ref.onClick,
        theme$$1 = _ref.theme;

    var url = thumbnail || src;
    //const classes = StyleSheet.create(deepMerge(defaultStyles, theme))

    return React__default.createElement(ThumbnailDiv
    // className={css(classes.thumbnail, active && classes.thumbnail__active)}
    , { active: active,
      defaults: theme,
      onClick: function onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        _onClick(index);
      },
      style: { backgroundImage: 'url("' + url + '")' }
    });
  }

  Thumbnail.propTypes = {
    theme: PropTypes.object,
    active: PropTypes.bool,
    index: PropTypes.number,
    onClick: PropTypes.func.isRequired,
    src: PropTypes.string,
    thumbnail: PropTypes.string
  };

  var ThumbnailDiv = styled.div(_templateObject$4, function (props) {
    return props.defaults.thumbnail.size + "px";
  }, function (props) {
    return props.defaults.thumbnail.gutter + "px";
  }, function (props) {
    return props.defaults.thumbnail.size + "px";
  }, function (props) {
    return props.active ? 'inset 0 0 0 2px ' + props.defaults.thumbnail.activeBorderColor : "none";
  });

  var _templateObject$5 = taggedTemplateLiteral(['\n  bottom: ', ';\n  height: ', ';\n  padding: 0 50px;\n  position: absolute;\n  text-align: center;\n  white-space: nowrap;\n  left: 50%;\n  transform: translateX(-50%);\n'], ['\n  bottom: ', ';\n  height: ', ';\n  padding: 0 50px;\n  position: absolute;\n  text-align: center;\n  white-space: nowrap;\n  left: 50%;\n  transform: translateX(-50%);\n']);

  // const classes = StyleSheet.create({
  //   paginatedThumbnails: {
  //     bottom: theme.container.gutter.vertical,
  //     height: theme.thumbnail.size,
  //     padding: '0 50px',
  //     position: 'absolute',
  //     textAlign: 'center',
  //     whiteSpace: 'nowrap',
  //     left: '50%',
  //     transform: 'translateX(-50%)',
  //   }
  // })

  var PaginatedThumbnailsDiv = styled.div(_templateObject$5, function (props) {
    return props.theme.container.gutter.vertical + "px";
  }, function (props) {
    return props.theme.thumbnail.size + "px";
  });

  var arrowStyles = {
    height: theme.thumbnail.size + theme.thumbnail.gutter * 2,
    width: 40
  };

  var PaginatedThumbnails = function (_Component) {
    inherits(PaginatedThumbnails, _Component);

    function PaginatedThumbnails(props) {
      classCallCheck(this, PaginatedThumbnails);

      var _this = possibleConstructorReturn(this, (PaginatedThumbnails.__proto__ || Object.getPrototypeOf(PaginatedThumbnails)).call(this, props));

      _this.state = {
        hasCustomPage: false
      };

      _this.gotoPrev = _this.gotoPrev.bind(_this);
      _this.gotoNext = _this.gotoNext.bind(_this);
      return _this;
    }

    createClass(PaginatedThumbnails, [{
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.currImg !== this.props.currImg) {
          this.setState({
            hasCustomPage: false
          });
        }
      }

      // ====================
      // Methods
      // ====================

    }, {
      key: 'getFirst',
      value: function getFirst() {
        var _props = this.props,
            currImg = _props.currImg,
            offset = _props.offset;

        if (this.state.hasCustomPage) {
          return this.clampFirst(this.state.first);
        }
        return this.clampFirst(currImg - offset);
      }
    }, {
      key: 'setFirst',
      value: function setFirst(event, newFirst) {
        var first = this.state.first;


        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }

        if (first === newFirst) return;

        this.setState({
          hasCustomPage: true,
          first: newFirst
        });
      }
    }, {
      key: 'gotoPrev',
      value: function gotoPrev(event) {
        this.setFirst(event, this.getFirst() - this.props.offset);
      }
    }, {
      key: 'gotoNext',
      value: function gotoNext(event) {
        this.setFirst(event, this.getFirst() + this.props.offset);
      }
    }, {
      key: 'clampFirst',
      value: function clampFirst(value) {
        var _props2 = this.props,
            imgs = _props2.imgs,
            offset = _props2.offset;


        var totalCount = 2 * offset + 1; // show $offset extra thumbnails on each side

        if (value < 0) {
          return 0;
        } else if (value + totalCount > imgs.length) {
          // Too far
          return imgs.length - totalCount;
        } else {
          return value;
        }
      }

      // ====================
      // Renderers
      // ====================

    }, {
      key: 'renderArrowPrev',
      value: function renderArrowPrev(theme$$1) {
        var leftTitle = this.props.leftTitle;

        if (this.getFirst() <= 0) return null;

        return React__default.createElement(Arrow, {
          theme: theme$$1,
          direction: 'left',
          size: 'small',
          icon: 'arrowLeft',
          onClick: this.gotoPrev,
          style: arrowStyles,
          title: leftTitle,
          type: 'button'
        });
      }
    }, {
      key: 'renderArrowNext',
      value: function renderArrowNext(theme$$1) {
        var _props3 = this.props,
            offset = _props3.offset,
            imgs = _props3.imgs,
            rightTitle = _props3.rightTitle;

        var totalCount = 2 * offset + 1;
        if (this.getFirst() + totalCount >= imgs.length) return null;

        return React__default.createElement(Arrow, {
          theme: theme$$1,
          direction: 'right',
          size: 'small',
          icon: 'arrowRight',
          onClick: this.gotoNext,
          style: arrowStyles,
          title: rightTitle,
          type: 'button'
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props4 = this.props,
            imgs = _props4.imgs,
            currImg = _props4.currImg,
            onClickThumbnail = _props4.onClickThumbnail,
            offset = _props4.offset,
            theme$$1 = _props4.theme;


        var totalCount = 2 * offset + 1; // show $offset extra thumbnails on each side
        var thumbnails = [];
        var baseOffset = 0;
        if (imgs.length <= totalCount) {
          thumbnails = imgs;
        } else {
          // Try to center current image in list
          baseOffset = this.getFirst();
          thumbnails = imgs.slice(baseOffset, baseOffset + totalCount);
        }

        return React__default.createElement(
          PaginatedThumbnailsDiv,
          { theme: theme$$1 },
          this.renderArrowPrev(theme$$1),
          thumbnails.map(function (img, idx) {
            return React__default.createElement(Thumbnail, _extends({
              theme: theme$$1,
              key: baseOffset + idx
            }, img, {
              index: baseOffset + idx,
              onClick: onClickThumbnail,
              active: baseOffset + idx === currImg
            }));
          }),
          this.renderArrowNext(theme$$1)
        );
      }
    }]);
    return PaginatedThumbnails;
  }(React.Component);


  PaginatedThumbnails.propTypes = {
    theme: PropTypes.object,
    leftTitle: PropTypes.string,
    rightTitle: PropTypes.string,
    currImg: PropTypes.number,
    imgs: PropTypes.array,
    offset: PropTypes.number,
    onClickThumbnail: PropTypes.func.isRequired
  };

  var _templateObject$6 = taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n'], ['\n  display: flex;\n  justify-content: center;\n']),
      _templateObject2$2 = taggedTemplateLiteral(['\n  @keyframes bouncingKeyFrames {\n    0% {\n      opacity: 1;\n      transform: translateY(0);\n    }\n    100%{\n      opacity: .1;\n      transform: ', '\n    }\n  }\n\n  width: ', ';\n  height: ', ';\n  margin: ', ';\n  background: ', ';\n  border-radius: 50%;\n  animation-name: bouncingKeyFrames;\n  animation-duration: .6s;\n  animation-direction: alternate;\n  animation-iteration-count: infinite;\n  animation-delay: ', ';\n'], ['\n  @keyframes bouncingKeyFrames {\n    0% {\n      opacity: 1;\n      transform: translateY(0);\n    }\n    100%{\n      opacity: .1;\n      transform: ', '\n    }\n  }\n\n  width: ', ';\n  height: ', ';\n  margin: ', ';\n  background: ', ';\n  border-radius: 50%;\n  animation-name: bouncingKeyFrames;\n  animation-duration: .6s;\n  animation-direction: alternate;\n  animation-iteration-count: infinite;\n  animation-delay: ', ';\n']);

  var Spinner = function Spinner(props) {
    //const classes = StyleSheet.create(styles(props))

    return React__default.createElement(
      BouncingLoaderDiv,
      null,
      React__default.createElement(ChildDiv, { size: props.size, color: props.color, animationDelay: "0" }),
      React__default.createElement(ChildDiv, { size: props.size, color: props.color, animationDelay: "0.2" }),
      React__default.createElement(ChildDiv, { size: props.size, color: props.color, animationDelay: "0.4" })
    );
  };

  Spinner.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number
  };

  var BouncingLoaderDiv = styled.div(_templateObject$6);

  var ChildDiv = styled.div(_templateObject2$2, function (props) {
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

  function deepMerge(source) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var extended = Object.assign({}, target);

    Object.keys(source).forEach(function (key) {
      if (_typeof(source[key]) !== "object" || !source[key]) {
        extended[key] = source[key];
      } else {
        if (!target[key]) {
          extended[key] = source[key];
        } else {
          extended[key] = deepMerge(target[key], source[key]);
        }
      }
    });
    return extended;
  }
  // export function deepMerge(source, target = {}) {
  //   // initialize with source styles
  //   const styles = { ...source }

  //   // massage in target styles
  //   Object.keys(target).forEach(key => {
  //     if (source[key]) {
  //       styles[key] = (rsCss, props) => {
  //         return target[key](source[key](rsCss, props), props)
  //       }
  //     } else {
  //       styles[key] = target[key]
  //     }
  //   })

  //   return styles
  // }

  var canUseDom = !!(typeof window !== "undefined" && window.document && window.document.createElement);

  /**
   * Bind multiple conponent methods:
   * @param {this} context
   * @param {Array} functions
   *
   * constructor() {
   *   ...
   *   bindFunctions.call(this, ['handleClick', 'handleOther'])
   * }
   */
  function bindFunctions(functions) {
    var _this = this;

    functions.forEach(function (f) {
      return _this[f] = _this[f].bind(_this);
    });
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
          d.__proto__ = b;
      } || function (d, b) {
          for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          }
      };
      return _extendStatics(d, b);
  };

  function __extends(d, b) {
      if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      _extendStatics(d, b);
      function __() {
          this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) {
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
          }
          return t;
      };
      return _assign.apply(this, arguments);
  };

  function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
          }
      }
      return to.concat(ar || from);
  }

  /**
   * Rounds number to given decimal
   * eg. roundNumber(2.34343, 1) => 2.3
   */
  var roundNumber = function roundNumber(num, decimal) {
      return Number(num.toFixed(decimal));
  };
  /**
   * Checks if value is number, if not it returns default value
   * 1# eg. checkIsNumber(2, 30) => 2
   * 2# eg. checkIsNumber(null, 30) => 30
   */
  var checkIsNumber = function checkIsNumber(num, defaultValue) {
      return typeof num === "number" ? num : defaultValue;
  };

  var handleCallback = function handleCallback(context, event, callback) {
      if (callback && typeof callback === "function") {
          callback(context, event);
      }
  };

  /**
   * Functions should return denominator of the target value, which is the next animation step.
   * t is a value from 0 to 1, reflecting the percentage of animation status.
   */
  var easeOut = function easeOut(t) {
      return -Math.cos(t * Math.PI) / 2 + 0.5;
  };
  // linear
  var linear = function linear(t) {
      return t;
  };
  // accelerating from zero velocity
  var easeInQuad = function easeInQuad(t) {
      return t * t;
  };
  // decelerating to zero velocity
  var easeOutQuad = function easeOutQuad(t) {
      return t * (2 - t);
  };
  // acceleration until halfway, then deceleration
  var easeInOutQuad = function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };
  // accelerating from zero velocity
  var easeInCubic = function easeInCubic(t) {
      return t * t * t;
  };
  // decelerating to zero velocity
  var easeOutCubic = function easeOutCubic(t) {
      return --t * t * t + 1;
  };
  // acceleration until halfway, then deceleration
  var easeInOutCubic = function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };
  // accelerating from zero velocity
  var easeInQuart = function easeInQuart(t) {
      return t * t * t * t;
  };
  // decelerating to zero velocity
  var easeOutQuart = function easeOutQuart(t) {
      return 1 - --t * t * t * t;
  };
  // acceleration until halfway, then deceleration
  var easeInOutQuart = function easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  };
  // accelerating from zero velocity
  var easeInQuint = function easeInQuint(t) {
      return t * t * t * t * t;
  };
  // decelerating to zero velocity
  var easeOutQuint = function easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
  };
  // acceleration until halfway, then deceleration
  var easeInOutQuint = function easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  };
  var animations = {
      easeOut: easeOut,
      linear: linear,
      easeInQuad: easeInQuad,
      easeOutQuad: easeOutQuad,
      easeInOutQuad: easeInOutQuad,
      easeInCubic: easeInCubic,
      easeOutCubic: easeOutCubic,
      easeInOutCubic: easeInOutCubic,
      easeInQuart: easeInQuart,
      easeOutQuart: easeOutQuart,
      easeInOutQuart: easeInOutQuart,
      easeInQuint: easeInQuint,
      easeOutQuint: easeOutQuint,
      easeInOutQuint: easeInOutQuint
  };

  var handleCancelAnimationFrame = function handleCancelAnimationFrame(animation) {
      if (typeof animation === "number") {
          cancelAnimationFrame(animation);
      }
  };
  var handleCancelAnimation = function handleCancelAnimation(contextInstance) {
      if (!contextInstance.mounted) return;
      handleCancelAnimationFrame(contextInstance.animation);
      // Clear animation state
      contextInstance.animate = false;
      contextInstance.animation = null;
      contextInstance.velocity = null;
  };
  function handleSetupAnimation(contextInstance, animationName, animationTime, callback) {
      if (!contextInstance.mounted) return;
      var startTime = new Date().getTime();
      var lastStep = 1;
      // if another animation is active
      handleCancelAnimation(contextInstance);
      // new animation
      contextInstance.animation = function () {
          if (!contextInstance.mounted) {
              return handleCancelAnimationFrame(contextInstance.animation);
          }
          var frameTime = new Date().getTime() - startTime;
          var animationProgress = frameTime / animationTime;
          var animationType = animations[animationName];
          var step = animationType(animationProgress);
          if (frameTime >= animationTime) {
              callback(lastStep);
              contextInstance.animation = null;
          } else if (contextInstance.animation) {
              callback(step);
              requestAnimationFrame(contextInstance.animation);
          }
      };
      requestAnimationFrame(contextInstance.animation);
  }
  function animate(contextInstance, targetState, animationTime, animationName) {
      var isValid = isValidTargetState(targetState);
      if (!contextInstance.mounted || !isValid) return;
      var setTransformState = contextInstance.setTransformState;
      var _a = contextInstance.transformState,
          scale = _a.scale,
          positionX = _a.positionX,
          positionY = _a.positionY;
      var scaleDiff = targetState.scale - scale;
      var positionXDiff = targetState.positionX - positionX;
      var positionYDiff = targetState.positionY - positionY;
      if (animationTime === 0) {
          setTransformState(targetState.scale, targetState.positionX, targetState.positionY);
      } else {
          // animation start timestamp
          handleSetupAnimation(contextInstance, animationName, animationTime, function (step) {
              var newScale = scale + scaleDiff * step;
              var newPositionX = positionX + positionXDiff * step;
              var newPositionY = positionY + positionYDiff * step;
              setTransformState(newScale, newPositionX, newPositionY);
          });
      }
  }
  function isValidTargetState(targetState) {
      var scale = targetState.scale,
          positionX = targetState.positionX,
          positionY = targetState.positionY;
      if (isNaN(scale) || isNaN(positionX) || isNaN(positionY)) {
          return false;
      }
      return true;
  }

  function getComponentsSizes(wrapperComponent, contentComponent, newScale) {
      var wrapperWidth = wrapperComponent.offsetWidth;
      var wrapperHeight = wrapperComponent.offsetHeight;
      var contentWidth = contentComponent.offsetWidth;
      var contentHeight = contentComponent.offsetHeight;
      var newContentWidth = contentWidth * newScale;
      var newContentHeight = contentHeight * newScale;
      var newDiffWidth = wrapperWidth - newContentWidth;
      var newDiffHeight = wrapperHeight - newContentHeight;
      return {
          wrapperWidth: wrapperWidth,
          wrapperHeight: wrapperHeight,
          newContentWidth: newContentWidth,
          newDiffWidth: newDiffWidth,
          newContentHeight: newContentHeight,
          newDiffHeight: newDiffHeight
      };
  }
  var getBounds = function getBounds(wrapperWidth, newContentWidth, diffWidth, wrapperHeight, newContentHeight, diffHeight, centerZoomedOut) {
      var scaleWidthFactor = wrapperWidth > newContentWidth ? diffWidth * (centerZoomedOut ? 1 : 0.5) : 0;
      var scaleHeightFactor = wrapperHeight > newContentHeight ? diffHeight * (centerZoomedOut ? 1 : 0.5) : 0;
      var minPositionX = wrapperWidth - newContentWidth - scaleWidthFactor;
      var maxPositionX = scaleWidthFactor;
      var minPositionY = wrapperHeight - newContentHeight - scaleHeightFactor;
      var maxPositionY = scaleHeightFactor;
      return { minPositionX: minPositionX, maxPositionX: maxPositionX, minPositionY: minPositionY, maxPositionY: maxPositionY };
  };
  var calculateBounds = function calculateBounds(contextInstance, newScale) {
      var wrapperComponent = contextInstance.wrapperComponent,
          contentComponent = contextInstance.contentComponent;
      var centerZoomedOut = contextInstance.setup.centerZoomedOut;
      if (!wrapperComponent || !contentComponent) {
          throw new Error("Components are not mounted");
      }
      var _a = getComponentsSizes(wrapperComponent, contentComponent, newScale),
          wrapperWidth = _a.wrapperWidth,
          wrapperHeight = _a.wrapperHeight,
          newContentWidth = _a.newContentWidth,
          newDiffWidth = _a.newDiffWidth,
          newContentHeight = _a.newContentHeight,
          newDiffHeight = _a.newDiffHeight;
      var bounds = getBounds(wrapperWidth, newContentWidth, newDiffWidth, wrapperHeight, newContentHeight, newDiffHeight, Boolean(centerZoomedOut));
      return bounds;
  };
  var handleCalculateBounds = function handleCalculateBounds(contextInstance, newScale) {
      var bounds = calculateBounds(contextInstance, newScale);
      // Save bounds
      contextInstance.bounds = bounds;
      return bounds;
  };
  function getMouseBoundedPosition(positionX, positionY, bounds, limitToBounds, paddingValueX, paddingValueY, wrapperComponent) {
      var minPositionX = bounds.minPositionX,
          minPositionY = bounds.minPositionY,
          maxPositionX = bounds.maxPositionX,
          maxPositionY = bounds.maxPositionY;
      var paddingX = 0;
      var paddingY = 0;
      if (wrapperComponent) {
          paddingX = paddingValueX;
          paddingY = paddingValueY;
      }
      var x = boundLimiter(positionX, minPositionX - paddingX, maxPositionX + paddingX, limitToBounds);
      var y = boundLimiter(positionY, minPositionY - paddingY, maxPositionY + paddingY, limitToBounds);
      return { x: x, y: y };
  }
  /**
   * Keeps value between given bounds, used for limiting view to given boundaries
   * 1# eg. boundLimiter(2, 0, 3, true) => 2
   * 2# eg. boundLimiter(4, 0, 3, true) => 3
   * 3# eg. boundLimiter(-2, 0, 3, true) => 0
   * 4# eg. boundLimiter(10, 0, 3, false) => 10
   */
  var boundLimiter = function boundLimiter(value, minBound, maxBound, isActive) {
      if (!isActive) return roundNumber(value, 2);
      if (value < minBound) return roundNumber(minBound, 2);
      if (value > maxBound) return roundNumber(maxBound, 2);
      return roundNumber(value, 2);
  };

  function handleCalculateZoomPositions(contextInstance, mouseX, mouseY, newScale, bounds, limitToBounds) {
      var _a = contextInstance.transformState,
          scale = _a.scale,
          positionX = _a.positionX,
          positionY = _a.positionY;
      var scaleDifference = newScale - scale;
      if (typeof mouseX !== "number" || typeof mouseY !== "number") {
          console.error("Mouse X and Y position were not provided!");
          return { x: positionX, y: positionY };
      }
      var calculatedPositionX = positionX - mouseX * scaleDifference;
      var calculatedPositionY = positionY - mouseY * scaleDifference;
      // do not limit to bounds when there is padding animation,
      // it causes animation strange behaviour
      var newPositions = getMouseBoundedPosition(calculatedPositionX, calculatedPositionY, bounds, limitToBounds, 0, 0, null);
      return newPositions;
  }
  function checkZoomBounds(zoom, minScale, maxScale, zoomPadding, enablePadding) {
      var scalePadding = enablePadding ? zoomPadding : 0;
      var minScaleWithPadding = minScale - scalePadding;
      if (!isNaN(maxScale) && zoom >= maxScale) return maxScale;
      if (!isNaN(minScale) && zoom <= minScaleWithPadding) return minScaleWithPadding;
      return zoom;
  }

  var isPanningStartAllowed = function isPanningStartAllowed(contextInstance, event) {
      var excluded = contextInstance.setup.panning.excluded;
      var isInitialized = contextInstance.isInitialized,
          wrapperComponent = contextInstance.wrapperComponent;
      var target = event.target;
      var isWrapperChild = wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.contains(target);
      var isAllowed = isInitialized && target && isWrapperChild;
      if (!isAllowed) return false;
      var isExcluded = isExcludedNode(target, excluded);
      if (isExcluded) return false;
      return true;
  };
  var isPanningAllowed = function isPanningAllowed(contextInstance) {
      var isInitialized = contextInstance.isInitialized,
          isPanning = contextInstance.isPanning,
          setup = contextInstance.setup;
      var disabled = setup.panning.disabled;
      var isAllowed = isInitialized && isPanning && !disabled;
      if (!isAllowed) return false;
      return true;
  };
  var handlePanningSetup = function handlePanningSetup(contextInstance, event) {
      var _a = contextInstance.transformState,
          positionX = _a.positionX,
          positionY = _a.positionY;
      contextInstance.isPanning = true;
      // Panning with mouse
      var x = event.clientX;
      var y = event.clientY;
      contextInstance.startCoords = { x: x - positionX, y: y - positionY };
  };
  var handleTouchPanningSetup = function handleTouchPanningSetup(contextInstance, event) {
      var touches = event.touches;
      var _a = contextInstance.transformState,
          positionX = _a.positionX,
          positionY = _a.positionY;
      contextInstance.isPanning = true;
      // Panning with touch
      var oneFingerTouch = touches.length === 1;
      if (oneFingerTouch) {
          var x = touches[0].clientX;
          var y = touches[0].clientY;
          contextInstance.startCoords = { x: x - positionX, y: y - positionY };
      }
  };
  function handlePanToBounds(contextInstance) {
      var _a = contextInstance.transformState,
          positionX = _a.positionX,
          positionY = _a.positionY,
          scale = _a.scale;
      var _b = contextInstance.setup,
          disabled = _b.disabled,
          limitToBounds = _b.limitToBounds,
          centerZoomedOut = _b.centerZoomedOut;
      var wrapperComponent = contextInstance.wrapperComponent;
      if (disabled || !wrapperComponent || !contextInstance.bounds) return;
      var _c = contextInstance.bounds,
          maxPositionX = _c.maxPositionX,
          minPositionX = _c.minPositionX,
          maxPositionY = _c.maxPositionY,
          minPositionY = _c.minPositionY;
      var xChanged = positionX > maxPositionX || positionX < minPositionX;
      var yChanged = positionY > maxPositionY || positionY < minPositionY;
      var mousePosX = positionX > maxPositionX ? wrapperComponent.offsetWidth : contextInstance.setup.minPositionX || 0;
      var mousePosY = positionY > maxPositionY ? wrapperComponent.offsetHeight : contextInstance.setup.minPositionY || 0;
      var _d = handleCalculateZoomPositions(contextInstance, mousePosX, mousePosY, scale, contextInstance.bounds, limitToBounds || centerZoomedOut),
          x = _d.x,
          y = _d.y;
      return {
          scale: scale,
          positionX: xChanged ? x : positionX,
          positionY: yChanged ? y : positionY
      };
  }
  function handleNewPosition(contextInstance, newPositionX, newPositionY, paddingValueX, paddingValueY) {
      var limitToBounds = contextInstance.setup.limitToBounds;
      var wrapperComponent = contextInstance.wrapperComponent,
          bounds = contextInstance.bounds;
      var _a = contextInstance.transformState,
          scale = _a.scale,
          positionX = _a.positionX,
          positionY = _a.positionY;
      var hasPositionXChanged = newPositionX !== positionX;
      var hasPositionYChanged = newPositionY !== positionY;
      var hasNewPosition = !hasPositionXChanged || !hasPositionYChanged;
      if (!wrapperComponent || hasNewPosition || !bounds) {
          return;
      }
      var _b = getMouseBoundedPosition(newPositionX, newPositionY, bounds, limitToBounds, paddingValueX, paddingValueY, wrapperComponent),
          x = _b.x,
          y = _b.y;
      contextInstance.setTransformState(scale, x, y);
  }
  var getPanningClientPosition = function getPanningClientPosition(contextInstance, clientX, clientY) {
      var startCoords = contextInstance.startCoords,
          transformState = contextInstance.transformState;
      var panning = contextInstance.setup.panning;
      var lockAxisX = panning.lockAxisX,
          lockAxisY = panning.lockAxisY;
      var positionX = transformState.positionX,
          positionY = transformState.positionY;
      if (!startCoords) {
          return { x: positionX, y: positionY };
      }
      var mouseX = clientX - startCoords.x;
      var mouseY = clientY - startCoords.y;
      var newPositionX = lockAxisX ? positionX : mouseX;
      var newPositionY = lockAxisY ? positionY : mouseY;
      return { x: newPositionX, y: newPositionY };
  };
  var getPaddingValue = function getPaddingValue(contextInstance, size) {
      var setup = contextInstance.setup,
          transformState = contextInstance.transformState;
      var scale = transformState.scale;
      var minScale = setup.minScale;
      if (size > 0 && scale >= minScale) {
          return size;
      }
      return 0;
  };

  var isVelocityCalculationAllowed = function isVelocityCalculationAllowed(contextInstance) {
      var mounted = contextInstance.mounted;
      var _a = contextInstance.setup,
          disabled = _a.disabled,
          velocityAnimation = _a.velocityAnimation;
      var scale = contextInstance.transformState.scale;
      var disabledVelocity = velocityAnimation.disabled;
      var isAllowed = !disabledVelocity || scale > 1 || !disabled || mounted;
      if (!isAllowed) return false;
      return true;
  };
  var isVelocityAllowed = function isVelocityAllowed(contextInstance) {
      var mounted = contextInstance.mounted,
          velocity = contextInstance.velocity,
          bounds = contextInstance.bounds;
      var _a = contextInstance.setup,
          disabled = _a.disabled,
          velocityAnimation = _a.velocityAnimation;
      var scale = contextInstance.transformState.scale;
      var disabledVelocity = velocityAnimation.disabled;
      var isAllowed = !disabledVelocity || scale > 1 || !disabled || mounted;
      if (!isAllowed) return false;
      if (!velocity || !bounds) return false;
      return true;
  };
  function getVelocityMoveTime(contextInstance, velocity) {
      var velocityAnimation = contextInstance.setup.velocityAnimation;
      var equalToMove = velocityAnimation.equalToMove,
          animationTime = velocityAnimation.animationTime,
          sensitivity = velocityAnimation.sensitivity;
      if (equalToMove) {
          return animationTime * velocity * sensitivity;
      }
      return animationTime;
  }
  function getVelocityPosition(newPosition, startPosition, currentPosition, isLocked, limitToBounds, minPosition, maxPosition, minTarget, maxTarget, step) {
      if (limitToBounds) {
          if (startPosition > maxPosition && currentPosition > maxPosition) {
              var calculatedPosition = maxPosition + (newPosition - maxPosition) * step;
              if (calculatedPosition > maxTarget) return maxTarget;
              if (calculatedPosition < maxPosition) return maxPosition;
              return calculatedPosition;
          }
          if (startPosition < minPosition && currentPosition < minPosition) {
              var calculatedPosition = minPosition + (newPosition - minPosition) * step;
              if (calculatedPosition < minTarget) return minTarget;
              if (calculatedPosition > minPosition) return minPosition;
              return calculatedPosition;
          }
      }
      if (isLocked) return startPosition;
      return boundLimiter(newPosition, minPosition, maxPosition, limitToBounds);
  }

  function getSizeMultiplier(wrapperComponent, equalToMove) {
      var defaultMultiplier = 1;
      if (equalToMove) {
          return Math.min(defaultMultiplier, wrapperComponent.offsetWidth / window.innerWidth);
      }
      return defaultMultiplier;
  }
  function handleCalculateVelocity(contextInstance, position) {
      var isAllowed = isVelocityCalculationAllowed(contextInstance);
      if (!isAllowed) {
          return;
      }
      var lastMousePosition = contextInstance.lastMousePosition,
          velocityTime = contextInstance.velocityTime,
          setup = contextInstance.setup;
      var wrapperComponent = contextInstance.wrapperComponent;
      var equalToMove = setup.velocityAnimation.equalToMove;
      var now = Date.now();
      if (lastMousePosition && velocityTime && wrapperComponent) {
          var sizeMultiplier = getSizeMultiplier(wrapperComponent, equalToMove);
          var distanceX = position.x - lastMousePosition.x;
          var distanceY = position.y - lastMousePosition.y;
          var velocityX = distanceX / sizeMultiplier;
          var velocityY = distanceY / sizeMultiplier;
          var interval = now - velocityTime;
          var speed = distanceX * distanceX + distanceY * distanceY;
          var velocity = Math.sqrt(speed) / interval;
          contextInstance.velocity = { velocityX: velocityX, velocityY: velocityY, total: velocity };
      }
      contextInstance.lastMousePosition = position;
      contextInstance.velocityTime = now;
  }
  function handleVelocityPanning(contextInstance) {
      var velocity = contextInstance.velocity,
          bounds = contextInstance.bounds,
          setup = contextInstance.setup,
          wrapperComponent = contextInstance.wrapperComponent;
      var isAllowed = isVelocityAllowed(contextInstance);
      if (!isAllowed || !velocity || !bounds || !wrapperComponent) {
          return;
      }
      var velocityX = velocity.velocityX,
          velocityY = velocity.velocityY,
          total = velocity.total;
      var maxPositionX = bounds.maxPositionX,
          minPositionX = bounds.minPositionX,
          maxPositionY = bounds.maxPositionY,
          minPositionY = bounds.minPositionY;
      var limitToBounds = setup.limitToBounds,
          alignmentAnimation = setup.alignmentAnimation;
      var zoomAnimation = setup.zoomAnimation,
          panning = setup.panning;
      var lockAxisY = panning.lockAxisY,
          lockAxisX = panning.lockAxisX;
      var animationType = zoomAnimation.animationType;
      var sizeX = alignmentAnimation.sizeX,
          sizeY = alignmentAnimation.sizeY,
          velocityAlignmentTime = alignmentAnimation.velocityAlignmentTime;
      var alignAnimationTime = velocityAlignmentTime;
      var moveAnimationTime = getVelocityMoveTime(contextInstance, total);
      var finalAnimationTime = Math.max(moveAnimationTime, alignAnimationTime);
      var paddingValueX = getPaddingValue(contextInstance, sizeX);
      var paddingValueY = getPaddingValue(contextInstance, sizeY);
      var paddingX = paddingValueX * wrapperComponent.offsetWidth / 100;
      var paddingY = paddingValueY * wrapperComponent.offsetHeight / 100;
      var maxTargetX = maxPositionX + paddingX;
      var minTargetX = minPositionX - paddingX;
      var maxTargetY = maxPositionY + paddingY;
      var minTargetY = minPositionY - paddingY;
      var startState = contextInstance.transformState;
      var startTime = new Date().getTime();
      handleSetupAnimation(contextInstance, animationType, finalAnimationTime, function (step) {
          var _a = contextInstance.transformState,
              scale = _a.scale,
              positionX = _a.positionX,
              positionY = _a.positionY;
          var frameTime = new Date().getTime() - startTime;
          var animationProgress = frameTime / alignAnimationTime;
          var alignAnimation = animations[alignmentAnimation.animationType];
          var alignStep = 1 - alignAnimation(Math.min(1, animationProgress));
          var customStep = 1 - step;
          var newPositionX = positionX + velocityX * customStep;
          var newPositionY = positionY + velocityY * customStep;
          var currentPositionX = getVelocityPosition(newPositionX, startState.positionX, positionX, lockAxisX, limitToBounds, minPositionX, maxPositionX, minTargetX, maxTargetX, alignStep);
          var currentPositionY = getVelocityPosition(newPositionY, startState.positionY, positionY, lockAxisY, limitToBounds, minPositionY, maxPositionY, minTargetY, maxTargetY, alignStep);
          if (positionX !== newPositionX || positionY !== newPositionY) {
              contextInstance.setTransformState(scale, currentPositionX, currentPositionY);
          }
      });
  }

  function handlePanningStart(contextInstance, event) {
      var scale = contextInstance.transformState.scale;
      handleCancelAnimation(contextInstance);
      handleCalculateBounds(contextInstance, scale);
      if (event.touches) {
          handleTouchPanningSetup(contextInstance, event);
      } else {
          handlePanningSetup(contextInstance, event);
      }
  }
  function handlePanning(contextInstance, clientX, clientY) {
      var startCoords = contextInstance.startCoords,
          setup = contextInstance.setup;
      var _a = setup.alignmentAnimation,
          sizeX = _a.sizeX,
          sizeY = _a.sizeY;
      if (!startCoords) return;
      var _b = getPanningClientPosition(contextInstance, clientX, clientY),
          x = _b.x,
          y = _b.y;
      var paddingValueX = getPaddingValue(contextInstance, sizeX);
      var paddingValueY = getPaddingValue(contextInstance, sizeY);
      handleCalculateVelocity(contextInstance, { x: x, y: y });
      handleNewPosition(contextInstance, x, y, paddingValueX, paddingValueY);
  }
  function handlePanningEnd(contextInstance) {
      if (contextInstance.isPanning) {
          var velocityDisabled = contextInstance.setup.panning.velocityDisabled;
          var velocity = contextInstance.velocity,
              wrapperComponent = contextInstance.wrapperComponent,
              contentComponent = contextInstance.contentComponent;
          contextInstance.isPanning = false;
          contextInstance.animate = false;
          contextInstance.animation = null;
          var wrapperRect = wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.getBoundingClientRect();
          var contentRect = contentComponent === null || contentComponent === void 0 ? void 0 : contentComponent.getBoundingClientRect();
          var wrapperWidth = (wrapperRect === null || wrapperRect === void 0 ? void 0 : wrapperRect.width) || 0;
          var wrapperHeight = (wrapperRect === null || wrapperRect === void 0 ? void 0 : wrapperRect.height) || 0;
          var contentWidth = (contentRect === null || contentRect === void 0 ? void 0 : contentRect.width) || 0;
          var contentHeight = (contentRect === null || contentRect === void 0 ? void 0 : contentRect.height) || 0;
          var isZoomed = wrapperWidth < contentWidth || wrapperHeight < contentHeight;
          var shouldAnimate = !velocityDisabled && velocity && (velocity === null || velocity === void 0 ? void 0 : velocity.total) > 0.1 && isZoomed;
          if (shouldAnimate) {
              handleVelocityPanning(contextInstance);
          } else {
              handleAlignToBounds(contextInstance);
          }
      }
  }
  function handleAlignToBounds(contextInstance) {
      var scale = contextInstance.transformState.scale;
      var _a = contextInstance.setup,
          minScale = _a.minScale,
          alignmentAnimation = _a.alignmentAnimation;
      var disabled = alignmentAnimation.disabled,
          sizeX = alignmentAnimation.sizeX,
          sizeY = alignmentAnimation.sizeY,
          animationTime = alignmentAnimation.animationTime,
          animationType = alignmentAnimation.animationType;
      var isDisabled = disabled || scale < minScale || !sizeX && !sizeY;
      if (isDisabled) return;
      var targetState = handlePanToBounds(contextInstance);
      if (targetState) {
          animate(contextInstance, targetState, animationTime, animationType);
      }
  }

  function handleAlignToScaleBounds(contextInstance, mousePositionX, mousePositionY) {
      var scale = contextInstance.transformState.scale;
      var wrapperComponent = contextInstance.wrapperComponent;
      var _a = contextInstance.setup,
          minScale = _a.minScale,
          limitToBounds = _a.limitToBounds,
          zoomAnimation = _a.zoomAnimation;
      var disabled = zoomAnimation.disabled,
          animationTime = zoomAnimation.animationTime,
          animationType = zoomAnimation.animationType;
      var isDisabled = disabled || scale >= minScale;
      if (scale >= 1 || limitToBounds) {
          // fire fit to bounds animation
          handleAlignToBounds(contextInstance);
      }
      if (isDisabled || !wrapperComponent || !contextInstance.mounted) return;
      var mouseX = mousePositionX || wrapperComponent.offsetWidth / 2;
      var mouseY = mousePositionY || wrapperComponent.offsetHeight / 2;
      var targetState = handleZoomToPoint(contextInstance, minScale, mouseX, mouseY);
      if (targetState) {
          animate(contextInstance, targetState, animationTime, animationType);
      }
  }
  function handleZoomToPoint(contextInstance, scale, mouseX, mouseY) {
      var _a = contextInstance.setup,
          minScale = _a.minScale,
          maxScale = _a.maxScale,
          limitToBounds = _a.limitToBounds;
      var newScale = checkZoomBounds(roundNumber(scale, 2), minScale, maxScale, 0, false);
      var bounds = handleCalculateBounds(contextInstance, newScale);
      var _b = handleCalculateZoomPositions(contextInstance, mouseX, mouseY, newScale, bounds, limitToBounds),
          x = _b.x,
          y = _b.y;
      return { scale: newScale, positionX: x, positionY: y };
  }

  var initialState = {
      previousScale: 1,
      scale: 1,
      positionX: 0,
      positionY: 0
  };
  var contextInitialState = _assign(_assign({}, initialState), { setComponents: function setComponents() {
          return undefined;
      }, contextInstance: null });
  var initialSetup = {
      disabled: false,
      minPositionX: null,
      maxPositionX: null,
      minPositionY: null,
      maxPositionY: null,
      minScale: 1,
      maxScale: 8,
      limitToBounds: true,
      centerZoomedOut: false,
      centerOnInit: false,
      wheel: {
          step: 0.2,
          disabled: false,
          wheelDisabled: false,
          touchPadDisabled: false,
          activationKeys: [],
          excluded: []
      },
      panning: {
          disabled: false,
          velocityDisabled: false,
          lockAxisX: false,
          lockAxisY: false,
          activationKeys: [],
          excluded: []
      },
      pinch: {
          step: 5,
          disabled: false,
          excluded: []
      },
      doubleClick: {
          disabled: false,
          step: 0.7,
          mode: "zoomIn",
          animationType: "easeOut",
          animationTime: 200,
          excluded: []
      },
      zoomAnimation: {
          disabled: false,
          size: 0.4,
          animationTime: 200,
          animationType: "easeOut"
      },
      alignmentAnimation: {
          disabled: false,
          sizeX: 100,
          sizeY: 100,
          animationTime: 200,
          velocityAlignmentTime: 400,
          animationType: "easeOut"
      },
      velocityAnimation: {
          disabled: false,
          sensitivity: 1,
          animationTime: 400,
          animationType: "easeOut",
          equalToMove: true
      }
  };

  var createState = function createState(props) {
      var _a, _b, _c, _d;
      return {
          previousScale: (_a = props.initialScale) !== null && _a !== void 0 ? _a : initialState.scale,
          scale: (_b = props.initialScale) !== null && _b !== void 0 ? _b : initialState.scale,
          positionX: (_c = props.initialPositionX) !== null && _c !== void 0 ? _c : initialState.positionX,
          positionY: (_d = props.initialPositionY) !== null && _d !== void 0 ? _d : initialState.positionY
      };
  };
  var createSetup = function createSetup(props) {
      var newSetup = _assign({}, initialSetup);
      Object.keys(props).forEach(function (key) {
          var validValue = typeof props[key] !== "undefined";
          var validParameter = typeof initialSetup[key] !== "undefined";
          if (validParameter && validValue) {
              var dataType = Object.prototype.toString.call(initialSetup[key]);
              var isObject = dataType === "[object Object]";
              var isArray = dataType === "[object Array]";
              if (isObject) {
                  newSetup[key] = _assign(_assign({}, initialSetup[key]), props[key]);
              } else if (isArray) {
                  newSetup[key] = __spreadArray(__spreadArray([], initialSetup[key]), props[key]);
              } else {
                  newSetup[key] = props[key];
              }
          }
      });
      return newSetup;
  };

  var handleCalculateButtonZoom = function handleCalculateButtonZoom(contextInstance, delta, step) {
      var scale = contextInstance.transformState.scale;
      var wrapperComponent = contextInstance.wrapperComponent,
          setup = contextInstance.setup;
      var maxScale = setup.maxScale,
          minScale = setup.minScale,
          zoomAnimation = setup.zoomAnimation;
      var size = zoomAnimation.size;
      if (!wrapperComponent) {
          throw new Error("Wrapper is not mounted");
      }
      var targetScale = scale * Math.exp(delta * step);
      var newScale = checkZoomBounds(roundNumber(targetScale, 3), minScale, maxScale, size, false);
      return newScale;
  };
  function handleZoomToViewCenter(contextInstance, delta, step, animationTime, animationType) {
      var wrapperComponent = contextInstance.wrapperComponent;
      var _a = contextInstance.transformState,
          scale = _a.scale,
          positionX = _a.positionX,
          positionY = _a.positionY;
      if (!wrapperComponent) return console.error("No WrapperComponent found");
      var wrapperWidth = wrapperComponent.offsetWidth;
      var wrapperHeight = wrapperComponent.offsetHeight;
      var mouseX = (wrapperWidth / 2 - positionX) / scale;
      var mouseY = (wrapperHeight / 2 - positionY) / scale;
      var newScale = handleCalculateButtonZoom(contextInstance, delta, step);
      var targetState = handleZoomToPoint(contextInstance, newScale, mouseX, mouseY);
      if (!targetState) {
          return console.error("Error during zoom event. New transformation state was not calculated.");
      }
      animate(contextInstance, targetState, animationTime, animationType);
  }
  function resetTransformations(contextInstance, animationTime, animationType) {
      var setup = contextInstance.setup,
          wrapperComponent = contextInstance.wrapperComponent;
      var limitToBounds = setup.limitToBounds;
      var initialTransformation = createState(contextInstance.props);
      var _a = contextInstance.transformState,
          scale = _a.scale,
          positionX = _a.positionX,
          positionY = _a.positionY;
      if (!wrapperComponent) return;
      var newBounds = calculateBounds(contextInstance, initialTransformation.scale);
      var boundedPositions = getMouseBoundedPosition(initialTransformation.positionX, initialTransformation.positionY, newBounds, limitToBounds, 0, 0, wrapperComponent);
      var newState = {
          scale: initialTransformation.scale,
          positionX: boundedPositions.x,
          positionY: boundedPositions.y
      };
      if (scale === initialTransformation.scale && positionX === initialTransformation.positionX && positionY === initialTransformation.positionY) {
          return;
      }
      animate(contextInstance, newState, animationTime, animationType);
  }
  function calculateZoomToNode(contextInstance, node, customZoom) {
      var wrapperComponent = contextInstance.wrapperComponent;
      var _a = contextInstance.setup,
          limitToBounds = _a.limitToBounds,
          minScale = _a.minScale,
          maxScale = _a.maxScale;
      if (!wrapperComponent) return initialState;
      var wrapperRect = wrapperComponent.getBoundingClientRect();
      var nodeRect = getOffset(node);
      var nodeLeft = nodeRect.x;
      var nodeTop = nodeRect.y;
      var nodeWidth = node.offsetWidth;
      var nodeHeight = node.offsetHeight;
      var scaleX = wrapperComponent.offsetWidth / nodeWidth;
      var scaleY = wrapperComponent.offsetHeight / nodeHeight;
      var newScale = checkZoomBounds(customZoom || Math.min(scaleX, scaleY), minScale, maxScale, 0, false);
      var offsetX = (wrapperRect.width - nodeWidth * newScale) / 2;
      var offsetY = (wrapperRect.height - nodeHeight * newScale) / 2;
      var newPositionX = (wrapperRect.left - nodeLeft) * newScale + offsetX;
      var newPositionY = (wrapperRect.top - nodeTop) * newScale + offsetY;
      var bounds = calculateBounds(contextInstance, newScale);
      var _b = getMouseBoundedPosition(newPositionX, newPositionY, bounds, limitToBounds, 0, 0, wrapperComponent),
          x = _b.x,
          y = _b.y;
      return { positionX: x, positionY: y, scale: newScale };
  }
  function getOffset(element) {
      var el = element;
      var offsetLeft = 0;
      var offsetTop = 0;
      while (el) {
          offsetLeft += el.offsetLeft;
          offsetTop += el.offsetTop;
          el = el.offsetParent;
      }
      return {
          x: offsetLeft,
          y: offsetTop
      };
  }
  function isValidZoomNode(node) {
      if (!node) {
          console.error("Zoom node not found");
          return false;
      } else if ((node === null || node === void 0 ? void 0 : node.offsetWidth) === undefined || (node === null || node === void 0 ? void 0 : node.offsetHeight) === undefined) {
          console.error("Zoom node is not valid - it must contain offsetWidth and offsetHeight");
          return false;
      }
      return true;
  }

  var zoomIn = function zoomIn(contextInstance) {
      return function (step, animationTime, animationType) {
          if (step === void 0) {
              step = 0.5;
          }
          if (animationTime === void 0) {
              animationTime = 300;
          }
          if (animationType === void 0) {
              animationType = "easeOut";
          }
          handleZoomToViewCenter(contextInstance, 1, step, animationTime, animationType);
      };
  };
  var zoomOut = function zoomOut(contextInstance) {
      return function (step, animationTime, animationType) {
          if (step === void 0) {
              step = 0.5;
          }
          if (animationTime === void 0) {
              animationTime = 300;
          }
          if (animationType === void 0) {
              animationType = "easeOut";
          }
          handleZoomToViewCenter(contextInstance, -1, step, animationTime, animationType);
      };
  };
  var setTransform = function setTransform(contextInstance) {
      return function (newPositionX, newPositionY, newScale, animationTime, animationType) {
          if (animationTime === void 0) {
              animationTime = 300;
          }
          if (animationType === void 0) {
              animationType = "easeOut";
          }
          var _a = contextInstance.transformState,
              positionX = _a.positionX,
              positionY = _a.positionY,
              scale = _a.scale;
          var wrapperComponent = contextInstance.wrapperComponent,
              contentComponent = contextInstance.contentComponent;
          var disabled = contextInstance.setup.disabled;
          if (disabled || !wrapperComponent || !contentComponent) return;
          var targetState = {
              positionX: isNaN(newPositionX) ? positionX : newPositionX,
              positionY: isNaN(newPositionY) ? positionY : newPositionY,
              scale: isNaN(newScale) ? scale : newScale
          };
          animate(contextInstance, targetState, animationTime, animationType);
      };
  };
  var resetTransform = function resetTransform(contextInstance) {
      return function (animationTime, animationType) {
          if (animationTime === void 0) {
              animationTime = 200;
          }
          if (animationType === void 0) {
              animationType = "easeOut";
          }
          resetTransformations(contextInstance, animationTime, animationType);
      };
  };
  var centerView = function centerView(contextInstance) {
      return function (scale, animationTime, animationType) {
          if (animationTime === void 0) {
              animationTime = 200;
          }
          if (animationType === void 0) {
              animationType = "easeOut";
          }
          var transformState = contextInstance.transformState,
              wrapperComponent = contextInstance.wrapperComponent,
              contentComponent = contextInstance.contentComponent;
          if (wrapperComponent && contentComponent) {
              var targetState = getCenterPosition(scale || transformState.scale, wrapperComponent, contentComponent);
              animate(contextInstance, targetState, animationTime, animationType);
          }
      };
  };
  var zoomToElement = function zoomToElement(contextInstance) {
      return function (node, scale, animationTime, animationType) {
          if (animationTime === void 0) {
              animationTime = 600;
          }
          if (animationType === void 0) {
              animationType = "easeOut";
          }
          handleCancelAnimation(contextInstance);
          var wrapperComponent = contextInstance.wrapperComponent;
          var target = typeof node === "string" ? document.getElementById(node) : node;
          if (wrapperComponent && isValidZoomNode(target) && target && wrapperComponent.contains(target)) {
              var targetState = calculateZoomToNode(contextInstance, target, scale);
              animate(contextInstance, targetState, animationTime, animationType);
          }
      };
  };

  var getContext = function getContext(contextInstance) {
      return {
          instance: contextInstance,
          state: contextInstance.transformState,
          zoomIn: zoomIn(contextInstance),
          zoomOut: zoomOut(contextInstance),
          setTransform: setTransform(contextInstance),
          resetTransform: resetTransform(contextInstance),
          centerView: centerView(contextInstance),
          zoomToElement: zoomToElement(contextInstance)
      };
  };

  // We want to make event listeners non-passive, and to do so have to check
  // that browsers support EventListenerOptions in the first place.
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
  var passiveSupported = false;
  function makePassiveEventOption() {
      try {
          var options = {
              get passive() {
                  // This function will be called when the browser
                  //   attempts to access the passive property.
                  passiveSupported = true;
                  return false;
              }
          };
          return options;
      } catch (err) {
          passiveSupported = false;
          return passiveSupported;
      }
  }

  var isExcludedNode = function isExcludedNode(node, excluded) {
      var targetTagName = node.tagName.toUpperCase();
      var isExcludedTag = excluded.find(function (tag) {
          return tag.toUpperCase() === targetTagName;
      });
      if (isExcludedTag) return true;
      var isExcludedClassName = excluded.find(function (className) {
          return node.classList.contains(className);
      });
      if (isExcludedClassName) return true;
      return false;
  };
  var cancelTimeout = function cancelTimeout(timeout) {
      if (timeout) {
          clearTimeout(timeout);
      }
  };

  var getTransformStyles = function getTransformStyles(x, y, scale) {
      return "translate3d(" + x + "px, " + y + "px, 0) scale(" + scale + ")";
  };
  var getCenterPosition = function getCenterPosition(scale, wrapperComponent, contentComponent) {
      var contentWidth = contentComponent.offsetWidth * scale;
      var contentHeight = contentComponent.offsetHeight * scale;
      var centerPositionX = (wrapperComponent.offsetWidth - contentWidth) / 2;
      var centerPositionY = (wrapperComponent.offsetHeight - contentHeight) / 2;
      return {
          scale: scale,
          positionX: centerPositionX,
          positionY: centerPositionY
      };
  };

  var isWheelAllowed = function isWheelAllowed(contextInstance, event) {
      var _a = contextInstance.setup.wheel,
          disabled = _a.disabled,
          wheelDisabled = _a.wheelDisabled,
          touchPadDisabled = _a.touchPadDisabled,
          excluded = _a.excluded;
      var isInitialized = contextInstance.isInitialized,
          isPanning = contextInstance.isPanning;
      var target = event.target;
      var isAllowed = isInitialized && !isPanning && !disabled && target;
      if (!isAllowed) return false;
      // Event ctrlKey detects if touchpad action is executing wheel or pinch gesture
      if (wheelDisabled && !event.ctrlKey) return false;
      if (touchPadDisabled && event.ctrlKey) return false;
      var isExcluded = isExcludedNode(target, excluded);
      if (isExcluded) return false;
      return true;
  };
  function getDelta(event, customDelta) {
      var deltaY = event ? event.deltaY < 0 ? 1 : -1 : 0;
      var delta = checkIsNumber(customDelta, deltaY);
      return delta;
  }
  function getMousePosition(event, contentComponent, scale) {
      var contentRect = contentComponent.getBoundingClientRect();
      var mouseX = 0;
      var mouseY = 0;
      if ("clientX" in event) {
          // mouse position x, y over wrapper component
          mouseX = (event.clientX - contentRect.left) / scale;
          mouseY = (event.clientY - contentRect.top) / scale;
      } else {
          var touch = event.touches[0];
          mouseX = (touch.clientX - contentRect.left) / scale;
          mouseY = (touch.clientY - contentRect.top) / scale;
      }
      if (isNaN(mouseX) || isNaN(mouseY)) console.error("No mouse or touch offset found");
      return {
          x: mouseX,
          y: mouseY
      };
  }
  var handleCalculateWheelZoom = function handleCalculateWheelZoom(contextInstance, delta, step, disablePadding, getTarget) {
      var scale = contextInstance.transformState.scale;
      var wrapperComponent = contextInstance.wrapperComponent,
          setup = contextInstance.setup;
      var maxScale = setup.maxScale,
          minScale = setup.minScale,
          zoomAnimation = setup.zoomAnimation;
      var size = zoomAnimation.size,
          disabled = zoomAnimation.disabled;
      if (!wrapperComponent) {
          throw new Error("Wrapper is not mounted");
      }
      var targetScale = scale + delta * (scale - scale * step) * step;
      if (getTarget) return targetScale;
      var paddingEnabled = disablePadding ? false : !disabled;
      var newScale = checkZoomBounds(roundNumber(targetScale, 3), minScale, maxScale, size, paddingEnabled);
      return newScale;
  };
  var handleWheelZoomStop = function handleWheelZoomStop(contextInstance, event) {
      var previousWheelEvent = contextInstance.previousWheelEvent;
      var scale = contextInstance.transformState.scale;
      var _a = contextInstance.setup,
          maxScale = _a.maxScale,
          minScale = _a.minScale;
      if (!previousWheelEvent) return false;
      if (scale < maxScale || scale > minScale) return true;
      if (Math.sign(previousWheelEvent.deltaY) !== Math.sign(event.deltaY)) return true;
      if (previousWheelEvent.deltaY > 0 && previousWheelEvent.deltaY < event.deltaY) return true;
      if (previousWheelEvent.deltaY < 0 && previousWheelEvent.deltaY > event.deltaY) return true;
      if (Math.sign(previousWheelEvent.deltaY) !== Math.sign(event.deltaY)) return true;
      return false;
  };

  var isPinchStartAllowed = function isPinchStartAllowed(contextInstance, event) {
      var _a = contextInstance.setup.pinch,
          disabled = _a.disabled,
          excluded = _a.excluded;
      var isInitialized = contextInstance.isInitialized;
      var target = event.target;
      var isAllowed = isInitialized && !disabled && target;
      if (!isAllowed) return false;
      var isExcluded = isExcludedNode(target, excluded);
      if (isExcluded) return false;
      return true;
  };
  var isPinchAllowed = function isPinchAllowed(contextInstance) {
      var disabled = contextInstance.setup.pinch.disabled;
      var isInitialized = contextInstance.isInitialized,
          pinchStartDistance = contextInstance.pinchStartDistance;
      var isAllowed = isInitialized && !disabled && pinchStartDistance;
      if (!isAllowed) return false;
      return true;
  };
  var calculateTouchMidPoint = function calculateTouchMidPoint(event, scale, contentComponent) {
      var contentRect = contentComponent.getBoundingClientRect();
      var touches = event.touches;
      var firstPointX = roundNumber(touches[0].clientX - contentRect.left, 5);
      var firstPointY = roundNumber(touches[0].clientY - contentRect.top, 5);
      var secondPointX = roundNumber(touches[1].clientX - contentRect.left, 5);
      var secondPointY = roundNumber(touches[1].clientY - contentRect.top, 5);
      return {
          x: (firstPointX + secondPointX) / 2 / scale,
          y: (firstPointY + secondPointY) / 2 / scale
      };
  };
  var getTouchDistance = function getTouchDistance(event) {
      return Math.sqrt(Math.pow(event.touches[0].pageX - event.touches[1].pageX, 2) + Math.pow(event.touches[0].pageY - event.touches[1].pageY, 2));
  };
  var calculatePinchZoom = function calculatePinchZoom(contextInstance, currentDistance) {
      var pinchStartScale = contextInstance.pinchStartScale,
          pinchStartDistance = contextInstance.pinchStartDistance,
          setup = contextInstance.setup;
      var maxScale = setup.maxScale,
          minScale = setup.minScale,
          zoomAnimation = setup.zoomAnimation;
      var size = zoomAnimation.size,
          disabled = zoomAnimation.disabled;
      if (!pinchStartScale || pinchStartDistance === null || !currentDistance) {
          throw new Error("Pinch touches distance was not provided");
      }
      if (currentDistance < 0) {
          return contextInstance.transformState.scale;
      }
      var touchProportion = currentDistance / pinchStartDistance;
      var scaleDifference = touchProportion * pinchStartScale;
      return checkZoomBounds(roundNumber(scaleDifference, 2), minScale, maxScale, size, !disabled);
  };

  var wheelStopEventTime = 160;
  var wheelAnimationTime = 100;
  var handleWheelStart = function handleWheelStart(contextInstance, event) {
      var _a = contextInstance.props,
          onWheelStart = _a.onWheelStart,
          onZoomStart = _a.onZoomStart;
      if (!contextInstance.wheelStopEventTimer) {
          handleCancelAnimation(contextInstance);
          handleCallback(getContext(contextInstance), event, onWheelStart);
          handleCallback(getContext(contextInstance), event, onZoomStart);
      }
  };
  var handleWheelZoom = function handleWheelZoom(contextInstance, event) {
      var _a = contextInstance.props,
          onWheel = _a.onWheel,
          onZoom = _a.onZoom;
      var contentComponent = contextInstance.contentComponent,
          setup = contextInstance.setup,
          transformState = contextInstance.transformState;
      var scale = transformState.scale;
      var limitToBounds = setup.limitToBounds,
          centerZoomedOut = setup.centerZoomedOut,
          zoomAnimation = setup.zoomAnimation,
          wheel = setup.wheel;
      var size = zoomAnimation.size,
          disabled = zoomAnimation.disabled;
      var step = wheel.step;
      if (!contentComponent) {
          throw new Error("Component not mounted");
      }
      event.preventDefault();
      event.stopPropagation();
      var delta = getDelta(event, null);
      var newScale = handleCalculateWheelZoom(contextInstance, delta, step, !event.ctrlKey);
      // if scale not change
      if (scale === newScale) return;
      var bounds = handleCalculateBounds(contextInstance, newScale);
      var mousePosition = getMousePosition(event, contentComponent, scale);
      var isPaddingDisabled = disabled || size === 0 || centerZoomedOut;
      var isLimitedToBounds = limitToBounds && isPaddingDisabled;
      var _b = handleCalculateZoomPositions(contextInstance, mousePosition.x, mousePosition.y, newScale, bounds, isLimitedToBounds),
          x = _b.x,
          y = _b.y;
      contextInstance.previousWheelEvent = event;
      contextInstance.setTransformState(newScale, x, y);
      handleCallback(getContext(contextInstance), event, onWheel);
      handleCallback(getContext(contextInstance), event, onZoom);
  };
  var handleWheelStop = function handleWheelStop(contextInstance, event) {
      var _a = contextInstance.props,
          onWheelStop = _a.onWheelStop,
          onZoomStop = _a.onZoomStop;
      // fire animation
      cancelTimeout(contextInstance.wheelAnimationTimer);
      contextInstance.wheelAnimationTimer = setTimeout(function () {
          if (!contextInstance.mounted) return;
          handleAlignToScaleBounds(contextInstance, event.x, event.y);
          contextInstance.wheelAnimationTimer = null;
      }, wheelAnimationTime);
      // Wheel stop event
      var hasStoppedZooming = handleWheelZoomStop(contextInstance, event);
      if (hasStoppedZooming) {
          cancelTimeout(contextInstance.wheelStopEventTimer);
          contextInstance.wheelStopEventTimer = setTimeout(function () {
              if (!contextInstance.mounted) return;
              contextInstance.wheelStopEventTimer = null;
              handleCallback(getContext(contextInstance), event, onWheelStop);
              handleCallback(getContext(contextInstance), event, onZoomStop);
          }, wheelStopEventTime);
      }
  };

  var handlePinchStart = function handlePinchStart(contextInstance, event) {
      var distance = getTouchDistance(event);
      contextInstance.pinchStartDistance = distance;
      contextInstance.lastDistance = distance;
      contextInstance.pinchStartScale = contextInstance.transformState.scale;
      contextInstance.isPanning = false;
      handleCancelAnimation(contextInstance);
  };
  var handlePinchZoom = function handlePinchZoom(contextInstance, event) {
      var contentComponent = contextInstance.contentComponent,
          pinchStartDistance = contextInstance.pinchStartDistance;
      var scale = contextInstance.transformState.scale;
      var _a = contextInstance.setup,
          limitToBounds = _a.limitToBounds,
          centerZoomedOut = _a.centerZoomedOut,
          zoomAnimation = _a.zoomAnimation;
      var disabled = zoomAnimation.disabled,
          size = zoomAnimation.size;
      // if one finger starts from outside of wrapper
      if (pinchStartDistance === null || !contentComponent) return;
      var midPoint = calculateTouchMidPoint(event, scale, contentComponent);
      // if touches goes off of the wrapper element
      if (!isFinite(midPoint.x) || !isFinite(midPoint.y)) return;
      var currentDistance = getTouchDistance(event);
      var newScale = calculatePinchZoom(contextInstance, currentDistance);
      if (newScale === scale) return;
      var bounds = handleCalculateBounds(contextInstance, newScale);
      var isPaddingDisabled = disabled || size === 0 || centerZoomedOut;
      var isLimitedToBounds = limitToBounds && isPaddingDisabled;
      var _b = handleCalculateZoomPositions(contextInstance, midPoint.x, midPoint.y, newScale, bounds, isLimitedToBounds),
          x = _b.x,
          y = _b.y;
      contextInstance.pinchMidpoint = midPoint;
      contextInstance.lastDistance = currentDistance;
      contextInstance.setTransformState(newScale, x, y);
  };
  var handlePinchStop = function handlePinchStop(contextInstance) {
      var pinchMidpoint = contextInstance.pinchMidpoint;
      contextInstance.velocity = null;
      contextInstance.lastDistance = null;
      contextInstance.pinchMidpoint = null;
      contextInstance.pinchStartScale = null;
      contextInstance.pinchStartDistance = null;
      handleAlignToScaleBounds(contextInstance, pinchMidpoint === null || pinchMidpoint === void 0 ? void 0 : pinchMidpoint.x, pinchMidpoint === null || pinchMidpoint === void 0 ? void 0 : pinchMidpoint.y);
  };

  function handleDoubleClick(contextInstance, event) {
      var _a = contextInstance.setup.doubleClick,
          disabled = _a.disabled,
          mode = _a.mode,
          step = _a.step,
          animationTime = _a.animationTime,
          animationType = _a.animationType;
      if (disabled) return;
      if (mode === "reset") {
          return resetTransformations(contextInstance, animationTime, animationType);
      }
      var scale = contextInstance.transformState.scale;
      var contentComponent = contextInstance.contentComponent;
      if (!contentComponent) return console.error("No ContentComponent found");
      var delta = mode === "zoomOut" ? -1 : 1;
      var newScale = handleCalculateButtonZoom(contextInstance, delta, step);
      var mousePosition = getMousePosition(event, contentComponent, scale);
      var targetState = handleZoomToPoint(contextInstance, newScale, mousePosition.x, mousePosition.y);
      if (!targetState) {
          return console.error("Error during zoom event. New transformation state was not calculated.");
      }
      animate(contextInstance, targetState, animationTime, animationType);
  }
  var isDoubleClickAllowed = function isDoubleClickAllowed(contextInstance, event) {
      var isInitialized = contextInstance.isInitialized,
          setup = contextInstance.setup,
          wrapperComponent = contextInstance.wrapperComponent;
      var _a = setup.doubleClick,
          disabled = _a.disabled,
          excluded = _a.excluded;
      var target = event.target;
      var isWrapperChild = wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.contains(target);
      var isAllowed = isInitialized && target && isWrapperChild && !disabled;
      if (!isAllowed) return false;
      var isExcluded = isExcludedNode(target, excluded);
      if (isExcluded) return false;
      if (!isAllowed) return false;
      return true;
  };

  var Context = React__default.createContext(contextInitialState);
  var TransformContext = /** @class */function (_super) {
      __extends(TransformContext, _super);
      function TransformContext() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.mounted = true;
          _this.transformState = createState(_this.props);
          _this.setup = createSetup(_this.props);
          // Components
          _this.wrapperComponent = null;
          _this.contentComponent = null;
          // Initialization
          _this.isInitialized = false;
          _this.bounds = null;
          // wheel helpers
          _this.previousWheelEvent = null;
          _this.wheelStopEventTimer = null;
          _this.wheelAnimationTimer = null;
          // panning helpers
          _this.isPanning = false;
          _this.startCoords = null;
          _this.lastTouch = null;
          // pinch helpers
          _this.distance = null;
          _this.lastDistance = null;
          _this.pinchStartDistance = null;
          _this.pinchStartScale = null;
          _this.pinchMidpoint = null;
          // velocity helpers
          _this.velocity = null;
          _this.velocityTime = null;
          _this.lastMousePosition = null;
          // animations helpers
          _this.animate = false;
          _this.animation = null;
          _this.maxBounds = null;
          // key press
          _this.pressedKeys = {};
          _this.handleInitializeWrapperEvents = function (wrapper) {
              // Zooming events on wrapper
              var passive = makePassiveEventOption();
              wrapper.addEventListener("wheel", _this.onWheelZoom, passive);
              wrapper.addEventListener("dblclick", _this.onDoubleClick, passive);
              wrapper.addEventListener("touchstart", _this.onTouchPanningStart, passive);
              wrapper.addEventListener("touchmove", _this.onTouchPanning, passive);
              wrapper.addEventListener("touchend", _this.onTouchPanningStop, passive);
          };
          _this.handleInitialize = function () {
              var centerOnInit = _this.setup.centerOnInit;
              _this.applyTransformation();
              _this.forceUpdate();
              if (centerOnInit) {
                  // this has to be redone once the right solution is found
                  // problem is - we need to execute it after mounted component specify it's height / width, images are fetched async so it's tricky
                  setTimeout(function () {
                      if (_this.mounted) {
                          _this.setCenter();
                      }
                  }, 50);
                  setTimeout(function () {
                      if (_this.mounted) {
                          _this.setCenter();
                      }
                  }, 100);
                  setTimeout(function () {
                      if (_this.mounted) {
                          _this.setCenter();
                      }
                  }, 200);
              }
          };
          //////////
          // Zoom
          //////////
          _this.onWheelZoom = function (event) {
              var disabled = _this.setup.disabled;
              if (disabled) return;
              var isAllowed = isWheelAllowed(_this, event);
              if (!isAllowed) return;
              var keysPressed = _this.isPressingKeys(_this.setup.wheel.activationKeys);
              if (!keysPressed) return;
              handleWheelStart(_this, event);
              handleWheelZoom(_this, event);
              handleWheelStop(_this, event);
          };
          //////////
          // Pan
          //////////
          _this.onPanningStart = function (event) {
              var disabled = _this.setup.disabled;
              var onPanningStart = _this.props.onPanningStart;
              if (disabled) return;
              var isAllowed = isPanningStartAllowed(_this, event);
              if (!isAllowed) return;
              var keysPressed = _this.isPressingKeys(_this.setup.panning.activationKeys);
              if (!keysPressed) return;
              event.preventDefault();
              event.stopPropagation();
              handleCancelAnimation(_this);
              handlePanningStart(_this, event);
              handleCallback(getContext(_this), event, onPanningStart);
          };
          _this.onPanning = function (event) {
              var disabled = _this.setup.disabled;
              var onPanning = _this.props.onPanning;
              if (disabled) return;
              var isAllowed = isPanningAllowed(_this);
              if (!isAllowed) return;
              var keysPressed = _this.isPressingKeys(_this.setup.panning.activationKeys);
              if (!keysPressed) return;
              event.preventDefault();
              event.stopPropagation();
              handlePanning(_this, event.clientX, event.clientY);
              handleCallback(getContext(_this), event, onPanning);
          };
          _this.onPanningStop = function (event) {
              var onPanningStop = _this.props.onPanningStop;
              if (_this.isPanning) {
                  handlePanningEnd(_this);
                  handleCallback(getContext(_this), event, onPanningStop);
              }
          };
          //////////
          // Pinch
          //////////
          _this.onPinchStart = function (event) {
              var disabled = _this.setup.disabled;
              var _a = _this.props,
                  onPinchingStart = _a.onPinchingStart,
                  onZoomStart = _a.onZoomStart;
              if (disabled) return;
              var isAllowed = isPinchStartAllowed(_this, event);
              if (!isAllowed) return;
              handlePinchStart(_this, event);
              handleCancelAnimation(_this);
              handleCallback(getContext(_this), event, onPinchingStart);
              handleCallback(getContext(_this), event, onZoomStart);
          };
          _this.onPinch = function (event) {
              var disabled = _this.setup.disabled;
              var _a = _this.props,
                  onPinching = _a.onPinching,
                  onZoom = _a.onZoom;
              if (disabled) return;
              var isAllowed = isPinchAllowed(_this);
              if (!isAllowed) return;
              event.preventDefault();
              event.stopPropagation();
              handlePinchZoom(_this, event);
              handleCallback(getContext(_this), event, onPinching);
              handleCallback(getContext(_this), event, onZoom);
          };
          _this.onPinchStop = function (event) {
              var _a = _this.props,
                  onPinchingStop = _a.onPinchingStop,
                  onZoomStop = _a.onZoomStop;
              if (_this.pinchStartScale) {
                  handlePinchStop(_this);
                  handleCallback(getContext(_this), event, onPinchingStop);
                  handleCallback(getContext(_this), event, onZoomStop);
              }
          };
          //////////
          // Touch
          //////////
          _this.onTouchPanningStart = function (event) {
              var disabled = _this.setup.disabled;
              var onPanningStart = _this.props.onPanningStart;
              if (disabled) return;
              var isAllowed = isPanningStartAllowed(_this, event);
              if (!isAllowed) return;
              var isDoubleTap = _this.lastTouch && +new Date() - _this.lastTouch < 200;
              if (isDoubleTap && event.touches.length === 1) {
                  _this.onDoubleClick(event);
              } else {
                  _this.lastTouch = +new Date();
                  handleCancelAnimation(_this);
                  var touches = event.touches;
                  var isPanningAction = touches.length === 1;
                  var isPinchAction = touches.length === 2;
                  if (isPanningAction) {
                      handleCancelAnimation(_this);
                      handlePanningStart(_this, event);
                      handleCallback(getContext(_this), event, onPanningStart);
                  }
                  if (isPinchAction) {
                      _this.onPinchStart(event);
                  }
              }
          };
          _this.onTouchPanning = function (event) {
              var disabled = _this.setup.disabled;
              var onPanning = _this.props.onPanning;
              if (_this.isPanning && event.touches.length === 1) {
                  if (disabled) return;
                  var isAllowed = isPanningAllowed(_this);
                  if (!isAllowed) return;
                  event.preventDefault();
                  event.stopPropagation();
                  var touch = event.touches[0];
                  handlePanning(_this, touch.clientX, touch.clientY);
                  handleCallback(getContext(_this), event, onPanning);
              } else if (event.touches.length > 1) {
                  _this.onPinch(event);
              }
          };
          _this.onTouchPanningStop = function (event) {
              _this.onPanningStop(event);
              _this.onPinchStop(event);
          };
          //////////
          // Double Click
          //////////
          _this.onDoubleClick = function (event) {
              var disabled = _this.setup.disabled;
              if (disabled) return;
              var isAllowed = isDoubleClickAllowed(_this, event);
              if (!isAllowed) return;
              handleDoubleClick(_this, event);
          };
          //////////
          // Helpers
          //////////
          _this.clearPanning = function (event) {
              if (_this.isPanning) {
                  _this.onPanningStop(event);
              }
          };
          _this.setKeyPressed = function (e) {
              _this.pressedKeys[e.key] = true;
          };
          _this.setKeyUnPressed = function (e) {
              _this.pressedKeys[e.key] = false;
          };
          _this.isPressingKeys = function (keys) {
              if (!keys.length) {
                  return true;
              }
              return Boolean(keys.find(function (key) {
                  return _this.pressedKeys[key];
              }));
          };
          _this.setComponents = function (wrapperComponent, contentComponent) {
              _this.wrapperComponent = wrapperComponent;
              _this.contentComponent = contentComponent;
              handleCalculateBounds(_this, _this.transformState.scale);
              _this.handleInitializeWrapperEvents(wrapperComponent);
              _this.handleInitialize();
              _this.handleRef();
              _this.isInitialized = true;
              handleCallback(getContext(_this), undefined, _this.props.onInit);
          };
          _this.setTransformState = function (scale, positionX, positionY) {
              if (!isNaN(scale) && !isNaN(positionX) && !isNaN(positionY)) {
                  if (scale !== _this.transformState.scale) {
                      _this.transformState.previousScale = _this.transformState.scale;
                      _this.transformState.scale = scale;
                  }
                  _this.transformState.positionX = positionX;
                  _this.transformState.positionY = positionY;
                  _this.applyTransformation();
              } else {
                  console.error("Detected NaN set state values");
              }
          };
          _this.setCenter = function () {
              if (_this.wrapperComponent && _this.contentComponent) {
                  var targetState = getCenterPosition(_this.transformState.scale, _this.wrapperComponent, _this.contentComponent);
                  _this.setTransformState(targetState.scale, targetState.positionX, targetState.positionY);
              }
          };
          _this.applyTransformation = function () {
              if (!_this.mounted || !_this.contentComponent) return;
              var _a = _this.transformState,
                  scale = _a.scale,
                  positionX = _a.positionX,
                  positionY = _a.positionY;
              var transform = getTransformStyles(positionX, positionY, scale);
              _this.contentComponent.style.transform = transform;
              _this.handleRef();
          };
          _this.handleRef = function () {
              _this.props.setRef(getContext(_this));
          };
          return _this;
      }
      TransformContext.prototype.componentDidMount = function () {
          var passive = makePassiveEventOption();
          // Panning on window to allow panning when mouse is out of component wrapper
          window.addEventListener("mousedown", this.onPanningStart, passive);
          window.addEventListener("mousemove", this.onPanning, passive);
          window.addEventListener("mouseup", this.onPanningStop, passive);
          document.addEventListener("mouseleave", this.clearPanning, passive);
          window.addEventListener("keyup", this.setKeyUnPressed, passive);
          window.addEventListener("keydown", this.setKeyPressed, passive);
          this.handleRef();
      };
      TransformContext.prototype.componentWillUnmount = function () {
          var passive = makePassiveEventOption();
          window.removeEventListener("mousedown", this.onPanningStart, passive);
          window.removeEventListener("mousemove", this.onPanning, passive);
          window.removeEventListener("mouseup", this.onPanningStop, passive);
          window.removeEventListener("keyup", this.setKeyUnPressed, passive);
          window.removeEventListener("keydown", this.setKeyPressed, passive);
          handleCancelAnimation(this);
      };
      TransformContext.prototype.componentDidUpdate = function (oldProps) {
          if (oldProps !== this.props) {
              handleCalculateBounds(this, this.transformState.scale);
              this.setup = createSetup(this.props);
          }
      };
      TransformContext.prototype.render = function () {
          var value = getContext(this);
          var children = this.props.children;
          var content = typeof children === "function" ? children(value) : children;
          return React__default.createElement(Context.Provider, { value: _assign(_assign({}, this.transformState), { setComponents: this.setComponents, contextInstance: this }) }, content);
      };
      return TransformContext;
  }(React.Component);

  var TransformWrapper = React__default.forwardRef(function (props, ref) {
      var _a = React.useState(null),
          innerRef = _a[0],
          setRef = _a[1];
      React.useImperativeHandle(ref, function () {
          return innerRef;
      }, [innerRef]);
      return React__default.createElement(TransformContext, _assign({}, props, { setRef: setRef }));
  });

  function styleInject(css, ref) {
      if (ref === void 0) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') {
          return;
      }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
          if (head.firstChild) {
              head.insertBefore(style, head.firstChild);
          } else {
              head.appendChild(style);
          }
      } else {
          head.appendChild(style);
      }

      if (style.styleSheet) {
          style.styleSheet.cssText = css;
      } else {
          style.appendChild(document.createTextNode(css));
      }
  }

  var css_248z = ".transform-component-module_wrapper__1_Fgj {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__2jYgh {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__2jYgh img {\n  pointer-events: none;\n}\n";
  var styles$1 = { "wrapper": "transform-component-module_wrapper__1_Fgj", "content": "transform-component-module_content__2jYgh" };
  styleInject(css_248z);

  var TransformComponent = function TransformComponent(_a) {
      var children = _a.children,
          _b = _a.wrapperClass,
          wrapperClass = _b === void 0 ? "" : _b,
          _c = _a.contentClass,
          contentClass = _c === void 0 ? "" : _c,
          wrapperStyle = _a.wrapperStyle,
          contentStyle = _a.contentStyle;
      var setComponents = React.useContext(Context).setComponents;
      var wrapperRef = React.useRef(null);
      var contentRef = React.useRef(null);
      React.useEffect(function () {
          var wrapper = wrapperRef.current;
          var content = contentRef.current;
          if (wrapper !== null && content !== null && setComponents) {
              setComponents(wrapper, content);
          }
      }, []);
      return React__default.createElement("div", { ref: wrapperRef, className: "react-transform-wrapper " + styles$1.wrapper + " " + wrapperClass, style: wrapperStyle }, React__default.createElement("div", { ref: contentRef, className: "react-transform-component " + styles$1.content + " " + contentClass, style: contentStyle }, children));
  };

  var _templateObject$7 = taggedTemplateLiteral(["\n  margin: 0px;\n  position: relative;\n  display: flex;\n  place-content: center;\n"], ["\n  margin: 0px;\n  position: relative;\n  display: flex;\n  place-content: center;\n"]),
      _templateObject2$3 = taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  // opacity animation to make spinner appear with delay\n  opacity: ", ";\n  transition: opacity .3s;\n  pointer-events: none;\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  // opacity animation to make spinner appear with delay\n  opacity: ", ";\n  transition: opacity .3s;\n  pointer-events: none;\n"]),
      _templateObject3$1 = taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 8000;\n  width: 100%;\n  display: flex;\n  place-content: center;\n  bottom: 24px;\n"], ["\n  position: absolute;\n  z-index: 8000;\n  width: 100%;\n  display: flex;\n  place-content: center;\n  bottom: 24px;\n"]),
      _templateObject4$1 = taggedTemplateLiteral(["\n  height: 100%;\n  width: 33.333%;\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n  color: white;\n  cursor: pointer;\n  transition: all ease-in-out 0.1s;\n  :hover {\n    background-color: rgba(255, 255, 255, 0.6);\n  }\n"], ["\n  height: 100%;\n  width: 33.333%;\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n  color: white;\n  cursor: pointer;\n  transition: all ease-in-out 0.1s;\n  :hover {\n    background-color: rgba(255, 255, 255, 0.6);\n  }\n"]),
      _templateObject5$1 = taggedTemplateLiteral(["\n\n  display: block; // removes browser default gutter\n  height: auto;\n  margin: 0 auto; // main center on very short screens or very narrow img\n  max-width: 100%;\n\n  // disable user select\n  -webkit-touch-callout: none;\n  user-select: none;\n\n  // opacity animation on image load\n  opacity: 0;\n  transition: opacity .3s;\n\n  opacity: ", ";\n"], ["\n\n  display: block; // removes browser default gutter\n  height: auto;\n  margin: 0 auto; // main center on very short screens or very narrow img\n  max-width: 100%;\n\n  // disable user select\n  -webkit-touch-callout: none;\n  user-select: none;\n\n  // opacity animation on image load\n  opacity: 0;\n  transition: opacity .3s;\n\n  opacity: ", ";\n"]);

  function normalizeSourceSet(data) {
    var sourceSet = data.srcSet || data.srcset;

    if (Array.isArray(sourceSet)) {
      return sourceSet.join();
    }

    return sourceSet;
  }

  var ThemeContext = React__default.createContext({
    theme: theme,
    toggleTheme: function toggleTheme(newTheme) {}
  });

  var ImgsViewer = function (_Component) {
    inherits(ImgsViewer, _Component);

    function ImgsViewer(props) {
      classCallCheck(this, ImgsViewer);

      var _this = possibleConstructorReturn(this, (ImgsViewer.__proto__ || Object.getPrototypeOf(ImgsViewer)).call(this, props));

      _this.theme = deepMerge(theme, _this.props.theme);
      // this.classes = StyleSheet.create(
      //   deepMerge(defaultStyles, this.props.theme)
      // );
      _this.toggleTheme = function (theme$$1) {
        _this.setState(function () {
          return { theme: theme$$1 };
        });
      };
      _this.state = {
        imgLoaded: false,
        theme: _this.theme,
        toggleTheme: _this.toggleTheme
      };

      bindFunctions.call(_this, ["gotoNext", "gotoPrev", "closeBackdrop", "handleKeyboardInput", "handleImgLoaded"]);
      return _this;
    }

    createClass(ImgsViewer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.isOpen) {
          if (this.props.enableKeyboardInput) {
            window.addEventListener("keydown", this.handleKeyboardInput);
          }
          if (typeof this.props.currImg === "number") {
            this.preloadImg(this.props.currImg, this.handleImgLoaded);
          }
        }
      }
      // static getDerivedStateFromProps (nextProps, prevState) {

    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        if (!canUseDom) return;

        // const instance = this

        // always to preload imgs with both directions
        // then when user changs direction, img also show quickly
        if (nextProps.preloadNextImg) {
          var nextIdx = nextProps.currImg + 1;
          var prevIdx = nextProps.currImg - 1;
          // debugger
          // if (!this) return null
          this.preloadImg(prevIdx);
          this.preloadImg(nextIdx);
        }
        // preload currImg
        if (this.props.currImg !== nextProps.currImg || !this.props.isOpen && nextProps.isOpen) {
          var img = this.preloadImgData(nextProps.imgs[nextProps.currImg], this.handleImgLoaded);
          if (img) this.setState({
            imgLoaded: img.complete
          });
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
      value: function preloadImg(idx, onload) {
        return this.preloadImgData(this.props.imgs[idx], onload);
      }
    }, {
      key: "preloadImgData",
      value: function preloadImgData(data, onload) {
        if (!data) return;

        var img = new Image();
        var sourceSet = normalizeSourceSet(data);

        // Todo: add error handling for missing imgs
        img.onerror = onload;
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
      value: function handleImgLoaded() {
        this.setState({
          imgLoaded: true
        });
      }

      // ====================
      // Renderers
      // ====================

    }, {
      key: "renderArrowPrev",
      value: function renderArrowPrev(theme$$1) {
        if (this.props.currImg === 0) return null;

        return React__default.createElement(Arrow, {
          theme: theme$$1,
          direction: "left",
          icon: "arrowLeft",
          onClick: this.gotoPrev,
          title: this.props.leftArrowTitle,
          type: "button"
        });
      }
    }, {
      key: "renderArrowNext",
      value: function renderArrowNext(theme$$1) {
        if (this.props.currImg === this.props.imgs.length - 1) return null;

        return React__default.createElement(Arrow, {
          theme: theme$$1,
          direction: "right",
          icon: "arrowRight",
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


        if (!isOpen) return React__default.createElement("span", { key: "closed" });

        var offsetThumbnails = showThumbnails ? this.theme.thumbnail.size + this.theme.container.gutter.vertical : 0;

        return React__default.createElement(
          ThemeContext.Consumer,
          null,
          function (_ref) {
            var theme$$1 = _ref.theme,
                toggleTheme = _ref.toggleTheme;

            theme$$1 = newState.theme;
            return React__default.createElement(
              Container,
              {
                theme: theme$$1,
                key: "open",
                onClick: backdropCloseable && _this2.closeBackdrop,
                onTouchEnd: backdropCloseable && _this2.closeBackdrop
              },
              React__default.createElement(
                React.Fragment,
                null,
                React__default.createElement(
                  "div",
                  {
                    style: {
                      position: "relative",
                      marginBottom: offsetThumbnails,
                      maxWidth: width,
                      minWidth: "50vw"
                    }
                  },
                  imgLoaded && _this2.renderHeader(theme$$1),
                  " ",
                  _this2.renderImgs(theme$$1),
                  _this2.renderSpinner(),
                  " ",
                  imgLoaded && _this2.renderFooter(theme$$1)
                ),
                imgLoaded && _this2.renderThumbnails(theme$$1),
                imgLoaded && _this2.renderArrowPrev(theme$$1),
                imgLoaded && _this2.renderArrowNext(theme$$1),
                _this2.props.preventScroll && React__default.createElement(ScrollLock, null)
              )
            );
          }
        );
      }
    }, {
      key: "renderImgs",
      value: function renderImgs(theme$$1) {
        var _props3 = this.props,
            currImg = _props3.currImg,
            imgs = _props3.imgs,
            onClickImg = _props3.onClickImg,
            showThumbnails = _props3.showThumbnails;
        var imgLoaded = this.state.imgLoaded;


        if (!imgs || !imgs.length) return null;

        var img = imgs[currImg];
        var sourceSet = normalizeSourceSet(img);
        var sizes = sourceSet ? "100vw" : null;

        var thumbnailsSize = showThumbnails ? theme$$1.thumbnail.size : 0;
        var heightOffset = theme$$1.header.height + theme$$1.footer.height + thumbnailsSize + theme$$1.container.gutter.vertical + "px";

        return React__default.createElement(
          Figure,
          null,
          React__default.createElement(
            TransformWrapper,
            null,
            function (_ref2) {
              var zoomIn = _ref2.zoomIn,
                  zoomOut = _ref2.zoomOut,
                  resetTransform = _ref2.resetTransform,
                  rest = objectWithoutProperties(_ref2, ["zoomIn", "zoomOut", "resetTransform"]);
              return React__default.createElement(
                React__default.Fragment,
                null,
                imgLoaded && React__default.createElement(
                  Tools,
                  null,
                  React__default.createElement(
                    "div",
                    { style: {
                        borderRadius: "2px",
                        padding: "2px",
                        display: "flex",
                        background: "rgba(0, 0, 0, 0.6)",
                        height: "3em",
                        width: "8em"
                      } },
                    React__default.createElement(
                      ToolsButton,
                      { title: "Zoom out", style: { bottom: "6px" }, left: true, onClick: function onClick() {
                          return zoomOut();
                        } },
                      React__default.createElement(Icon, { type: "minus" })
                    ),
                    React__default.createElement(
                      ToolsButton,
                      { title: "Reset zoom", borderRadius: "0px", onClick: function onClick() {
                          return resetTransform();
                        } },
                      React__default.createElement(Icon, { type: "cross" })
                    ),
                    React__default.createElement(
                      ToolsButton,
                      { title: "Zoom in", right: true, onClick: function onClick() {
                          return zoomIn();
                        } },
                      React__default.createElement(Icon, { type: "plus" })
                    )
                  )
                ),
                React__default.createElement(
                  TransformComponent,
                  null,
                  React__default.createElement(Img, {
                    onClick: onClickImg,
                    sizes: sizes,
                    alt: img.alt,
                    src: img.src,
                    srcSet: sourceSet,
                    imgLoaded: imgLoaded,
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
      value: function renderThumbnails(theme$$1) {
        var _props4 = this.props,
            imgs = _props4.imgs,
            currImg = _props4.currImg,
            leftArrowTitle = _props4.leftArrowTitle,
            rightArrowTitle = _props4.rightArrowTitle,
            onClickThumbnail = _props4.onClickThumbnail,
            showThumbnails = _props4.showThumbnails,
            thumbnailOffset = _props4.thumbnailOffset;


        if (!showThumbnails) return null;

        return React__default.createElement(PaginatedThumbnails, {
          theme: theme$$1,
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
      value: function renderHeader(theme$$1) {
        var _props5 = this.props,
            imgs = _props5.imgs,
            currImg = _props5.currImg,
            closeBtnTitle = _props5.closeBtnTitle,
            customControls = _props5.customControls,
            onClose = _props5.onClose,
            showCloseBtn = _props5.showCloseBtn;


        return React__default.createElement(Header, {
          theme: theme$$1,
          customControls: customControls,
          onClose: onClose,
          caption: imgs[currImg].caption,
          showCloseBtn: showCloseBtn,
          closeBtnTitle: closeBtnTitle
        });
      }
    }, {
      key: "renderFooter",
      value: function renderFooter(theme$$1) {
        var _props6 = this.props,
            currImg = _props6.currImg,
            imgs = _props6.imgs,
            imgCountSeparator = _props6.imgCountSeparator,
            showImgCount = _props6.showImgCount;


        if (!imgs || !imgs.length) return null;

        return React__default.createElement(Footer, {
          theme: theme$$1,
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

        var Spinner$$1 = spinner;
        if (spinnerDisabled) return null;
        return React__default.createElement(
          SpinnerDiv
          // className={css(
          //   this.classes.spinner,
          //   !imgLoaded && this.classes.spinnerActive
          // )}
          ,
          { spinnerActive: !imgLoaded
          },
          React__default.createElement(Spinner$$1, { color: spinnerColor, size: spinnerSize })
        );
      }
    }, {
      key: "render",
      value: function render() {
        return React__default.createElement(
          ThemeContext.Provider,
          { value: this.state },
          this.renderDialog(this.state)
        );
      }
    }]);
    return ImgsViewer;
  }(React.Component);

  ImgsViewer.propTypes = {
    backdropCloseable: PropTypes.bool,
    closeBtnTitle: PropTypes.string,
    currImg: PropTypes.number,
    customControls: PropTypes.arrayOf(PropTypes.node),
    enableKeyboardInput: PropTypes.bool,
    imgCountSeparator: PropTypes.string,
    imgs: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      srcSet: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
      caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      thumbnail: PropTypes.string
    })).isRequired,
    isOpen: PropTypes.bool,
    leftArrowTitle: PropTypes.string,
    onClickImg: PropTypes.func,
    onClickNext: PropTypes.func,
    onClickPrev: PropTypes.func,
    onClickThumbnail: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    preloadNextImg: PropTypes.bool,
    preventScroll: PropTypes.bool,
    rightArrowTitle: PropTypes.string,
    showCloseBtn: PropTypes.bool,
    showImgCount: PropTypes.bool,
    showThumbnails: PropTypes.bool,
    spinnerDisabled: PropTypes.bool,
    spinner: PropTypes.func,
    spinnerColor: PropTypes.string,
    spinnerSize: PropTypes.number,
    theme: PropTypes.object,
    thumbnailOffset: PropTypes.number,
    width: PropTypes.number
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
    spinner: Spinner,
    spinnerColor: "#fff",
    spinnerSize: 50,
    theme: {},
    thumbnailOffset: 2,
    width: 1024
  };

  var Figure = styled.figure(_templateObject$7);

  var SpinnerDiv = styled.div(_templateObject2$3, function (props) {
    return props.spinnerActive ? 1 : 0;
  });

  var Tools = styled.div(_templateObject3$1);

  var ToolsButton = styled.button(_templateObject4$1);

  var Img = styled.img(_templateObject5$1, function (props) {
    return props.imgLoaded && "1";
  });

  return ImgsViewer;

})));
