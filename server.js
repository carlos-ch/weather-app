const express = require('express');
const app = express();
const axios = require('axios');

const mockData = require('./mockData.json');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';

const getData = async param => {
  const axiosRes = await axios.get(
    baseUrl + `?q=${param}&units=metric&appid=51f0c61b9e8ccbd3c0e3ce33c4c16f63`
  );
  return axiosRes.data;
};

app.get('/', (req, res) => {
  res.send(
    'Welcome to Tempo, my weather app. Heres the weather in your part of the world'
  );
});

app.get('/search/:city', async (req, res) => {
  const { city } = req.params;
  console.table([city]);
  const cityData = await getData(city); // --------------------Real API
  const cityParsed = data => ({
    id: data.id,
    name: data.name,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    weather: data.main,
  });
  res.send(JSON.stringify(cityParsed(cityData))); // ---change here for real API
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
