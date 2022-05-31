import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';

import defaults from "../theme";
import Icon from "./Icon";

const ArrowButton = styled.button`
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  padding: 10px; // increase hit area
  position: absolute;
  top: 50%;

  // disable user select
  -webkit-touch-callout: none;
  user-select: none;

  right: ${(props) => props.right ? (props.horizontalGutter || props.defaults.container.gutter.horizontal) + "px" : "none"};
  left: ${(props) => props.right ? "none" : (props.horizontalGutter || props.defaults.container.gutter.horizontal) + "px"};

  height: ${(props) => props.height + "px"};
  margin-top: ${(props) => props.height / -2 + "px"};
  width: 40px;

  @media (min-width: 768px) {
    width: 70,
  };
`;

function Arrow({ direction, icon, onClick, theme, size, horizontalGutter, ...props }) {
  const height = size == "medium" ? defaults.arrow.height : defaults.thumbnail.size;

  return (
    <ArrowButton
      type="button" // default: submit
      right={direction && direction == "right"}
      height={height}
      onClick={onClick}
      onTouchEnd={onClick}
      defaults={defaults}
      horizontalGutter={horizontalGutter}
      {...props}
    >
      <Icon
        fill={(!!theme.arrow && theme.arrow.fill) || defaults.arrow.fill}
        type={icon}
      />
    </ArrowButton>
  );
}

Arrow.propTypes = {
  theme: PropTypes.object,
  direction: PropTypes.oneOf(["left", "right"]),
  icon: PropTypes.string,
  horizontalGutter: PropTypes.number,
  onClick: PropTypes.func.isRequired
};
// const defaultStyles = {
//   arrow: {
//     background: "none",
//     border: "none",
//     borderRadius: 4,
//     cursor: "pointer",
//     outline: "none",
//     padding: 10, // increase hit area
//     position: "absolute",
//     top: "50%",

//     // disable user select
//     WebkitTouchCallout: "none",
//     userSelect: "none",
//   },

//   // sizes
//   arrow__size__medium: {
//     height: defaults.arrow.height,
//     marginTop: defaults.arrow.height / -2,
//     width: 40,

//     "@media (min-width: 768px)": {
//       width: 70,
//     },
//   },
//   arrow__size__small: {
//     height: defaults.thumbnail.size,
//     marginTop: defaults.thumbnail.size / -2,
//     width: 30,

//     "@media (min-width: 500px)": {
//       width: 40,
//     },
//   },

//   // direciton
//   arrow__direction__right: {
//     right: defaults.container.gutter.horizontal,
//   },
//   arrow__direction__left: {
//     left: defaults.container.gutter.horizontal,
//   },
// };

export default Arrow;
