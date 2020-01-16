import React, { Component } from "react";
import "./App.css";
import MainWeather from "./mainWeather.js";
import WeatherHeader from "./weatherHeader.js";
import AllWeather from "./allWeather.js";
import getImageByWeatherId from "./imgFunction";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherlist: []
    };
  }
  componentDidMount() {
    this.setState({
      weatherStatus: "------",
      weatherImage: getImageByWeatherId(-1),
      tempHigh: "------",
      tempLow: "------",
      humidity: "------",
      pressure: "------"
    });
  }
  setValuetoMainFile = async city => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=c8f16d4d0855d8a68c37eafb434ff06d`
    );
    const realWeather = await response.json();
    if (realWeather.cod == 200) {
      if (realWeather.list[0].weather[0].id >= 800) {
        document.body.style.backgroundColor = "#98c6f6";
      } else {
        document.body.style.backgroundColor = "#1f5085";
      }

      this.setState({
        weatherStatus: realWeather.list[0].weather[0].description,
        weatherImage: getImageByWeatherId(realWeather.list[0].weather[0].id),
        tempHigh: Math.floor(realWeather.list[0].main.temp_max),
        tempLow: Math.floor(realWeather.list[0].main.temp_min),
        humidity: realWeather.list[0].main.pressure,
        pressure: realWeather.list[0].main.humidity,
        weatherlist: realWeather.list.slice(1, 8)
      });
    } else alert("wrong city name !");
  };

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <WeatherHeader setValuetoMainFile={this.setValuetoMainFile} />
        </header>
        <main className="app__main">
          <MainWeather
            status={this.state.weatherStatus}
            tempHigh={this.state.tempHigh}
            tempLow={this.state.tempLow}
            humidity={this.state.humidity}
            pressure={this.state.pressure}
            img={this.state.weatherImage}
          />
          <div class="allWeather">
            {this.state.weatherlist.map((item, value) => {
              return <AllWeather key={value} list={item} />;
            })}
          </div>
        </main>
      </div>
    );
  }
}
export default App;
