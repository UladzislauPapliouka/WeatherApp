import {
  OpenWeatherPlaceResponseType,
  OpenWeatherResponseType,
} from '@Types/apiTypes/openWeatherAPITypes';
import axios from 'axios';

const weatherInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const locationInstance = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0/',
});

const openWeatherAPI = {
  getWeatherDaily: (lat: number, lon: number) =>
    weatherInstance.get<OpenWeatherResponseType>(
      `forecast?lat=${lat}&lon=${lon}&appid=be4e4f1db7d4bfa1854ee2145c155b97&units=metric&cnt=48`,
    ),
  getWeatherHourly: (lat: number, lon: number) =>
    weatherInstance.get<OpenWeatherResponseType>(
      `forecast?lat=${lat}&lon=${lon}&appid=be4e4f1db7d4bfa1854ee2145c155b97&units=metric&cnt=16`,
    ),
  getPlaceByCoords: (lat: number, lon: number) =>
    locationInstance.get<OpenWeatherPlaceResponseType[]>(
      `reverse?lat=${lat}&lon=${lon}&limit=5&appid=be4e4f1db7d4bfa1854ee2145c155b97`,
    ),
  getPlaceByName: (name: string) =>
    locationInstance.get<OpenWeatherPlaceResponseType[]>(
      `direct?q=${name}&limit=5&appid=be4e4f1db7d4bfa1854ee2145c155b97`,
    ),
};
export default openWeatherAPI;
