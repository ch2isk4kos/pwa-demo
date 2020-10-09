import React from 'react';
import fetchWeather  from './adapters/weatherAdapter';

const App = () => {
  return (
    <div className="App">
      <div className="main-container">
        <input 
          type="text" 
          className="" 
          placeholder="search..." 
          value={""} 
          onChange={""} />
      </div>
    </div>
  );
}

export default App;