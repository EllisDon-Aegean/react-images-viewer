import PropTypes from "prop-types";
import React from "react";
import arrowLeft from "../icons/arrow_left";
import arrowRight from "../icons/arrow_right";
import close from "../icons/close";
import plus from "../icons/plus";
import minus from "../icons/minus";
import cross from "../icons/cross";

const icons = { arrowLeft, arrowRight, close, plus, cross, minus };

const Icon = ({ fill, type, ...props }) => {
  const icon = icons[type];

  return <span dangerouslySetInnerHTML={{ __html: icon(fill) }} {...props} />;
};

Icon.propTypes = {
  fill: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(icons)),
};
Icon.defaultProps = {
  fill: "#fff",
};

export default Icon;
