import React, { useState } from 'react';
import './App.css'
import fetchWeather  from './adapters/weatherAdapter';


const App = () => {
  const [ query, setQuery ] = useState("");

  const handleSearch = async e => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      console.log(data);
    }
  }

  return (
      <div className="main-container">
        <div>
          <input
            className="search"
            type={'text'}
            placeholder={'search...'}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleSearch}
          />
        </div>
      </div>
  );
}

export default App;