import React from "react";

const ForecastWeather = ({ forecast }) => {
  return (
    <div className="forecast-weather backdrop-blur-xs">
      <div className="forecast-title">
        <p>🗓️</p>
        <h2 className="text-lg">5-Day Forecast (12:00 PM)</h2>
      </div>

      <div className="slider-design">
        <p className="text-7xl arrow">«</p>
        <div className="forecast-container">
          {forecast.map((f) => (
            <div
              key={f.dt}
              style={{
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                borderRadius: "8px",
                padding: "10px",
                width: "120px",
                textAlign: "center",
              }}
            >
              <p className="text-xs">
                <strong>{new Date(f.dt_txt).toLocaleDateString()}</strong>
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`}
                alt="forecast icon"
              />
              <p className="text-sm">{f.main.temp}°C</p>
              <p className="text-sm">{f.weather[0].main}</p>
            </div>
          ))}
        </div>
        <p className="text-7xl arrow">»</p>
      </div>
    </div>
  );
};

export default ForecastWeather;
