import React, { useState } from 'react';
import './App.css';
import fetchWeather from './adapters/weatherAdapter';

const App = () => {
  const [ query, setQuery ] = useState("");
  const [ weather, setWeather ] = useState({});

  const handleSearch = async e => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      console.log(data);
      setWeather(data);
      setQuery("");
    }
  }

  return (
    <div className="main-container">
      <div>
        {/* search input */}
        <input
          className="search"
          type={"text"}
          placeholder={"search..."}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleSearch}
        />

        {/* weather card */}
        {weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <img 
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}>
              </img>
              <h3>{weather.weather[0].description}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;