import React from "react";
import "./App.css";
import Header from "./components/centralpanel/header";
import FilterMenu from "./components/centralpanel/filtermenu/filtermenu";
import RobotsView from "./components/centralpanel/robotsview/robotsview";
import HorizontalNavBar from "./components/navbar/horizontalnavbar/horizontalnavbar";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLayerGroup,
  faThLarge,
  faPlus,
  faCog,
  faWarehouse,
  faLightbulb,
  faTape,
  faEye,
  faTools,
  faMapMarkerAlt,
  faArrowDown,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import RoboDetails from "./components/centralpanel/robodetails/robodetails";
import VerticalNavBar from "./components/navbar/verticalnavbar/verticalnavbar";

library.add(
  faLayerGroup,
  faThLarge,
  faPlus,
  faCog,
  faWarehouse,
  faLightbulb,
  faTape,
  faEye,
  faTools,
  faMapMarkerAlt,
  faArrowDown,
  faArrowUp
);

class App extends React.Component {
  state = {
    selectedRobbie: {},
    robbies: []
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedRobbie: {
        roboName: "Robbie 5",
        roboType: "Warehouse",
        status: "On",
        roboLocation: "Visma Timisoara",
        roboAddress: "Strada Aristide Demetriade 1, Timișoara 300088",
        hardwareVersion: "62.9",
        softwareVersion: "5.4",
        health: "25",
        isSelected: true
      },
      robbies: [
        {
          roboName: "Robbie 5",
          roboType: "Warehouse",
          status: "On",
          roboLocation: "Visma Timisoara",
          roboAddress: "Strada Aristide Demetriade 1, Timișoara 300088",
          hardwareVersion: "62.9",
          softwareVersion: "5.4",
          health: "25",
          isSelected: false
        },
        {
          roboName: "Robbie 6",
          roboType: "Warehouse",
          status: "Off",
          roboLocation: "Visma Sibiu",
          roboAddress: "Strada Iulian Demetriade 10, Sibiu 300088",
          hardwareVersion: "10.9",
          softwareVersion: "7.4",
          health: "50",
          isSelected: false
        }
      ]
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <HorizontalNavBar />
        <div className="row bg-light app-container" id="container">
          <VerticalNavBar />
          <div className="col-xs-12 col-md-8 central-panel-container ">
            <div className="row central-panel-header-container">
              <Header />
            </div>
            <div className="row central-panel-robo-container ">
              <FilterMenu />
              Add robo view here.
            </div>
          </div>
          <div className="col-xs-6 col-md-4 robo-details-container">
            Add robo details here
          </div>
        </div>
      </div>
    );
  }
}

export default App;
