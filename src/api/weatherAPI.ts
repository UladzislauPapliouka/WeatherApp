import axios from 'axios';
import * as process from 'process';

import {
  IWeatherAPIForecastResponse,
  WeatherPlaceResponseType,
} from '@/types/apiTypes';

const weatherAPIinstance = axios.create({
  baseURL: process.env.REACT_WEATHER_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public,must-revalidate, max-age=3600',
  },
});

const weatherAPI = {
  getWeatherDaily: (latitude: number, longitude: number) =>
    weatherAPIinstance.get<IWeatherAPIForecastResponse>(
      `forecast.json?key=${process.env.REACT_WEATHER_API_KEY}&q=${latitude},${longitude}&days=7&aqi=no&alerts=no`,
    ),
  getWeatherHourly: (latitude: number, longitude: number) =>
    weatherAPIinstance.get<IWeatherAPIForecastResponse>(
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
export type { WeatherPlaceResponseType, IWeatherAPIForecastResponse };
