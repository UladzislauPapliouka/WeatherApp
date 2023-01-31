import axios from 'axios';

const insnatce = axios.create({
  baseURL: 'http://api.weatherapi.com/v1/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
const weatherAPI = {
  getWeatherByDay: (name:string) => insnatce.get(`forecast.json?key=7e5fc8f7edca45498ea180325233001&q=${name}&days=7&aqi=no&alerts=no`),
  getWeatherByHours: (name:string) => insnatce.get(`forecast.json?key=7e5fc8f7edca45498ea180325233001&q=${name}&days=1&aqi=no&alerts=no`),
  getFindPlace: (lat:number, lon:number) => insnatce.get(`search.json?key=7e5fc8f7edca45498ea180325233001&q=${lat},${lon}`),
};
export default weatherAPI;
