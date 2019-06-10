import React, { Component } from "react";
import Brand from "./hnavbarbrand";
import NavBarToggleButton from "./hnavbartogglerbtn";
import SearchBar from "./hnavbarsearch";
import NavbarProfile from "./hnavbarprofile";

class HorizontalNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light horizontal-navbar">
        <Brand />
        <NavBarToggleButton />
        <div className="collapse navbar-collapse" id="navbarNav">
          <SearchBar placeHolder="Search for a robot" />
          <NavbarProfile />
        </div>
      </nav>
    );
  }
}

export default HorizontalNavBar;
