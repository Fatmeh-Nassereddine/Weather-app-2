
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <div className="weather-container">
          <div className="weather-info">
            <h2>City Name</h2>
            <p>Temperature: 22°C</p>
            <p>Description: Clear sky</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
