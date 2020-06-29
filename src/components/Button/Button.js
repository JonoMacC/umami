import React from "react";
import Icon from "../Icons/Icon";

import "./Button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onClick(event);
  }

  renderButton() {
    if (this.props.className.includes("icon")) {
      return (
        <button className={this.props.className} onClick={this.handleClick}>
          <div className="icon-container">
            <Icon
              fill="#181818"
              name={this.props.icon}
              width="100%"
              height="100%"
            />
          </div>
        </button>
      );
    } else {
      return (
        <button className={this.props.className} onClick={this.handleClick}>
          {this.props.value}
        </button>
      );
    }
  }

  render() {
    return this.renderButton();
  }
}

export default Button;
