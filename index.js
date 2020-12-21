const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'client/build')));

const mockData = require('./mockData.json');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const baseUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

const getData = async param => {
  const axiosRes = await axios.get(
    baseUrl + `?q=${param}&units=metric&appid=${apiKey}`
  );
  return axiosRes.data;
};

app.get('/api/', (req, res) => {
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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT;
app.listen(port, () => console.log(`listening on port ${port}`));
