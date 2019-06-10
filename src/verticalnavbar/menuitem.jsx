import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class MenuItem extends Component {
  renderClassDinamic() {
    let classes = "nav-link ml-2 menu-item";
    return this.props.isActive ? classes + " active" : classes;
  }

  render() {
    return (
      <span
        className={this.renderClassDinamic()}
        onClick={this.props.onHandleClick}
      >
        <FontAwesomeIcon
          className="menu-item-icon"
          icon={this.props.iconType}
        />
        {this.props.buttonCaption}
      </span>
    );
  }
}

export default MenuItem;
