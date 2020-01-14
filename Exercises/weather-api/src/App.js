import React, { Component } from "react";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <header className="header">
          <form>
            <input
              type="text"
              name="search"
              id="type"
              placeholder="type country"
            />
            <button className="buttonxd" type="button">
              Find weather
            </button>
          </form>
        </header>

        <main>
          <div className="currentWeatherContainer">
            <div className="imageContainer">
              <img src="http://placekitten.com/g/200/300" />
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
          <div className="hourly-weather">
            <div className="first">
              <p>time</p>
              <img src="http://placekitten.com/g/200/300" alt="" />
              <p>tempreature</p>
            </div>
            <div className="second">
              <p>time</p>
              <img src="http://placekitten.com/g/200/300" alt="" />
              <p>tempreature</p>
            </div>
            <div className="third">
              <p>time</p>
              <img src="http://placekitten.com/g/200/300" alt="" />
              <p>tempreature</p>
            </div>
            <div className="fourth">
              <p>time</p>
              <img src="http://placekitten.com/g/200/300" alt="" />
              <p>tempreature</p>
            </div>
            <div className="fifth">
              <p>time</p>
              <img src="http://placekitten.com/g/200/300" alt="" />
              <p>tempreature</p>
            </div>
            <div className="sixth">
              <p>time</p>
              <img src="http://placekitten.com/g/200/300" alt="" />
              <p>tempreature</p>
            </div>
            <div className="seventh">
              <p>time</p>
              <img src="http://placekitten.com/g/200/300" alt="" />
              <p>tempreature</p>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;
