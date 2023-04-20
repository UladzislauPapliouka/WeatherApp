import {
  OpenWeatherPlaceResponseType,
  OpenWeatherResponseType,
} from '@Types/apiTypes/openWeatherAPITypes';
import axios from 'axios';

const openWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const openWeatherGeocoder = axios.create({
  baseURL: 'https://api.openweathermap.org/geo/1.0/',
});

const openWeatherAPI = {
  fetchDailyWeather: (latitude: number, longitude: number) =>
    openWeather.get<OpenWeatherResponseType>(
      `forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_OPEN_WEATHER_API_KEY}&units=metric&cnt=48`,
    ),
  fetchHourlyWeather: (latitude: number, longitude: number) =>
    openWeather.get<OpenWeatherResponseType>(
      `forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_OPEN_WEATHER_API_KEY}&units=metric&cnt=16`,
    ),
  fetchPlacesByCoordinates: (latitude: number, longitude: number) =>
    openWeatherGeocoder.get<OpenWeatherPlaceResponseType[]>(
      `reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${process.env.REACT_OPEN_WEATHER_API_KEY}`,
    ),
  fetchPlacesByName: (city: string) =>
    openWeatherGeocoder.get<OpenWeatherPlaceResponseType[]>(
      `direct?q=${city}&limit=5&appid=${process.env.REACT_OPEN_WEATHER_API_KEY}`,
    ),
};
export default openWeatherAPI;
