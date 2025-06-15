import React from "react";

const SubWeather = ({ current }) => {
  return (
    <div className="sub-weather backdrop-blur-xs">
      <div className="sub-content">
        <h2>
          <i
            className="fa-solid fa-chart-line
"
          ></i>{" "}
          Atmospheric
        </h2>
        <div className="sub-info">
          <div className="line-between">
            <p className="text-sm">
              <strong>Humidity:</strong>
            </p>
            <p className="text-sm">{current.main.humidity}%</p>
          </div>

          <div className="line-between">
            <p className="text-sm">
              <strong>Pressure:</strong>
            </p>
            <p className="text-sm">{current.main.pressure} hPa</p>
          </div>

          <div className="line-between">
            <p className="text-sm">
              <strong>Cloudiness:</strong>
            </p>
            <p className="text-sm">{current.clouds.all}%</p>
          </div>

          <div className="line-between">
            <p className="text-sm">
              <strong>Visibility:</strong>
            </p>
            <p className="text-sm">{current.visibility}m</p>
          </div>
        </div>
      </div>
      <div className="sub-content">
        <h2>
          <i
            className="fa-solid fa-wind
"
          ></i>{" "}
          Wind
        </h2>
        <div className="sub-info">
          <div className="line-between">
            <p className="text-sm">
              <strong>Speed:</strong>
            </p>
            <p className="text-sm">{current.wind.speed} m/s</p>
          </div>

          <div className="line-between">
            <p className="text-sm">
              <strong>Direction:</strong>
            </p>
            <p className="text-sm">{current.wind.deg}°</p>
          </div>
        </div>
      </div>
      <div className="sub-content">
        <h2>
          <i class="fa-solid fa-sun"></i> Sun
        </h2>
        <div className="sub-info">
          <div className="line-between">
            <p className="text-sm">
              <strong>Sunrise:</strong>{" "}
            </p>
            <p className="text-sm">
              {new Date(current.sys.sunrise * 1000).toLocaleTimeString()}
            </p>
          </div>
          <div className="line-between">
            <p className="text-sm">
              <strong>Sunset:</strong>{" "}
            </p>
            <p className="text-sm">
              {new Date(current.sys.sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
      <div className="sub-content">
        <h2>
          <i
            className="fa-solid fa-compass
"
          ></i>{" "}
          Other
        </h2>
        <div className="sub-info">
          <div className="line-between">
            <p className="text-sm">
              <strong>Timezone(ofs):</strong>
            </p>
            <p className="text-sm">{current.timezone}s</p>
          </div>
          <div className="line-between">
            <p className="text-sm">
              <strong>City ID:</strong>
            </p>
            <p className="text-sm">{current.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubWeather;
