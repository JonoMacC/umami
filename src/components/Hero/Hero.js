import React from "react";
import { ReactComponent as WordMark } from "../Icons/wordmark.svg";
import "./Hero.css";

class Hero extends React.Component {
  render() {
    return (
      <div className="Hero">
        <div className="logo">
          <WordMark />
        </div>
        <h1>Local. Delicious. Food.</h1>
      </div>
    );
  }
}

export default Hero;
