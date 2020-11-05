import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import CurrentWeather from './components/CurrentWeather';

function App() {
  const [cities, setCities] = useState({
    id: 3688689,
    name: 'Bogotá',
    description: 'heavy intensity rain',
    weather: {
      temp: 292.15,
      feels_like: 288.56,
      temp_min: 292.15,
      temp_max: 292.15,
      pressure: 1026,
      humidity: 55,
    },
  });
  const [search, setSearch] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form setCities={setCities} setSearch={setSearch} />
        <CurrentWeather city={cities} />
      </header>
    </div>
  );
}

export default App;
