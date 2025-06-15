import React from "react";

const MainWeather = ({ current }) => {
  return (
    <div className="main-weather backdrop-blur-xs">
      <div className="main-upper">
        <h1 className="loc">
          {current.name}, {current.sys.country}
        </h1>
        <p>
          <i
            className="fa-solid fa-location-dot
"
          ></i>
          <strong> Coordinates:</strong> Lat {current.coord.lat}, Lon{" "}
          {current.coord.lon}
        </p>
      </div>

      <div className="main-lower">
        <div className="main-1st">
          <h2 className="text-lg">🌡️ Temperature</h2>
          <div className="line"></div>
          <div className="temp-container">
            <div className="line-between">
              <p>
                <strong>Current:</strong>
              </p>
              <p>{current.main.temp}°C</p>
            </div>
            <div className="line-between">
              <p>
                <strong>Feels Like:</strong>
              </p>
              <p>{current.main.feels_like}°C</p>
            </div>

            <div className="line-between">
              <p>
                <strong>Min:</strong>
              </p>
              <p>{current.main.temp_min}°C</p>
            </div>
            <div className="line-between">
              <p>
                <strong>Max:</strong>
              </p>
              <p>{current.main.temp_max}°C</p>
            </div>
          </div>
        </div>
        <div className="main-2nd">
          <h2 className="text-lg">🌥️ Conditions</h2>
          <div className="line"></div>
          <div className="cond-container">
            <p className="text-sm">
              <strong>Weather:</strong> {current.weather[0].main} -{" "}
              {current.weather[0].description}
            </p>
            <img
              className="cond-icon"
              src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWeather;
