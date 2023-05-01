import axios from 'axios';
import * as process from 'process';

import { cacheService } from '@/services';
import {
  IOpenMeteoDailyResponse,
  IOpenMeteoGeocodeResponse,
  IOpenMeteoHourlyResponse,
} from '@typing/apiTypes';

const openMeteoWeather = axios.create({
  baseURL: process.env.REACT_OPEN_METEO_BASE_URL,
});

const openMeteoGeocoder = axios.create({
  baseURL: process.env.REACT_OPEN_METEO_GEOCODER_BASE_URL,
});

const openMeteoAPI = {
  fetchHourlyWeather: async (latitude: number, longitude: number) => {
    const response = await cacheService<IOpenMeteoHourlyResponse>(
      `forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&forecast_days=2`,
      openMeteoWeather,
    );

    return response;
  },
  fetchDailyWeather: async (latitude: number, longitude: number) => {
    const response = await cacheService<IOpenMeteoDailyResponse>(
      `forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=GMT`,
      openMeteoWeather,
    );

    return response;
  },
  fetchPlacesByName: async (city: string) => {
    const response = await cacheService<IOpenMeteoGeocodeResponse[]>(
      `search?name=${city}&count=10&language=en&format=json`,
      openMeteoGeocoder,
    );

    return response;
  },
};

export default openMeteoAPI;
