import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import clear from "./img/weather-icons/clear.svg";
import unknown from "./img/weather-icons/unknown.svg";

export default function getImageByWeatherId(id) {
  if (id == -1) return unknown;
  else if (id <= 300) return storm;
  else if (id < 500) return drizzle;
  else if (id < 600) return rain;
  else if (id < 700) return snow;
  else if (id < 800) return fog;
  else if (id == 800) return clear;
  else if (id == 801) return partlycloudy;
  else if (id < 806) return mostlycloudy;
}
