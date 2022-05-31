import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'

import defaults from '../theme'
import FALLBACK_IMAGES from '../constants/fallback-images';


function Thumbnail ({ index, src, thumbnail, active, onClick, theme }) {
  const url = thumbnail || src;
  
  useEffect(() => {
    const img = new Image();
    img.onerror = handleImgError;
    img.src = url;
  }, []);

  const thumbnailDivRef = useRef(null);

  const handleImgError = useCallback(() => {
    if (!thumbnailDivRef.current) return;
    thumbnailDivRef.current.style.backgroundImage = `url("${FALLBACK_IMAGES.REGULAR}")`;
  }, []);

  return (
    <ThumbnailDiv
      // className={css(classes.thumbnail, active && classes.thumbnail__active)}
      active={active}
      defaults={defaults}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onClick(index)
      }}
      ref={thumbnailDivRef}
      style={{ backgroundImage: `url("${url}")` }}
    />
  )
}

Thumbnail.propTypes = {
  theme: PropTypes.object,
  active: PropTypes.bool,
  index: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string,
  thumbnail: PropTypes.string,
}

const ThumbnailDiv = styled.div`
  background-position: center;
  background-size: cover;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .2);
  cursor: pointer;
  display: inline-block;
  height: ${(props) => props.defaults.thumbnail.size + "px"};
  margin: ${(props) => props.defaults.thumbnail.gutter + "px"};
  overflow: hidden;
  width: ${(props) => props.defaults.thumbnail.size + "px"};
  box-shadow: ${(props) => props.active ? `inset 0 0 0 2px ${props.defaults.thumbnail.activeBorderColor}` : "none"};
`;

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

export default Thumbnail
