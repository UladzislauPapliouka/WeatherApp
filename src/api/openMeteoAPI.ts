import {
  OpenMeteoDailyResponse,
  OpenMeteoHourlyResponse,
} from '@Types/apiTypes';
import { OpenMeteoGeocodeResponse } from '@Types/apiTypes/openMeteoAPIType';
import axios from 'axios';

const openMeteoWeather = axios.create({
  baseURL: 'https://api.open-meteo.com/v1/',
});
const openMeteoGeocoder = axios.create({
  baseURL: 'https://geocoding-api.open-meteo.com/v1/',
});
const openMeteoAPI = {
  fetchHourlyWeather: (latitude: number, longitude: number) =>
    openMeteoWeather.get<OpenMeteoHourlyResponse>(
      `forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&forecast_days=1`,
    ),
  fetchDailyWeather: (latitude: number, longitude: number) =>
    openMeteoWeather.get<OpenMeteoDailyResponse>(
      `forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=GMT`,
    ),
  fetchPlacesByName: (city: string) =>
    openMeteoGeocoder.get<OpenMeteoGeocodeResponse[]>(
      `search?name=${city}&count=10&language=en&format=json`,
    ),
};
export default openMeteoAPI;
