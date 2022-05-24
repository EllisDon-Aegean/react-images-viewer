import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import ScrollLock from 'react-scrolllock';

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

var icons = { arrowLeft: arrowLeft, arrowRight: arrowRight, close: close };

var Icon = function Icon(_ref) {
  var fill = _ref.fill,
      type = _ref.type,
      props = objectWithoutProperties(_ref, ["fill", "type"]);

  var icon = icons[type];

  return React.createElement("span", _extends({ dangerouslySetInnerHTML: { __html: icon(fill) } }, props));
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

  return React.createElement(
    ArrowButton,
    _extends({
      type: "button" // default: submit
      , right: direction && direction == "right",
      height: height,
      onClick: onClick,
      onTouchEnd: onClick,
      defaults: theme
    }, props),
    React.createElement(Icon, {
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
    React.createElement(ContainerDiv, _extends({ defaults: theme, id: 'viewerBackdrop' }, props))
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

  var imgCount = showCount ? React.createElement(
    FooterCountDiv,
    { defaults: theme },
    countCurr,
    countSeparator,
    countTotal
  ) : React.createElement('span', null);

  return React.createElement(
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

  return React.createElement(
    HeaderDiv,
    _extends({ defaults: theme }, props),
    React.createElement(
      InnerDiv,
      { defaults: theme },
      !!showCloseBtn && React.createElement(
        TitleDiv,
        null,
        React.createElement(
          CloseButton,
          {
            title: closeBtnTitle,
            onClick: onClose
          },
          React.createElement(Icon, { fill: !!theme$$1.close && theme$$1.close.fill || theme.close.fill, type: 'close' })
        ),
        React.createElement(
          Title,
          { defaults: theme },
          caption
        )
      ),
      customControls ? React.createElement(
        ControlsDiv,
        null,
        customControls
      ) : React.createElement('span', null)
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

  return React.createElement(ThumbnailDiv
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

      return React.createElement(Arrow, {
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

      return React.createElement(Arrow, {
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

      return React.createElement(
        PaginatedThumbnailsDiv,
        { theme: theme$$1 },
        this.renderArrowPrev(theme$$1),
        thumbnails.map(function (img, idx) {
          return React.createElement(Thumbnail, _extends({
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
}(Component);


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

  return React.createElement(
    BouncingLoaderDiv,
    null,
    React.createElement(ChildDiv, { size: props.size, color: props.color, animationDelay: "0" }),
    React.createElement(ChildDiv, { size: props.size, color: props.color, animationDelay: "0.2" }),
    React.createElement(ChildDiv, { size: props.size, color: props.color, animationDelay: "0.4" })
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

var _templateObject$7 = taggedTemplateLiteral(["\n  margin: 0px;\n"], ["\n  margin: 0px;\n"]),
    _templateObject2$3 = taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  // opacity animation to make spinner appear with delay\n  opacity: ", ";\n  transition: opacity .3s;\n  pointer-events: none;\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  // opacity animation to make spinner appear with delay\n  opacity: ", ";\n  transition: opacity .3s;\n  pointer-events: none;\n"]),
    _templateObject3$1 = taggedTemplateLiteral(["\n\n  display: block; // removes browser default gutter\n  height: auto;\n  margin: 0 auto; // main center on very short screens or very narrow img\n  max-width: 100%;\n\n  // disable user select\n  -webkit-touch-callout: none;\n  user-select: none;\n\n  // opacity animation on image load\n  opacity: 0;\n  transition: opacity .3s;\n\n  opacity: ", ";\n"], ["\n\n  display: block; // removes browser default gutter\n  height: auto;\n  margin: 0 auto; // main center on very short screens or very narrow img\n  max-width: 100%;\n\n  // disable user select\n  -webkit-touch-callout: none;\n  user-select: none;\n\n  // opacity animation on image load\n  opacity: 0;\n  transition: opacity .3s;\n\n  opacity: ", ";\n"]);

function normalizeSourceSet(data) {
  var sourceSet = data.srcSet || data.srcset;

  if (Array.isArray(sourceSet)) {
    return sourceSet.join();
  }

  return sourceSet;
}

var ThemeContext = React.createContext({
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

      return React.createElement(Arrow, {
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

      return React.createElement(Arrow, {
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


      if (!isOpen) return React.createElement("span", { key: "closed" });

      var offsetThumbnails = showThumbnails ? this.theme.thumbnail.size + this.theme.container.gutter.vertical : 0;

      return React.createElement(
        ThemeContext.Consumer,
        null,
        function (_ref) {
          var theme$$1 = _ref.theme,
              toggleTheme = _ref.toggleTheme;

          theme$$1 = newState.theme;
          return React.createElement(
            Container,
            {
              theme: theme$$1,
              key: "open",
              onClick: backdropCloseable && _this2.closeBackdrop,
              onTouchEnd: backdropCloseable && _this2.closeBackdrop
            },
            React.createElement(
              Fragment,
              null,
              React.createElement(
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
              _this2.props.preventScroll && React.createElement(ScrollLock, null)
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

      return React.createElement(
        Figure,
        null,
        React.createElement(Img, {
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

      return React.createElement(PaginatedThumbnails, {
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


      return React.createElement(Header, {
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

      return React.createElement(Footer, {
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
      return React.createElement(
        SpinnerDiv
        // className={css(
        //   this.classes.spinner,
        //   !imgLoaded && this.classes.spinnerActive
        // )}
        ,
        { spinnerActive: !imgLoaded
        },
        React.createElement(Spinner$$1, { color: spinnerColor, size: spinnerSize })
      );
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        ThemeContext.Provider,
        { value: this.state },
        this.renderDialog(this.state)
      );
    }
  }]);
  return ImgsViewer;
}(Component);

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

var Img = styled.img(_templateObject3$1, function (props) {
  return props.imgLoaded && "1";
});

export default ImgsViewer;
