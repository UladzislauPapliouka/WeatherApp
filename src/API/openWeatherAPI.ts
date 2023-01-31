import axios from 'axios';

const insnatce = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});
const openWeatherAPI = {
  getWeatherByDay: () => insnatce.get('forecast?lat=53&lon=27&appid=be4e4f1db7d4bfa1854ee2145c155b97&units=metric&cnt=48'),
  getWeatherByHours: () => insnatce.get('forecast?lat=53&lon=27&appid=be4e4f1db7d4bfa1854ee2145c155b97&units=metric&cnt=16'),
  getFindPlace: (string:string) => insnatce.get(`search.json?key=7e5fc8f7edca45498ea180325233001&q=${string}`),
};
export default openWeatherAPI;
