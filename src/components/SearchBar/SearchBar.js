import React from "react";
import "./SearchBar.css";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
      <div className="SearchBar">
        <InputField
          name="Food or Restaurant"
          placeholder="Search Restaurants"
          icon="search"
          iconFill="#6d6d6d"
          onSearch={this.handleSearch}
          onChange={this.handleTermChange}
        />
        <InputField
          name="Location"
          placeholder={this.props.locationPlaceholder}
          icon="map-pin"
          iconFill="#6d6d6d"
          onSearch={this.handleSearch}
          onChange={this.handleLocationChange}
        />
        <Button
          className="primary icon"
          onClick={this.handleSearch}
          icon="arrow-right"
          label="Search"
          iconFill="#181818"
        />
      </div>
    );
  }
}

export default SearchBar;
