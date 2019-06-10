import React, { Component } from "react";
import RoboInfoAccordionItem from "./roboinfoaccordionitem";

class RoboInfoAccordion extends Component {
  render() {
    const data = [
      {
        title: "Location",
        paragraphTitle: "Building"
      },
      {
        title: "Control"
      },
      {
        title: "Streaming"
      }
    ];
    return (
      <div {...{ className: "w-100 mt-4" }}>
        <ul {...{ className: "accordion-list" }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: "accordion-list-item", key }}>
                <RoboInfoAccordionItem {...data} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default RoboInfoAccordion;
