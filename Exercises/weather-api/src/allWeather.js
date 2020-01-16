import React from "react";
import "./App.css";
import getImageByWeatherId from "./imgFunction";
import FakeWeather from "./data/FakeWeather.json";
export default function allWeather(props) {
  return (
    <div class="weatherTime">
      <time>{props.list.dt_txt.substring(11, 16)}</time>
      <img src={getImageByWeatherId(props.list.weather[0].id)}></img>
      <p>{Math.floor(props.list.main.temp)}°C</p>
    </div>
  );
}
