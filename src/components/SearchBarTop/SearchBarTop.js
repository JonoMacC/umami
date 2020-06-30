import React from "react";
import "./SearchBarTop.css";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

class SearchBarTop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      visibility: "",
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset >= 620) {
      this.setState({ isVisible: true, visibility: "show" });
    } else {
      this.setState({ isVisible: false, visibility: "" });
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
      <div className={`SearchBarTop ${this.state.visibility}`}>
        <InputField
          className="compact"
          placeholder={this.props.term}
          icon="search"
          iconFill="#aaaaaa"
          onSearch={this.handleSearch}
          onChange={this.handleTermChange}
        />
        <InputField
          className="compact"
          placeholder={this.props.location}
          icon="map-pin"
          iconFill="#aaaaaa"
          onSearch={this.handleSearch}
          onChange={this.handleLocationChange}
        />
        <Button
          className="icon compact"
          onClick={this.handleSearch}
          icon="arrow-right"
          iconFill="#ffffff"
          label="Search"
        />
      </div>
    );
  }
}

export default SearchBarTop;
