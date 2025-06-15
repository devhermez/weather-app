import { useState, useEffect } from "react";
import MainWeather from "./MainWeather";
import SubWeather from "./SubWeather";
import ForecastWeather from "./ForecastWeather";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);

  const apiKey = "253acf966b7c174502a1b2d6c024121a";
  const city = "Manila,PH";

  const backgroundChange = (weatherType) => {
    const body = document.body;
    switch (weatherType) {
      case "Clear":
        document.body.className = weatherType.toLowerCase();
        break;
      case "Clouds":
        document.body.className = weatherType.toLowerCase();
        break;
      case "Rain":
      case "Drizzle":
        document.body.className = weatherType.toLowerCase();
        break;
      case "Thunderstorm":
        document.body.className = weatherType.toLowerCase();
        break;
      case "Snow":
        document.body.className = weatherType.toLowerCase();
        break;
      case "Mist":
      case "Fog":
      case "Haze":
        document.body.className = weatherType.toLowerCase();
        break;
      default:
        body.style.background = body.default;
    }
  };

  const containerChange = (weatherSign) => {
    switch (weatherSign) {
      case "Clear":
        return "container-clear";
      case "Rain":
        return "container-rain";
      case "Clouds":
        return "container-clouds";
      case "Snow":
        return "container-snow";
      case "Thunderstorm":
        return "container-thunder";
      case "Drizzle":
        return "container-drizzle";
      case "Mist":
      case "Haze":
      case "Fog":
        return "container-foggy";
      default:
        return "container-default";
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const resCurrent = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        const jsonCurrent = await resCurrent.json();

        if (jsonCurrent.weather && jsonCurrent.weather.length > 0) {
          backgroundChange(jsonCurrent.weather[0].main);
        }

        setCurrent(jsonCurrent);
        console.log(jsonCurrent);

        const resForecast = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
        );
        const jsonForecast = await resForecast.json();

        const daily = jsonForecast.list.filter((f) =>
          f.dt_txt.includes("12:00:00")
        );
        setForecast(daily);
        console.log(daily);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }

    fetchData();
  }, []);

  if (!current || forecast.length === 0) {
    return <p>Loading weather data...</p>;
  }

  const weatherColor = current?.weather[0]?.main;
  const containerClass = containerChange(weatherColor);

  return (
    <div className={`weather-container ${containerClass}`}>
      <div className="upper-content">
        <MainWeather current={current} />
        <SubWeather current={current} />
      </div>
      <div className="lower-content">
        <ForecastWeather forecast={forecast} />
        <p className="copyright">Created, Designed, Coded by Hermez</p>
      </div>
    </div>
  );
}

export default App;
