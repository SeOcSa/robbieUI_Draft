import React, { Component } from "react";
import vismalogo from "../../../images/logoVisma.png";
import RoboInfoStatusSection from "./roboinfostatussection";
import RoboInfoTypeSection from "./roboinfotypesection";
import RoboInfoVersionSection from "./roboinfoversionsection";
import RoboInfoAccordion from "./roboinfoaccordion";

class RoboInfo extends Component {
  state = {};
  render() {
    return (
      <div className="row mt-4 ml-4">
        <RoboInfoStatusSection />
        <RoboInfoTypeSection vismaLogo={vismalogo} />
        <RoboInfoVersionSection />
        <RoboInfoVersionSection />
        <RoboInfoAccordion />
      </div>
    );
  }
}

export default RoboInfo;
