import React from 'react';

const CurrentWeather = ({ city }) => {
  return (
    <div>
      <h2>{city.name}</h2>
      <h2>{city.weather.temp}</h2>
      <p>{city.description}</p>
    </div>
  );
};

export default CurrentWeather;
