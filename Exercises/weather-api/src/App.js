import React, { Component } from "react";
import Hourly from "./hourly";
import Search from "./Search";
import Now from "./now";
import "./index.css";
//import FakeWeather from "./data/FakeWeather.json";
import storm from "./img/weather-icons/storm.svg";
import clear from "./img/weather-icons/clear.svg";
import fog from "./img/weather-icons/fog.svg";
import rain from "./img/weather-icons/rain.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import snow from "./img/weather-icons/snow.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import unknown from "./img/weather-icons/unknown.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FakeWeather: null
    };
  }

  async componentDidMount() {
    let response = await fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=london&cnt=8&appid=015789ae0d61ff7072a135396a0007f3"
    );
    let result = await response.json();
    this.setState({
      FakeWeather: result
    });
  }

  getWeatherIcon = id => {
    if (id === 800) {
      return clear;
    }
    if (id === 801) {
      return partlycloudy;
    }
    if (id > 300 && id <= 499) {
      return drizzle;
    }
    if (id <= 300) {
      return storm;
    }
    if (id >= 500 && id <= 599) {
      return rain;
    }
    if (id >= 600 && id <= 699) {
      return snow;
    }
    if (id >= 700 && id <= 799) {
      return fog;
    }
    if (id >= 801 && id <= 805) {
      return mostlycloudy;
    }
  };
  render() {
    return this.state.FakeWeather === null ? null : (
      <>
        <header className="header">
          <Search />
        </header>

        <main>
          <Now
            images={this.getWeatherIcon(
              this.state.FakeWeather.list[0].weather[0].id
            )}
            descriptions={this.state.FakeWeather.list[0].weather[0].description}
            temperature={this.state.FakeWeather.list[0].main.temp}
            Humidity={this.state.FakeWeather.list[0].main.humidity}
            pressure={this.state.FakeWeather.list[0].main.pressure}
          />
          <Hourly FakeWeather={this.state.FakeWeather} />
        </main>
      </>
    );
  }
}

export default App;
