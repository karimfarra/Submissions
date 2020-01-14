import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <input type="text" name="search" id="type" placeholder="type country" />
        <button className="buttonxd" type="button">
          Find weather
        </button>
      </form>
    );
  }
}
export default Search;
