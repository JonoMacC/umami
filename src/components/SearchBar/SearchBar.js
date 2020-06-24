import React from "react";
import "./SearchBar.css";
import InputField from "../InputField/InputField";

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
          placeholder="Search Restaurants"
          icon="search"
          onSearch={this.handleSearch}
          onChange={this.handleTermChange}
        />
        <InputField
          placeholder="Where?"
          icon="map-pin"
          onSearch={this.handleSearch}
          onChange={this.handleLocationChange}
        />
      </div>
    );
  }
}

export default SearchBar;
