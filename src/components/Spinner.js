import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Spinner = props => {
  //const classes = StyleSheet.create(styles(props))

  return (
    <BouncingLoaderDiv>
      <ChildDiv size={props.size} color={props.color} animationDelay={"0"}/>
      <ChildDiv size={props.size} color={props.color} animationDelay={"0.2"}/>
      <ChildDiv size={props.size} color={props.color} animationDelay={"0.4"}/>
    </BouncingLoaderDiv>
  )
}

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

const bouncingKeyframes = (size) => ({
  '0%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  '100%': {
    opacity: .1,
    transform: `translateY(-${size}px)`,
  }
})

const BouncingLoaderDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ChildDiv = styled.div`
  @keyframes bouncingKeyFrames {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100%{
      opacity: .1;
      transform: ${(props) => `translateY(-${props.size}px)`}
    }
  }

  width: ${(props) => props.size + "px"};
  height: ${(props) => props.size + "px"};
  margin: ${(props) => `${3 * props.size}px ${.2 * props.size}px`};
  background: ${(props) => props.color};
  border-radius: 50%;
  animation-name: bouncingKeyFrames;
  animation-duration: .6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-delay: ${(props) => props.animationDelay + "s"};
`;

const styles = ({ color, size }) => ({
  bouncingLoader: {
    display: 'flex',
    justifyContent: 'center',
  },
  child: {
    width: size,
    height: size,
    margin: `${3 * size}px ${ .2 * size}px`,
    background: color,
    borderRadius: '50%',
    animationName: bouncingKeyframes(size),
    animationDuration: '.6s',
    animationDirection: 'alternate',
    animationIterationCount: 'infinite',
  },
  child2: {
    animationDelay: '0.2s',
  },
  child3: {
    animationDelay: '0.4s',
  }
})

export default Spinner
