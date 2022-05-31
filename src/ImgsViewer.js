import PropTypes from "prop-types";
import React, { Component, Fragment, createRef } from "react";
import ScrollLock from "react-scrolllock";
import styled from "styled-components";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import defaultTheme from "./theme";
import GlobalStyle from "./components/GlobalStyle";
import Arrow from "./components/Arrow";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PaginatedThumbnails from "./components/PaginatedThumbnails";
import DefaultSpinner from "./components/Spinner";
import Icon from "./components/Icon";

import { bindFunctions, canUseDom, deepMerge } from "./utils/util";
import FALLBACK_IMAGES from "./constants/fallback-images";

function normalizeSourceSet(data) {
  const sourceSet = data.srcSet || data.srcset;

  if (Array.isArray(sourceSet)) {
    return sourceSet.join();
  }

  return sourceSet;
}

const ThemeContext = React.createContext({
  theme: defaultTheme,
  toggleTheme: (newTheme) => {},
});

class ImgsViewer extends Component {
  constructor(props) {
    super(props);

    this.theme = deepMerge(defaultTheme, this.props.theme);
    // this.classes = StyleSheet.create(
    //   deepMerge(defaultStyles, this.props.theme)
    // );
    this.toggleTheme = (theme) => {
      this.setState(() => ({ theme }));
    };
    this.state = {
      imgLoaded: false,
      imgHasError: false,
      theme: this.theme,
      toggleTheme: this.toggleTheme,
    };

    this.transformWrapperRef = createRef();

    bindFunctions.call(this, [
      "gotoNext",
      "gotoPrev",
      "closeBackdrop",
      "handleKeyboardInput",
      "handleImgLoaded",
      "handleImgError"
    ]);
  }
  componentDidMount() {
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
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!canUseDom) return;

    // const instance = this

    // always to preload imgs with both directions
    // then when user changs direction, img also show quickly
    if (nextProps.preloadNextImg) {
      const nextIdx = nextProps.currImg + 1;
      const prevIdx = nextProps.currImg - 1;
      // if (!this) return null
      this.preloadImg(prevIdx);
      this.preloadImg(nextIdx);
    }
    // preload currImg
    if (
      this.props.currImg !== nextProps.currImg ||
      (!this.props.isOpen && nextProps.isOpen)
    ) {
      this.preloadImgData(
        nextProps.imgs[nextProps.currImg],
        this.handleImgLoaded,
        this.handleImgError
      );
    }

    // add/remove event listeners
    if (
      !this.props.isOpen &&
      nextProps.isOpen &&
      nextProps.enableKeyboardInput
    ) {
      window.addEventListener("keydown", this.handleKeyboardInput);
    }
    if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
      window.removeEventListener("keydown", this.handleKeyboardInput);
    }

    return null;
  }
  componentWillUnmount() {
    if (this.props.enableKeyboardInput) {
      window.removeEventListener("keydown", this.handleKeyboardInput);
    }
  }

  // ====================
  // Methods
  // ====================

  preloadImg(idx, onload, onerror) {
    return this.preloadImgData(this.props.imgs[idx], onload, onerror);
  }
  preloadImgData(data, onload, onerror) {
    if (!data) return;

    const img = new Image();
    const sourceSet = normalizeSourceSet(data);

    // Todo: add error handling for missing imgs
    img.onerror = onerror;
    img.onload = onload;
    img.src = data.src;

    if (sourceSet) img.srcset = sourceSet;

    return img;
  }
  gotoNext(event) {
    const { currImg, imgs } = this.props;
    const { imgLoaded } = this.state;

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
  gotoPrev(event) {
    const { currImg } = this.props;
    const { imgLoaded } = this.state;

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
  closeBackdrop(event) {
    if (
      event.target.id === "viewerBackdrop" ||
      event.target.tagName === "FIGURE"
    ) {
      this.props.onClose();
    }
  }
  handleKeyboardInput(event) {
    const { keyCode } = event;
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

  handleImgLoaded(e) {
    const { imgHasError } = this.state;
    if (e.target.src === FALLBACK_IMAGES.LARGE && imgHasError) {
      this.setState({ imgLoaded: true });
    } else {
      this.setState({ imgLoaded: true, imgHasError: false });
    }
  }

  handleImgError(e) {
    if (e && e.target) e.target.src = FALLBACK_IMAGES.LARGE;
    this.setState({ imgHasError: true });
  }

  // ====================
  // Renderers
  // ====================

  renderArrowPrev(theme) {
    if (this.props.currImg === 0) return null;

    return (
      <Arrow
        theme={theme}
        direction="left"
        icon="filledArrowLeft"
        onClick={this.gotoPrev}
        title={this.props.leftArrowTitle}
        type="button"
        horizontalGutter={-75}
      />
    );
  }
  renderArrowNext(theme) {
    if (this.props.currImg === this.props.imgs.length - 1) return null;

    return (
      <Arrow
        theme={theme}
        direction="right"
        icon="filledArrowRight"
        onClick={this.gotoNext}
        title={this.props.rightArrowTitle}
        type="button"
        horizontalGutter={-50}
      />
    );
  }
  renderDialog(newState) {
    const { backdropCloseable, isOpen, showThumbnails, width } = this.props;

    const { imgLoaded } = this.state;

    if (!isOpen) return <span key="closed" />;

    const offsetThumbnails = showThumbnails
      ? this.theme.thumbnail.size + this.theme.container.gutter.vertical
      : 0;

    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => {
          theme = newState.theme;
          return (
            <Container
              theme={theme}
              key="open"
              onClick={backdropCloseable && this.closeBackdrop}
              onTouchEnd={backdropCloseable && this.closeBackdrop}
            >
              <Fragment>
                <div
                  style={{
                    position: "relative",
                    marginBottom: offsetThumbnails,
                    maxWidth: width,
                    minWidth: "50vw",
                    minHeight: "50vh"
                  }}
                >
                  {imgLoaded && this.renderHeader(theme)}{" "}
                  {this.renderImgs(theme)}
                  {this.renderSpinner()} {imgLoaded && this.renderFooter(theme)}
                  {imgLoaded && this.renderArrowPrev(theme)}
                  {imgLoaded && this.renderArrowNext(theme)}
                </div>
                {imgLoaded && this.renderThumbnails(theme)}
                {this.props.preventScroll && <ScrollLock />}
              </Fragment>
            </Container>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
  renderImgs(theme) {
    const { currImg, imgs, onClickImg, showThumbnails } = this.props;

    const {
      imgLoaded,
      imgHasError
    } = this.state;

    if (!imgs || !imgs.length) return null;

    const img = imgs[currImg];
    const sourceSet = normalizeSourceSet(img);
    const sizes = sourceSet ? "100vw" : null;

    const thumbnailsSize = showThumbnails ? theme.thumbnail.size : 0;
    const heightOffset = `${
      theme.header.height +
      theme.footer.height +
      thumbnailsSize +
      theme.container.gutter.vertical
    }px`;

    return (
      <Figure>
        <TransformWrapper ref={this.transformWrapperRef}>
          {({ zoomIn, zoomOut, resetTransform, state }) => (
            <React.Fragment>
              {imgLoaded && !imgHasError && <Tools>
                <div style={{
                  borderRadius: "2px",
                  padding: "2px",
                  display: "flex",
                  background: "rgba(0, 0, 0, 0.6)",
                  height: "36px",
                  width: "108px"
                }}>
                  <ToolsButton
                    title="Zoom out"
                    style={{bottom: "6px"}}
                    left
                    onClick={() => zoomOut()}
                    disabled={state.scale <= 1}
                  >
                    <Icon type="minus" />
                  </ToolsButton>
                  <ToolsButton
                    title="Reset zoom"
                    borderRadius="0px"
                    onClick={() => resetTransform()}
                    disabled={state.scale === 1}
                  >
                    <Icon type="resetZoom" />
                  </ToolsButton>
                  <ToolsButton title="Zoom in" right onClick={() => zoomIn()}>
                    <Icon type="plus" />  
                  </ToolsButton>                  
                </div>
              </Tools>}
              <TransformComponent>
                <Img
                  onClick={onClickImg}
                  sizes={sizes}
                  alt={img.alt}
                  src={img.src}
                  srcSet={sourceSet}
                  imgLoaded={imgLoaded}
                  onError={this.handleImgError}
                  style={{
                    cursor: onClickImg ? "pointer" : "auto",
                    maxHeight: `calc(100vh - ${heightOffset}`,
                  }}
                />
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </Figure>
    );
  }
  renderThumbnails(theme) {
    const {
      imgs,
      currImg,
      leftArrowTitle,
      rightArrowTitle,
      onClickThumbnail,
      showThumbnails,
      thumbnailOffset,
    } = this.props;

    if (!showThumbnails) return null;

    return (
      <PaginatedThumbnails
        theme={theme}
        leftTitle={leftArrowTitle}
        rightTitle={rightArrowTitle}
        currImg={currImg}
        imgs={imgs}
        offset={thumbnailOffset}
        onClickThumbnail={onClickThumbnail}
      />
    );
  }
  renderHeader(theme) {
    const { imgs, currImg, closeBtnTitle, customControls, onClose, showCloseBtn } = this.props;

    return (
      <Header
        theme={theme}
        customControls={customControls}
        onClose={onClose}
        caption={imgs[currImg].caption}
        showCloseBtn={showCloseBtn}
        closeBtnTitle={closeBtnTitle}
      />
    );
  }
  renderFooter(theme) {
    const { currImg, imgs, imgCountSeparator, showImgCount } = this.props;

    if (!imgs || !imgs.length) return null;

    return (
      <Footer
        theme={theme}
        countCurr={currImg + 1}
        countSeparator={imgCountSeparator}
        countTotal={imgs.length}
        showCount={showImgCount}
      />
    );
  }
  renderSpinner() {
    const { spinner, spinnerDisabled, spinnerColor, spinnerSize } = this.props;

    const { imgLoaded } = this.state;
    const Spinner = spinner;
    if (spinnerDisabled) return null;
    return (
      <SpinnerDiv
        spinnerActive={!imgLoaded}
      >
        <Spinner color={spinnerColor} size={spinnerSize} />
      </SpinnerDiv>
    );
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <GlobalStyle />
        {this.renderDialog(this.state)}
      </ThemeContext.Provider>
    );
  }
}

ImgsViewer.propTypes = {
  backdropCloseable: PropTypes.bool,
  closeBtnTitle: PropTypes.string,
  currImg: PropTypes.number,
  customControls: PropTypes.arrayOf(PropTypes.node),
  enableKeyboardInput: PropTypes.bool,
  imgCountSeparator: PropTypes.string,
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      srcSet: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
      caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      thumbnail: PropTypes.string,
      alt: PropTypes.string
    })
  ).isRequired,
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
  width: PropTypes.number,
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
  spinner: DefaultSpinner,
  spinnerColor: "#fff",
  spinnerSize: 50,
  theme: {},
  thumbnailOffset: 2,
  width: 1024,
};

const Figure = styled.figure`
  margin: 0px;
  position: relative;
  display: flex;
  place-content: center;
  min-height: 70vh;
  align-items: center;
`;

const SpinnerDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // opacity animation to make spinner appear with delay
  opacity: ${(props) => props.spinnerActive ? 1 : 0};
  transition: opacity .3s;
  pointer-events: none;
`;

const Tools = styled.div`
  position: absolute;
  z-index: 8000;
  width: 100%;
  display: flex;
  place-content: center;
  bottom: 3em;
`;

const ToolsButton = styled.button`
  height: 100%;
  width: 33.333%;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  cursor: pointer;
  transition: all ease-in-out 0.1s;
  :hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
  :disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Img = styled.img`
  display: block; // removes browser default gutter
  height: auto;
  margin: 0 auto; // main center on very short screens or very narrow img
  max-width: 100%;

  // disable user select
  -webkit-touch-callout: none;
  user-select: none;

  // opacity animation on image load
  opacity: 0;
  transition: opacity .3s;

  opacity: ${(props) => props.imgLoaded && "1"};
`;

export default ImgsViewer;
