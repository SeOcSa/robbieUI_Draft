import React, { Component } from "react";

class RoboInfoStatusSection extends Component {
  renderStatusClass() {
    let classes = "mr-2 border";

    return this.props.status === "Online"
      ? classes + " online-dot"
      : classes + " offline-dot";
  }
  render() {
    return (
      <div className="col-sm-6 robo-status-info">
        <h6 className="robo-info-section-title mt-2">Status</h6>
        <div className="row">
          <div className="col">
            <span className={this.renderStatusClass()} />
            <small className="robo-card-status">{this.props.status}</small>
          </div>
        </div>
        <button
          type="button btn-sm"
          className="btn mt-2 btn-sm pb-2 btn-switch-off"
        >
          Switch off
        </button>
      </div>
    );
  }
}

export default RoboInfoStatusSection;
