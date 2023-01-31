import axios from 'axios';

const insnatce = axios.create({
  baseURL: 'http://api.weatherapi.com/v1/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
const weatherAPI = {
  getWeatherByDay: () => insnatce.get('forecast.json?key=7e5fc8f7edca45498ea180325233001&q=Zhodino&days=7&aqi=no&alerts=no'),
  getWeatherByHours: () => insnatce.get('forecast.json?key=7e5fc8f7edca45498ea180325233001&q=Zhodino&days=1&aqi=no&alerts=no'),
};
export default weatherAPI;
