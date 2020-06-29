import React from "react";

import MapPin from "./MapPin";
import Search from "./Search";
import ArrowRight from "./ArrowRight";

const Icon = (props) => {
  switch (props.name) {
    case "map-pin":
      return <MapPin {...props} />;
    case "search":
      return <Search {...props} />;
    case "arrow-right":
      return <ArrowRight {...props} />;
    default:
      return <div />;
  }
};

export default Icon;
