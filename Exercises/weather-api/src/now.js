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
            <img src={this.props.images} />
          </div>
          <div className="descriptions">
            <p style={{ fontWeight: "bold" }}>{this.props.descriptions}</p>
          </div>
          <div className="temperature">
            <p>
              <strong>{Math.round(this.props.temperature - 273.15)}</strong>
            </p>
          </div>
          <div className="Humidity-Pressure">
            <p>
              <b>
                Humidity:{this.props.Humidity} Pressure:{this.props.pressure}
              </b>
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default Now;
