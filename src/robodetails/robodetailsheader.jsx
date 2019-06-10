import React, { Component } from "react";
import RoboDetailsProfile from "./robodetailsprofile";
import RoboDetailsHealthStatus from "./robodetailhealthstatus";

class RoboDetailsHeader extends Component {
  render() {
    return (
      <div className="row mt-4">
        <div className="col-sm-2">
          <RoboDetailsProfile />
        </div>
        <div className="col-sm-8 text-left ml-4">
          <h5 className="mb-3 robo-card-name">{this.props.roboName}</h5>
          <RoboDetailsHealthStatus roboHealth={this.props.roboHealth} />
          <h6 className="mt-2 robo-card-location">
            Health: {this.props.roboHealth} %
          </h6>
        </div>
      </div>
    );
  }
}

export default RoboDetailsHeader;
