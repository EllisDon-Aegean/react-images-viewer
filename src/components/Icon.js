import PropTypes from "prop-types";
import React from "react";
import arrowLeft from "../icons/arrow_left";
import filledArrowLeft from "../icons/filled_arrow_left";
import arrowRight from "../icons/arrow_right";
import filledArrowRight from "../icons/filled_arrow_right";
import close from "../icons/close";
import plus from "../icons/plus";
import minus from "../icons/minus";
import cross from "../icons/cross";
import resetZoom from "../icons/reset_zoom";

const icons = {
  arrowLeft, filledArrowLeft,
  arrowRight, filledArrowRight,
  close, plus, cross, minus, resetZoom
};

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
