import React, { useState } from 'react';
import fetchWeather  from './adapters/weatherAdapter';

const App = () => {

  const [ query, setQuery ] = useState("");

  return (
    <div className="App">
      <div className="main-container">
        <input 
          type="text" 
          className="" 
          placeholder="search..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} />
      </div>
    </div>
  );
}

export default App;