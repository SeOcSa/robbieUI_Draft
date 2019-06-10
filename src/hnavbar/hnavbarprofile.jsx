import React, { Component } from "react";
import profilePic from "../images/profilePic.svg";

class NavbarProfile extends Component {
  render() {
    return (
      <div className="media">
        <img
          className="mr-3"
          src={profilePic}
          alt="profilePic"
          height="50"
          width="40"
        />
      </div>
    );
  }
}

export default NavbarProfile;
