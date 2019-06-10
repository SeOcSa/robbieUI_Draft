import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="ml-auto mr-3">
        <div className="form-group mt-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={this.props.placeHolder}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
