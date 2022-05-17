import PropTypes from 'prop-types'
import React from 'react'
import { css, StyleSheet } from 'aphrodite/no-important'

import defaults from '../theme'
import { deepMerge } from '../utils/util'
import Icon from './Icon'

function Header ({ caption, customControls, onClose, showCloseBtn, closeBtnTitle, theme, ...props }) {
  const classes = StyleSheet.create(deepMerge(defaultStyles, theme))

  return (
    <div className={css(classes.header)} {...props}>
      {!!showCloseBtn && (
        <div className={css(classes.titlediv)}>
          <button
            title={closeBtnTitle}
            className={css(classes.close)}
            onClick={onClose}
          >
            <Icon fill={!!theme.close && theme.close.fill || defaults.close.fill} type="close" />
          </button>
          <span className={css(classes.title)}>{caption}</span>
        </div>
      )}
      {customControls ? 
      <div className={css(classes.controls)}>
      {customControls}
      </div>
       : <span />}
    </div>
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

const defaultStyles = {
  header: {
    display: 'flex',
    height: defaults.header.height,
    position: 'relative',
    width: '65vw'
  },
  controls: {
    position: 'absolute',
    right: '0px'
  },
  titlediv: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    verticalAlign: 'middle',
    color: defaults.footer.count.color,
    display: 'inline-block',
    fontFamily: defaults.header.font
  },
  close: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    position: 'relative',
    top: 0,
    verticalAlign: 'bottom',
    zIndex: 1,

    // increase hit area
    height: 40,
    padding: 10,
    width: 40,
  }
}

export default Header
