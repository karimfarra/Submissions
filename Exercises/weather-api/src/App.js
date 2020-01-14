import React, { Component } from "react";
import Hourly from "./hourly";
import Search from "./Search";
import Now from "./now";
import "./index.css";
import storm from "./img/weather-icons/storm.svg";
import clear from "./img/weather-icons/clear.svg";
import fog from "./img/weather-icons/fog.svg";
import rain from "./img/weather-icons/rain.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <header className="header">
          <Search />
        </header>

        <main>
          <Now />
          <Hourly />
        </main>
      </>
    );
  }
}

export default App;
