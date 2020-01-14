import clear from "./img/weather-icons/clear.svg";
import fog from "./img/weather-icons/fog.svg";
import rain from "./img/weather-icons/rain.svg";
import React, { Component } from "react";

class Hourly extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="hourly-weather" />
        <div className="first">
          <p>time</p>
          <img src={clear} alt="" />
          <p>tempreature</p>
        </div>
        <div className="second">
          <p>time</p>
          <img src={rain} alt="" />
          <p>tempreature</p>
        </div>
        <div className="third">
          <p>time</p>
          <img src={fog} alt="" />
          <p>tempreature</p>
        </div>
        <div className="fourth">
          <p>time</p>
          <img src={clear} alt="" />
          <p>tempreature</p>
        </div>
        <div className="fifth">
          <p>time</p>
          <img src={rain} alt="" />
          <p>tempreature</p>
        </div>
        <div className="sixth">
          <p>time</p>
          <img src={clear} alt="" />
          <p>tempreature</p>
        </div>
        <div className="seventh">
          <p>time</p>
          <img src={fog} alt="" />
          <p>tempreature</p>
        </div>
      </>
    );
  }
}
export default Hourly;
