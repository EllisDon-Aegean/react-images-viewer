import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Thumbnail from './Thumbnail'
import defaults from '../theme'

function Thumbnails ({ currImg, imgs, onClickThumbnail }) {
  return (
    <ThumbnailsDiv defaults={defaults}>
      {imgs.map((img, idx) => {
        <Thumbnail
          {...img}
          active={idx === currImg}
          index={idx}
          key={idx}
          onClick={onClickThumbnail}
        />
      })}
    </ThumbnailsDiv>
  )
}

Thumbnails.propTypes = {
  currImg: PropTypes.number,
  imgs: PropTypes.array,
  onClickThumbnail: PropTypes.func.isRequired,
}

const ThumbnailsDiv = styled.div`
  bottom: ${(props) => props.defaults.container.gutter.vertical};
  color: #fff;
  height: ${(props) => props.defaults.thumbnail.height};
  left: ${(props) => props.defaults.container.gutter.horizontal};
  overflow-x: scroll;
  overflow-y: hidden;
  position: absolute;
  right: ${(props) => props.defaults.container.gutter.horizontal};
  text-align: center;
  white-space: nowrap;
`;

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

export default Thumbnails
