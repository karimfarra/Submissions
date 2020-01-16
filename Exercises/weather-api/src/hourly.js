import clear from "./img/weather-icons/clear.svg";
import fog from "./img/weather-icons/fog.svg";
import rain from "./img/weather-icons/rain.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import React, { Component } from "react";
import Hour from "./hour";
//import this.props.FakeWeather from "./data/FakeWeather.json";
import drizzle from "./img/weather-icons/drizzle.svg";
import snow from "./img/weather-icons/snow.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import unknown from "./img/weather-icons/unknown.svg";
import storm from "./img/weather-icons/storm.svg";
class Hourly extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    return (
      <>
        <div className="hourly-weather">
          <Hour
            time={this.props.FakeWeather.list[1].dt_txt.split(" ")[1]}
            temperature={this.props.FakeWeather.list[1].main.temp}
            images={this.getWeatherIcon(
              this.props.FakeWeather.list[1].weather[0].id
            )}
          />

          <Hour
            time={this.props.FakeWeather.list[2].dt_txt.split(" ")[1]}
            temperature={this.props.FakeWeather.list[2].main.temp}
            images={this.getWeatherIcon(
              this.props.FakeWeather.list[2].weather[0].id
            )}
          />

          <Hour
            time={this.props.FakeWeather.list[3].dt_txt.split(" ")[1]}
            temperature={this.props.FakeWeather.list[3].main.temp}
            images={this.getWeatherIcon(
              this.props.FakeWeather.list[3].weather[0].id
            )}
          />
          <Hour
            time={this.props.FakeWeather.list[4].dt_txt.split(" ")[1]}
            temperature={this.props.FakeWeather.list[4].main.temp}
            images={this.getWeatherIcon(
              this.props.FakeWeather.list[4].weather[0].id
            )}
          />
          <Hour
            time={this.props.FakeWeather.list[5].dt_txt.split(" ")[1]}
            temperature={this.props.FakeWeather.list[5].main.temp}
            images={this.getWeatherIcon(
              this.props.FakeWeather.list[5].weather[0].id
            )}
          />
          <Hour
            time={this.props.FakeWeather.list[6].dt_txt.split(" ")[1]}
            temperature={this.props.FakeWeather.list[6].main.temp}
            images={this.getWeatherIcon(
              this.props.FakeWeather.list[6].weather[0].id
            )}
          />
          <Hour
            time={this.props.FakeWeather.list[7].dt_txt.split(" ")[1]}
            temperature={this.props.FakeWeather.list[7].main.temp}
            images={this.getWeatherIcon(
              this.props.FakeWeather.list[7].weather[0].id
            )}
          />
        </div>
      </>
    );
  }
}
export default Hourly;
