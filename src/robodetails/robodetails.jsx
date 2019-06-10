import React, { Component } from "react";
import RoboDetailsHeader from "./robodetailsheader";
import RoboInfo from "./roboinfo";

class RoboDetails extends Component {
  render() {
    return (
      <div>
        <RoboDetailsHeader />
        <RoboInfo />
      </div>
    );
  }
}

export default RoboDetails;
