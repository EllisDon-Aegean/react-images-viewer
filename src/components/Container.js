import PropTypes from 'prop-types'
import React from 'react'
import { css, StyleSheet } from 'aphrodite/no-important'
import styled from 'styled-components';

import defaults from '../theme'
import { deepMerge } from '../utils/util'

const ContainerDiv = styled.div`
    align-items: center;
    background: ${(props) => props.defaults.container.background};
    box-sizing: border-box;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    padding-top: ${(props) => props.defaults.container.gutter.vertical}px;
    padding-right: ${(props) => props.defaults.container.gutter.horizontal}px;
    padding-bottom: ${(props) => props.defaults.container.gutter.vertical}px;
    padding-left: ${(props) => props.defaults.container.gutter.horizontal}px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${(props) => props.defaults.container.zIndex};
  `;

function Container (props) {
  const classes = StyleSheet.create(deepMerge(defaultStyles, props.theme))

  return (
    // <div
    //   id="viewerBackdrop"
    //   className={css(classes.container)}
    //   {...props}
    // />
    <ContainerDiv defaults={defaults} id="viewerBackdrop" {...props}></ContainerDiv>
  )
}

Container.propTypes = {
  theme: PropTypes.object
}

const defaultStyles = {
  container: {
    alignItems: 'center',
    backdropColor: defaults.container.background,
    boxSizing: 'border-box',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    paddingTop: defaults.container.gutter.vertical,
    paddingRight: defaults.container.gutter.horizontal,
    paddingBottom: defaults.container.gutter.vertical,
    paddingLeft: defaults.container.gutter.horizontal,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: defaults.container.zIndex,
  }
}

export default Container
