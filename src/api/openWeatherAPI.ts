import {
  OpenWeatherPlaceResponseType,
  OpenWeatherResponseType,
} from '@Types/apiTypes/openWeatherAPITypes';
import axios from 'axios';

import { cacheService } from '@/services';

const openWeather = axios.create({
  baseURL: process.env.REACT_OPEN_WEATHER_BASE_URL,
});

const openWeatherGeocoder = axios.create({
  baseURL: process.env.REACT_OPEN_WEATHER_GEOCODER_BASE_URL,
});

const openWeatherAPI = {
  fetchDailyWeather: async (latitude: number, longitude: number) => {
    const response = await cacheService<OpenWeatherResponseType>(
      `forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_OPEN_WEATHER_API_KEY}&units=metric&cnt=48`,
      openWeather,
    );
    return response;
  },
  fetchHourlyWeather: async (latitude: number, longitude: number) => {
    const response = await cacheService<OpenWeatherResponseType>(
      `forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_OPEN_WEATHER_API_KEY}&units=metric&cnt=16`,
      openWeather,
    );
    return response;
  },
  fetchPlacesByCoordinates: async (latitude: number, longitude: number) => {
    const response = await cacheService<OpenWeatherPlaceResponseType[]>(
      `reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${process.env.REACT_OPEN_WEATHER_API_KEY}`,
      openWeatherGeocoder,
    );
    return response;
  },
  fetchPlacesByName: async (city: string) => {
    const response = await cacheService<OpenWeatherPlaceResponseType[]>(
      `direct?q=${city}&limit=5&appid=${process.env.REACT_OPEN_WEATHER_API_KEY}`,
      openWeatherGeocoder,
    );
    return response;
  },
};
export default openWeatherAPI;
