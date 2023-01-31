import axios from 'axios';

const insnatce = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});
const insnatce1 = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0/',
});
const openWeatherAPI = {
  getWeatherByDay: (lat:number, lon:number) => insnatce.get(`forecast?lat=${lat}&lon=${lon}&appid=be4e4f1db7d4bfa1854ee2145c155b97&units=metric&cnt=48`),
  getWeatherByHours: (lat:number, lon:number) => insnatce.get(`forecast?lat=${lat}&lon=${lon}&appid=be4e4f1db7d4bfa1854ee2145c155b97&units=metric&cnt=16`),
  getPlaceByCoords: (lat:number, lon:number) => insnatce1.get(`reverse?lat=${lat}&lon=${lon}&limit=5&appid=be4e4f1db7d4bfa1854ee2145c155b97`),
};
export default openWeatherAPI;
