import { v1 } from 'uuid';

import {
  IGoogleEventEntity,
  IOpenMeteoDailyResponse,
  IOpenMeteoHourlyResponse,
  IOpenWeatherList,
} from '@/types/apiTypes';
import {
  GoogleEventStoreType,
  NormalizedWeatherItemDataType,
} from '@/types/storeTypes';
import { getDayName } from '@services/services';

import { getOpenMeteoIcon, getOpenWeatherIcon } from './getImagesServices';

export function normalizeOpenWeatherDaily(
  array: Array<IOpenWeatherList>,
): Array<NormalizedWeatherItemDataType> {
  const result: NormalizedWeatherItemDataType[] = [];

  for (let i = 7; i < array.length; i += 8) {
    result.push({
      icon: getOpenWeatherIcon(array[i].weather[0].id),
      name: getDayName(new Date(array[i].dt_txt).getDay()),
      degrees: array[i].main.temp,
      id: v1(),
    });
  }

  return result;
}

export function normalizeOpenWeatherHourly(
  array: Array<IOpenWeatherList>,
): Array<NormalizedWeatherItemDataType> {
  const result: NormalizedWeatherItemDataType[] = [];

  array.forEach((obj) => {
    result.push({
      icon: getOpenWeatherIcon(obj.weather[0].id),
      name: `${new Date(obj.dt_txt).getHours()}:00`,
      degrees: obj.main.temp,
      id: v1(),
    });

    return null;
  });

  return result;
}

export function normalizeOpenMeteoHourly({
  hourly: { time, temperature_2m, weathercode },
}: IOpenMeteoHourlyResponse): NormalizedWeatherItemDataType[] {
  const firstIndex = new Date().getHours();

  const lastIndex = firstIndex + 6;

  const result: NormalizedWeatherItemDataType[] = [];

  result.push({
    icon: getOpenMeteoIcon(weathercode[firstIndex]),
    degrees: temperature_2m[firstIndex],
    name: `Now`,
    id: v1(),
  });
  for (let i = firstIndex + 1; i <= lastIndex; i += 1) {
    result.push({
      icon: getOpenMeteoIcon(weathercode[i]),
      degrees: temperature_2m[i],
      name: `${new Date(time[i]).getHours()}:00`,
      id: v1(),
    });
  }

  return result;
}

export function normalizeOpenMeteoDaily({
  daily: { temperature_2m_max, temperature_2m_min, weathercode, time },
}: IOpenMeteoDailyResponse): NormalizedWeatherItemDataType[] {
  const result: NormalizedWeatherItemDataType[] = [];

  result.push({
    icon: getOpenMeteoIcon(weathercode[0]),
    degrees: (temperature_2m_max[0] + temperature_2m_min[0]) / 2,
    name: `Today`,
    id: v1(),
  });
  for (let i = 1; i < 7; i += 1) {
    result.push({
      icon: getOpenMeteoIcon(weathercode[i]),
      degrees: (temperature_2m_max[i] + temperature_2m_min[i]) / 2,
      name: getDayName(new Date(time[i]).getDay()),
      id: v1(),
    });
  }

  return result;
}
export const normalizeGoogleEventEntity = (
  event: IGoogleEventEntity,
): GoogleEventStoreType => ({
  time: new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(event.start.dateTime)),
  title: event.summary,
  id: v1(),
});
