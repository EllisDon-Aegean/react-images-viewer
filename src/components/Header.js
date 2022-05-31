import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import defaults from '../theme'
import Icon from './Icon'

function Header ({ caption, customControls, onClose, showCloseBtn, closeBtnTitle, theme, ...props }) {
  //const classes = StyleSheet.create(deepMerge(defaultStyles, theme))

  return (
    <HeaderDiv defaults={defaults} {...props}>
      <InnerDiv defaults={defaults}>
        {!!showCloseBtn && (
          <TitleDiv>
            <CloseButton
              title={closeBtnTitle}
              onClick={onClose}
            >
              <Icon fill={!!theme.close && theme.close.fill || defaults.close.fill} type="close" />
            </CloseButton>
            <Title defaults={defaults}>{caption}</Title>
          </TitleDiv>
        )}
        {customControls ? 
        <ControlsDiv>
        {customControls}
        </ControlsDiv>
        : <span />}
      </InnerDiv>
    </HeaderDiv>
  )
}

Header.propTypes = {
  theme: PropTypes.object,
  customControls: PropTypes.array,
  onClose: PropTypes.func.isRequired,
  showCloseBtn: PropTypes.bool,
  closeBtnTitle: PropTypes.string,
  caption: PropTypes.string
}

const HeaderDiv = styled.div`
  display: flex;
  height: ${(props) => props.defaults.header.height};
  position: relative;
  width: 100%;
`;

const InnerDiv = styled.div`
  display: flex;
  height: ${(props) => props.defaults.header.height};
  position: relative;
  width: 100%;
`;

const ControlsDiv = styled.div`
  position: absolute;
  right: 0px;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  vertical-align: middle;
  color: ${(props) => props.defaults.header.color};
  display: inline-block;
  font-family: ${(props) => props.defaults.header.font};
  font-size: ${(props) => props.defaults.header.fontSize + 'px'};
  margin-bottom: 5px
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  position: relative;
  top: 0px;
  vertical-align: bottom;
  z-index: 1;

  height: 40px;
  padding: 10px;
  width: 40px;
`;

// const defaultStyles = {
//   header: {
//     display: 'flex',
//     height: defaults.header.height,
//     position: 'relative',
//     width: '65vw'
//   },
//   controls: {
//     position: 'absolute',
//     right: '0px'
//   },
//   titlediv: {
//     display: 'flex',
//     alignItems: 'center'
//   },
//   title: {
//     verticalAlign: 'middle',
//     color: defaults.footer.count.color,
//     display: 'inline-block',
//     fontFamily: defaults.header.font
//   },
//   close: {
//     background: 'none',
//     border: 'none',
//     cursor: 'pointer',
//     outline: 'none',
//     position: 'relative',
//     top: 0,
//     verticalAlign: 'bottom',
//     zIndex: 1,

//     // increase hit area
//     height: 40,
//     padding: 10,
//     width: 40,
//   }
// }

export default Header
