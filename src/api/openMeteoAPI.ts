import { OpenMeteoHourlyResponse } from '@Types/apiTypes';
import axios from 'axios';

const insnatce = axios.create({
  baseURL: 'https://api.open-meteo.com/v1/',
});
const openMeteoAPI = {
  getWeatherHoulry: (lat: number, lon: number) =>
    insnatce.get<OpenMeteoHourlyResponse>(
      `forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&forecast_days=1`,
    ),
};
export default openMeteoAPI;
