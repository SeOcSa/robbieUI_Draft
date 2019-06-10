import React, { Component } from "react";

class RoboInfoVersionSection extends Component {
  renderClass() {
    let classes = "col-sm-6";

    return !this.props.isOnRightSide ? classes + " robo-version-info" : classes;
  }

  render() {
    return (
      <div className={this.renderClass()}>
        <h6 className="robo-info-section-title pt-4">
          {this.props.versionType}
        </h6>
        <h6 className="mt-4 robo-info-version">V {this.props.version}</h6>
      </div>
    );
  }
}

export default RoboInfoVersionSection;
