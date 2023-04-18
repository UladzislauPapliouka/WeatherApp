import axios from 'axios';

import {
  WeatherAPIForecastResponseType,
  WeatherPlaceResponseType,
} from '@/types/apiTypes/weatherAPITypes';

const insnatce = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public,must-revalidate, max-age=3600',
  },
});

const weatherAPI = {
  getWeatherDaily: (lat: number, lon: number) =>
    insnatce.get<WeatherAPIForecastResponseType>(
      `forecast.json?key=${process.env.REACT_WEATHER_API_KEY}&q=${lat},${lon}&days=7&aqi=no&alerts=no`,
    ),
  getWeatherHourly: (lat: number, lon: number) =>
    insnatce.get<WeatherAPIForecastResponseType>(
      `forecast.json?key=7e5fc8f7edca45498ea180325233001&q=${lat},${lon}&days=1&aqi=no&alerts=no`,
    ),
  getFindPlaceByCoords: (lat: number, lon: number) =>
    insnatce.get<WeatherPlaceResponseType>(
      `search.json?key=7e5fc8f7edca45498ea180325233001&q=${lat},${lon}`,
    ),
  getFindPlaceByName: (name: string) =>
    insnatce.get<WeatherPlaceResponseType>(
      `search.json?key=7e5fc8f7edca45498ea180325233001&q=${name}`,
    ),
};
export default weatherAPI;
export type { WeatherPlaceResponseType, WeatherAPIForecastResponseType };
