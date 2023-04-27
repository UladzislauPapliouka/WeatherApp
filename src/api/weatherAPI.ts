import axios from 'axios';

import {
  WeatherAPIForecastResponseType,
  WeatherPlaceResponseType,
} from '@/types/apiTypes/weatherAPITypes';

const weatherAPIinstance = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public,must-revalidate, max-age=3600',
  },
});

const weatherAPI = {
  getWeatherDaily: (latitude: number, longitude: number) =>
    weatherAPIinstance.get<WeatherAPIForecastResponseType>(
      `forecast.json?key=${process.env.REACT_WEATHER_API_KEY}&q=${latitude},${longitude}&days=7&aqi=no&alerts=no`,
    ),
  getWeatherHourly: (latitude: number, longitude: number) =>
    weatherAPIinstance.get<WeatherAPIForecastResponseType>(
      `forecast.json?key=${process.env.REACT_WEATHER_API_KEY}&q=${latitude},${longitude}&days=1&aqi=no&alerts=no`,
    ),
  getFindPlaceByCoords: (latitude: number, longitude: number) =>
    weatherAPIinstance.get<WeatherPlaceResponseType>(
      `search.json?key=${process.env.REACT_WEATHER_API_KEY}&q=${latitude},${longitude}`,
    ),
  getFindPlaceByName: (city: string) =>
    weatherAPIinstance.get<WeatherPlaceResponseType>(
      `search.json?key=${process.env.REACT_WEATHER_API_KEY}&q=${city}`,
    ),
};
export default weatherAPI;
export type { WeatherPlaceResponseType, WeatherAPIForecastResponseType };
