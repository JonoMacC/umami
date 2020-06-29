import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  className = "",
  width = "100%",
  height = "100%",
  viewBox = "0 0 24 24",
}) => (
  <svg
    style={style}
    width={width}
    height={height}
    viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5857 11L11.2929 5.70718L12.7071 4.29297L20.4142 12.0001L12.7071 19.7072L11.2929 18.293L16.5859 13H5V11H16.5857Z"
      fill={fill}
    />
  </svg>
);

export default SVG;
