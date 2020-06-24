import React from "react";

import MapPin from "./MapPin";
import Search from "./Search";

const Icon = (props) => {
  switch (props.name) {
    case "map-pin":
      return <MapPin {...props} />;
    case "search":
      return <Search {...props} />;
    default:
      return <div />;
  }
};

export default Icon;
