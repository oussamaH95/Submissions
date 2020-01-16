import React from "react";
import "./App.css";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
export default function mainWeather(props) {
  return (
    <div class="mainWeather">
      <img class="mainImg" src={props.img} alt="" />
      <caption>{props.status}</caption>
      <p>
        <strong>temperature </strong> {props.tempLow}°C to {props.tempHigh}°C
      </p>
      <p>
        <strong>humidity </strong> {props.humidity}% <strong>pressure </strong>{" "}
        {props.pressure}
      </p>
    </div>
  );
}
