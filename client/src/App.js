import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import CurrentWeather from './components/CurrentWeather';

function App() {
  const [cities, setCities] = useState(null);
  // const [search, setSearch] = useState(null);

  return (
    <div className="App">
      <Router>
        <Route path={`/search/:city`}></Route>
        <Route path="/about">
          {/* -----------------------------Aqui va la pagina de ABOUT */}
        </Route>
        <Route exact path="/">
          <header className="App-header">
            <div className="logo-wrapper">
              <img src={logo} className="App-logo" alt="logo" />
              <span className="temp--title">
                Temp<span className="ora--title">ora</span>
              </span>
            </div>
          </header>
          <div className="background-mask"></div>
          <Form setCities={setCities} />
          {!cities && (
            <div className="label" htmlFor="form">
              {' '}
              Check the weather in your area
            </div>
          )}

          {cities && <CurrentWeather city={cities} />}
        </Route>
      </Router>
    </div>
  );
}

export default App;
