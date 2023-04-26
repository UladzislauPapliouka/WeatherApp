import {
  OpenMeteoDailyResponse,
  OpenMeteoHourlyResponse,
} from '@Types/apiTypes';
import { OpenMeteoGeocodeResponse } from '@Types/apiTypes/openMeteoAPIType';
import axios from 'axios';

import { cacheService } from '@/services';

const openMeteoWeather = axios.create({
  baseURL: 'https://api.open-meteo.com/v1/',
});
const openMeteoGeocoder = axios.create({
  baseURL: 'https://geocoding-api.open-meteo.com/v1/',
});

const openMeteoAPI = {
  fetchHourlyWeather: async (latitude: number, longitude: number) => {
    const response = await cacheService<OpenMeteoHourlyResponse>(
      `forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&forecast_days=2`,
      openMeteoWeather,
    );
    return response;
  },
  fetchDailyWeather: async (latitude: number, longitude: number) => {
    const response = await cacheService<OpenMeteoDailyResponse>(
      `forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=GMT`,
      openMeteoWeather,
    );
    return response;
  },
  fetchPlacesByName: async (city: string) => {
    const response = await cacheService<OpenMeteoGeocodeResponse[]>(
      `search?name=${city}&count=10&language=en&format=json`,
      openMeteoGeocoder,
    );
    return response;
  },
};
export default openMeteoAPI;
