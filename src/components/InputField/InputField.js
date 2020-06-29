import React from "react";
import "./InputField.css";
import Icon from "../Icons/Icon";

class InputField extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleSearch(event) {
    this.props.onSearch(event);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.handleSearch(event);
    }
  }

  render() {
    return (
      <div className={`InputField ${this.props.className}`}>
        <div className="icon-box">
          <Icon
            fill={this.props.iconFill}
            name={this.props.icon}
            width="100%"
            height="100%"
          />
        </div>
        <input
          className="input"
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        ></input>
      </div>
    );
  }
}

export default InputField;
