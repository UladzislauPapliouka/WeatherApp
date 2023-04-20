import {
  OpenMeteoDailyResponse,
  OpenMeteoHourlyResponse,
} from '@Types/apiTypes';
import { OpenMeteoGeocodeResponse } from '@Types/apiTypes/openMeteoAPIType';
import axios from 'axios';

const insnatce = axios.create({
  baseURL: 'https://api.open-meteo.com/v1/',
});
const geoInsnatce = axios.create({
  baseURL: 'https://geocoding-api.open-meteo.com/v1/',
});
const openMeteoAPI = {
  getWeatherHourly: (lat: number, lon: number) =>
    insnatce.get<OpenMeteoHourlyResponse>(
      `forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&forecast_days=1`,
    ),
  getWeatherDaily: (lat: number, lon: number) =>
    insnatce.get<OpenMeteoDailyResponse>(
      `forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=GMT`,
    ),
  getPlaceInfoBtName: (city: string) =>
    geoInsnatce.get<OpenMeteoGeocodeResponse[]>(
      `search?name=${city}&count=10&language=en&format=json`,
    ),
};
export default openMeteoAPI;
