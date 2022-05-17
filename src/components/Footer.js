import PropTypes from 'prop-types'
import React from 'react'
import { css, StyleSheet } from 'aphrodite/no-important'
import styled from 'styled-components';
import defaults from '../theme'
import { deepMerge } from '../utils/util'

function Footer ({ countCurr, countSeparator, countTotal, showCount, theme, ...props }) {
  if (!showCount) return null

  //const classes = StyleSheet.create(deepMerge(defaultStyles, theme))

  const FooterDiv = styled.div`
    box-sizing: border-box;
    color: ${(props) => props.defaults.footer.color};
    cursor: auto;
    display: flex;
    justify-content: space-between;
    left: 0;
    line-height: 1.3;
    padding-top: ${(props) => props.defaults.footer.gutter.vertical}px;
    padding-right: ${(props) => props.defaults.footer.gutter.horizontal}px;
    padding-bottom: ${(props) => props.defaults.footer.gutter.vertical}px;
    padding-left: ${(props) => props.defaults.footer.gutter.horizontal}px;
  `;

  const FooterCountDiv = styled.div`
    color: ${(props) => props.defaults.footer.count.color};
    font-size: ${(props) => props.defaults.footer.count.fontSize}px;
    padding-left: 1em; // add a small gutter for the caption
  `;

  const imgCount = showCount ? (
    <FooterCountDiv defaults={defaults}>
      {countCurr}
      {countSeparator}
      {countTotal}
    </FooterCountDiv>
  ) : <span />

  return (
    <FooterDiv defaults={defaults}>
      {imgCount}
    </FooterDiv>
  )
}

Footer.propTypes ={
  theme: PropTypes.object,
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  countCurr: PropTypes.number,
  countSeparator: PropTypes.string,
  countTotal: PropTypes.number,
  showCount: PropTypes.bool,
}

const defaultStyles = {
  footer: {
    boxSizing: 'border-box',
    color: defaults.footer.color,
    cursor: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    left: 0,
    lineHeight: 1.3,
    paddingTop: defaults.footer.gutter.vertical,
    paddingRight: defaults.footer.gutter.horizontal,
    paddingBottom: defaults.footer.gutter.vertical,
    paddingLeft: defaults.footer.gutter.horizontal,
  },
  footerCount: {
    color: defaults.footer.count.color,
    fontSize: defaults.footer.count.fontSize,
    paddingLeft: '1em', // add a small gutter for the caption
  },
  footerCaption: {
    flex: '1 1 0',
  }
}

export default Footer
