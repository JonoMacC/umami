import React from "react";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import "./SearchBar.css";

import debounce from "lodash/debounce";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sizeClass: "",
      inputClass: "",
      inputFill: "#6d6d6d",
      buttonClass: "primary icon",
      buttonFill: "#181818",
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.emitScrollDebounced = debounce(this.emitScroll, 10);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    this.emitScrollDebounced(event.target.value);
  }

  emitScroll() {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 464) {
      this.setState({
        sizeClass: "top",
        inputClass: "compact",
        inputFill: "#aaaaaa",
        buttonClass: "icon compact",
        buttonFill: "#ffffff",
      });
    } else {
      this.setState({
        sizeClass: "",
        inputClass: "",
        inputFill: "#6d6d6d",
        buttonClass: "primary icon",
        buttonFill: "#181818",
      });
    }
  }

  handleTermChange(value) {
    this.props.onTermChange(value);
  }

  handleLocationChange(value) {
    this.props.onLocationChange(value);
  }

  handleSearch(event) {
    this.props.searchYelp();
    event.preventDefault();
  }

  render() {
    return (
      <div className={`SearchBar-container ${this.state.sizeClass}`}>
        <div className={`SearchBar ${this.state.sizeClass}`}>
          <InputField
            className={this.state.inputClass}
            name="Food or Restaurant"
            placeholder="Search Restaurants"
            icon="search"
            iconFill={this.state.inputFill}
            onSearch={this.handleSearch}
            onChange={this.handleTermChange}
          />
          <InputField
            className={this.state.inputClass}
            name="Location"
            placeholder={this.props.locationPlaceholder}
            icon="map-pin"
            iconFill={this.state.inputFill}
            onSearch={this.handleSearch}
            onChange={this.handleLocationChange}
          />
          <Button
            className={this.state.buttonClass}
            onClick={this.handleSearch}
            icon="arrow-right"
            label="Search"
            iconFill={this.state.buttonFill}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
