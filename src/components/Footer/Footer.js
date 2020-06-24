import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <p className="small center">
          Hand-coded with ♥ by{" "}
          <a href="https://twitter.com/jonmaccaull">Jon MacCaull</a>. See
          project on Github.
        </p>
      </div>
    );
  }
}

export default Footer;
