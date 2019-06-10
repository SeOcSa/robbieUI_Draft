import React, { Component } from "react";
import logo from "../images/logo.png";
class Brand extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="media">
          <img className="brand-logo-size" src={logo} alt="logo" />
        </div>
      </React.Fragment>
    );
  }
}

export default Brand;
