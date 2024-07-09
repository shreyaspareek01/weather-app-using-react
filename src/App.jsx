import React, { useState, useEffect } from "react";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [city, setCity] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=297074e16c83273012e2c48fd58ba8eb`;

  useEffect(() => {
    if (city) {
      async function getData() {
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      }

      getData();
    }
  }, [city]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setCity(inputValue);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl w-[100%] text-center my-10">Weather App</h1>
      <input
        type="text"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter location"
        className="w-[100%] max-w-[400px] h-[60px] rounded-3xl p-3 mx-auto border-none"
      />
      {weatherData.name && (
        <div class="w-[700px] h-[500px] bg-white/20 backdrop-blur-[10px] flex-col my-[100px] rounded-[10px] shadow-[0_8px_32px_0_rgba(0,0,0,0.7)] border border-solid border-white/18 flex justify-center items-center text-5xl gap-20  text-[#2c2e24]">
          <p>Weather in {weatherData.name}:</p>
          <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
