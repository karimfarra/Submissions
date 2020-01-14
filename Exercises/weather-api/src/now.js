import React, { Component } from "react";
import storm from "./img/weather-icons/storm.svg";
class Now extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="currentWeatherContainer">
          <div className="imageContainer">
            <img src={storm} />
          </div>
          <div className="description">
            <p style={{ fontWeight: "bold" }}>overcast clouds</p>
          </div>
          <div className="tempreature">
            <p>
              <strong>Static data</strong>
            </p>
          </div>
          <div className="Humidity-and-pressure">
            <p>
              <b>Static data</b>
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default Now;
