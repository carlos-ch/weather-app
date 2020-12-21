import React from 'react';
import './styles/CurrentWeather.css';
import i01d from '../icons/01d.svg';
import i01n from '../icons/01n.svg';
import i02d from '../icons/02d.svg';
import i02n from '../icons/02n.svg';
import i03d from '../icons/03d.svg';
import i04d from '../icons/04d.svg';
import i09d from '../icons/09d.svg';
import i10d from '../icons/10d.svg';
import i11d from '../icons/11d.svg';
import i13d from '../icons/13d.svg';
import i50d from '../icons/50d.svg';

const CurrentWeather = ({ city }) => {
  console.log(city);
  // const iconMap = [{code: "01d",icon: i01d} ]
  // console.log(iconMap.find(item => item[code] === city.icon));
  return (
    <div className="content-wrapper">
      <h2>{city.name}</h2>
      <div className="img-wrapper">
        {city.icon === '01d' ? <img src={i01d} alt="weather-icon" /> : null}
        {city.icon === '01n' ? <img src={i01n} alt="weather-icon" /> : null}
        {city.icon === '02d' ? <img src={i02d} alt="weather-icon" /> : null}
        {city.icon === '02n' ? <img src={i02n} alt="weather-icon" /> : null}
        {city.icon === '03d' || city.icon === '03n' ? (
          <img src={i03d} alt="weather-icon" />
        ) : null}
        {city.icon === '04d' || city.icon === '04n' ? (
          <img src={i04d} alt="weather-icon" />
        ) : null}
        {city.icon === '09d' || city.icon === '09n' ? (
          <img src={i09d} alt="weather-icon" />
        ) : null}
        {city.icon === '10d' || city.icon === '10n' ? (
          <img src={i10d} alt="weather-icon" />
        ) : null}
        {city.icon === '11d' || city.icon === '11n' ? (
          <img src={i11d} alt="weather-icon" />
        ) : null}
        {city.icon === '13d' || city.icon === '13n' ? (
          <img src={i13d} alt="weather-icon" />
        ) : null}
        {city.icon === '50d' || city.icon === '50n' ? (
          <img src={i50d} alt="weather-icon" />
        ) : null}
      </div>
      <h2 className="temp--text">{city.weather.temp} °C</h2>
      <p>{city.description}</p>
      <section>
        <ul className="details--list">
          <li>Feels like: {city.weather.feels_like} °C</li>
          <li>Temperature min: {city.weather.temp_min}</li>
          <li>Temperature max: {city.weather.temp_max}</li>
          <li>Pressure: {city.weather.pressure} hPa</li>
          <li>Humidity: {city.weather.humidity} %</li>
        </ul>
      </section>
    </div>
  );
};

export default CurrentWeather;
