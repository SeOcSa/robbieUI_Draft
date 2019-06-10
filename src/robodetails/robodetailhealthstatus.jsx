import React, { Component } from "react";

class RoboDetailsHealthStatus extends Component {
  render() {
    return (
      <div className="progress bg-progress">
        <div
          className="progress-bar robo-health-status"
          role="progressbar"
          aria-valuenow={this.props.roboHealth}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    );
  }
}

export default RoboDetailsHealthStatus;
