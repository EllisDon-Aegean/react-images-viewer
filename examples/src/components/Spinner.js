import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';

const SpinnerDiv = styled.div`
  display: 'inline-block';
  position: 'relative';
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

const SquareDiv = styled.div`

  @keyframes squareKeyFrames {
    0% {
    top: 0;
    left: '25%';
    opacity: 1;
    }
    25% {
      top: '50%';
      left: '50%';
      opacity: .75;
    }
    75% {
      top: '50%';
      left: 0;
      opacity: .5;
    }
    100% {
      top: 0;
      left: '25%';
      opacity: 1;
    }
  }

  position: absolute;
  width: ${(props) => props.size / 10 + "px"};
  height: ${(props) => props.size / 10 + "px"};
  border: ${(props) => `4px solid ${props.color}`};
  border-radius: 50%;
  background: ${(props) => props.color};
  animation-name: squareKeyframes;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const Spinner = (props) => {
  //const classes = StyleSheet.create(styles(props))

  return (
    <SpinnerDiv size={props.size}>
      <SquareDiv size={props.size} color={props.color} />
    </SpinnerDiv>
  )
}

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

// const squareKeyframes = {
//   '0%': {
//     top: 0,
//     left: '25%',
//     opacity: 1,
//   },
//   '25%': {
//     top: '50%',
//     left: '50%',
//     opacity: .75,
//   },
//   '75%': {
//     top: '50%',
//     left: 0,
//     opacity: .5,
//   },
//   '100%': {
//     top: 0,
//     left: '25%',
//     opacity: 1,
//   }
// }

// // const styles = ({ color, size }) => ({
// //   spinner: {
// //     display: 'inline-block',
// //     position: 'relative',
// //     width: size,
// //     height: size,
// //   },
// //   square: {
// //     position: 'absolute',
// //     width: size / 10,
// //     height: size / 10,
// //     border: `4px solid ${color}`,
// //     borderRadius: '50%',
// //     background: color,
// //     animationName: squareKeyframes,
// //     animationDuration: '2s',
// //     animationTimingFunction: 'linear',
// //     animationIterationCount: 'infinite',
// //   }
// // })

export default Spinner
