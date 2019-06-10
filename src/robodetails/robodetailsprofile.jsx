import React, { Component } from "react";
import bot17 from "../../../images/bot-17.png";

class RoboDetailsProfile extends Component {
  render() {
    return (
      <div className="media mr-3" id="navBarProfile">
        <img src={bot17} className="mr-3" height="60" width="60" alt="bot17" />
      </div>
    );
  }
}

export default RoboDetailsProfile;
