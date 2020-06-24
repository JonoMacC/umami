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
      d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071L21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z"
      fill={fill}
    />
  </svg>
);

export default SVG;
