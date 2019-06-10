import React, { Component } from "react";
class RoboInfoTypeSection extends Component {
  render() {
    return (
      <div className="col-sm-6 robo-type-info mt-2">
        <h6 className="robo-info-section-title">{this.props.roboType}</h6>
        <div className="media robo-type-icon" id="navBarProfile">
          <img
            src={this.props.vismaLogo}
            height="90"
            width="90"
            alt="vismaLogo"
          />
        </div>
      </div>
    );
  }
}

export default RoboInfoTypeSection;
