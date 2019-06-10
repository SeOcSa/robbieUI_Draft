import React, { Component } from "react";
import MenuItem from "./menuitem";
import "./NavBar.css";

class VerticalNavBar extends Component {
  state = {
    buildingView: false,
    gridView: false,
    settingsView: false
  };

  handleBuilingViewClick() {
    var buildingView = !this.state.buildingView;
    this.setState({
      buildingView: buildingView,
      gridView: false,
      settingsView: false
    });
  }

  handleGridViewClick() {
    let gridView = !this.state.gridView;
    this.setState({
      gridView: gridView,
      buildingView: false,
      settingsView: false
    });
  }

  handleSettingsViewClick() {
    let settingsView = !this.state.settingsView;

    this.setState({
      settingsView: settingsView,
      buildingView: false,
      gridView: false
    });
  }

  render() {
    return (
      <div className="col-auto vertical-nav-bar">
        <nav className={"navbar navbar-light bg-light full-h vertical-navbar"}>
          <ul className="nav nav-pills mb-auto">
            <li className="nav-item mt-2">
              <MenuItem
                isActive={this.state.buildingView}
                iconType="layer-group"
                onHandleClick={this.handleBuilingViewClick.bind(this)}
              />
            </li>
            <li className="nav-item mt-2">
              <MenuItem
                isActive={this.state.gridView}
                iconType="th-large"
                onHandleClick={this.handleGridViewClick.bind(this)}
              />
            </li>
          </ul>
          <ul className="nav nav-pills mt-auto mb-4">
            <li className="nav item">
              <MenuItem
                iconType="cog"
                isActive={this.state.settingsView}
                onHandleClick={this.handleSettingsViewClick.bind(this)}
              />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default VerticalNavBar;
