import React from "react";
import { ReactComponent as WordMark } from "../Icons/wordmark.svg";
import SearchBar from "../SearchBar/SearchBar";
import "./Hero.css";

class Hero extends React.Component {
  render() {
    return (
      <div className="Hero">
        <div className="logo">
          <WordMark />
        </div>
        <h1>Local. Delicious. Food.</h1>
        <SearchBar
          searchYelp={this.props.searchYelp}
          onLocationChange={this.props.onLocationChange}
          locationPlaceholder={this.props.locationPlaceholder}
          onTermChange={this.props.onTermChange}
        />
      </div>
    );
  }
}

export default Hero;
