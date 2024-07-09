import React from "react";

function WeatherData({ weatherData }) {
  return weatherData ? (
    <div className="flex justify-center align-middle flex-col text-white">
      <p>Weather in {weatherData.name}:</p>
      <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default WeatherData;
