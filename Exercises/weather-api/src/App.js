import React, { Component } from "react";
import "./App.css";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <input type="text" placeholder="Enter a Location"></input>
          <button>Find Weather</button>
        </header>
        <main className="app__main">
          <div class="mainWeather">
            <img class="mainImg" src={mostlycloudy}></img>
            <caption>overcast cloud</caption>
            <p>
              <strong>temperature </strong> 10°C to 11°C
            </p>
            <p>
              <strong>Humedty </strong> 78% <strong>pressure </strong> 100848
            </p>
          </div>
          <div class="allWeather">
            <div class="weatherTime">
              <time>03:00</time>
              <img src={mostlycloudy}></img>
              <p>8°C</p>
            </div>
            <div class="weatherTime">
              <time>03:00</time>
              <img src={mostlycloudy}></img>
              <p>8°C</p>
            </div>
            <div class="weatherTime">
              <time>03:00</time>
              <img src={mostlycloudy}></img>
              <p>8°C</p>
            </div>
            <div class="weatherTime">
              <time>03:00</time>
              <img src={mostlycloudy}></img>
              <p>8°C</p>
            </div>
            <div class="weatherTime">
              <time>03:00</time>
              <img src={mostlycloudy}></img>
              <p>8°C</p>
            </div>
            <div class="weatherTime">
              <time>03:00</time>
              <img src={mostlycloudy}></img>
              <p>8°C</p>
            </div>
            <div class="weatherTime">
              <time>03:00</time>
              <img src={mostlycloudy}></img>
              <p>8°C</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
