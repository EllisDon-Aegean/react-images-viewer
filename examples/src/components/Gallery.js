import React, { Component } from 'react'
import ImgsViewer from 'react-images-viewer'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class Gallery extends Component {
  constructor () {
    super()

    this.state = {
      isOpen: false,
      currImg: 0,
    }

    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrev = this.gotoPrev.bind(this)
    this.gotoImg = this.gotoImg.bind(this)
    this.handleClickImg = this.handleClickImg.bind(this)
    this.closeImgsViewer = this.closeImgsViewer.bind(this)
    this.openImgsViewer = this.openImgsViewer.bind(this)
  }
  openImgsViewer (index, event) {
    event.preventDefault()
    this.setState({
      currImg: index,
      isOpen: true,
    })
  }
  closeImgsViewer () {
    this.setState({
      currImg: 0,
      isOpen: false,
    })
  }
  gotoPrev () {
    this.setState({
      currImg: this.state.currImg - 1
    })
  }
  gotoNext () {
    this.setState({
      currImg: this.state.currImg + 1
    })
  }
  gotoImg (index) {
    this.setState({
      currImg: index
    })
  }
  handleClickImg () {
    if (this.state.currImg === this.props.imgs.length - 1) return
    this.gotoNext()
  }
  renderGallery () {
    const { imgs } = this.props

    if (!imgs) return

    const gallery = imgs.filter(i => i.useForDemo).map((obj, i) => {
      return (
        <ThumbnailAnchor
          href={obj.src}
          key={i}
          onClick={(e) => this.openImgsViewer(i, e)}
        >
          <SourceImg src={obj.thumbnail}/>
        </ThumbnailAnchor>
      )
    })

    return (
      <GalleryDiv gutter={gutter}>
        {gallery}
      </GalleryDiv>
    )
  }
  render () {
    return (
      <div>
        {this.props.heading && <h2>{this.props.heading}</h2>}
        {this.props.subheading && <p>{this.props.subheading}</p>}
        {this.renderGallery()}
        <ImgsViewer
          backdropCloseable
          currImg={this.state.currImg}
          closeBtnTitle={"test"}
          customControls={[<button></button>]}
          imgs={this.props.imgs}
          isOpen={this.state.isOpen}
          onClickImg={this.handleClickImg}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrev}
          onClickThumbnail={this.gotoImg}
          onClose={this.closeImgsViewer}
          preventScroll={this.props.preventScroll}
          showThumbnails={this.props.showThumbnails}
          spinner={this.props.spinner}
          spinnerColor={this.props.spinnerColor}
          spinnerSize={this.props.spinnerSize}
          theme={this.props.theme}
        />
      </div>
    )
  }
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  preventScroll: PropTypes.bool,
  spinner: PropTypes.func,
  spinnerColor: PropTypes.string,
  spinnerSize: PropTypes.number,
  theme: PropTypes.object,
  heading: PropTypes.string,
  imgs: PropTypes.array,
  showThumbnails: PropTypes.bool,
  subheading: PropTypes.string,
}

const gutter = {
  small: 2,
  large: 4,
}

const GalleryDiv = styled.div`
  margin-right: ${(props) => -props.gutter.small};
  overflow: hidden;
  @media (min-width: 500px) {
    margin-right: ${(props) => -props.gutter.large};
  }
`;

const ThumbnailAnchor = styled.a`
  box-sizing: border-box;
  display: block;
  float: left;
  line-height: 0px;
  padding-right: ${gutter.small + "px"};
  padding-bottom: ${gutter.small + "px"};
  overflow: hidden;

  @media (min-width: 500px) {
    padding-right: ${gutter.large + "px"};
    padding-left: ${gutter.large + "px"};
  }
`;

const SourceImg = styled.img`
  border: 0px;
  display: block;
  height: auto;
  max-width: 100%;
  width: auto;
`;

export default Gallery
