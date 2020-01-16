import React, { Component } from "react";
import clear from "./img/weather-icons/clear.svg";
import fog from "./img/weather-icons/fog.svg";
import rain from "./img/weather-icons/rain.svg";

function Hour(props) {
  return (
    <div className="first">
      <p>{props.time}</p>
      <img src={props.images} alt="" />
      <p>{Math.round(props.temperature - 273.15)}</p>
    </div>
  );
}
export default Hour;
