import * as backgrounds from '@assets/backgrounds';
import DayNames from '@constants/dayNames';
import {
  IOpenMeteoDailyResponse,
  IOpenMeteoHourlyResponse,
} from '@typing/apiTypes';
import { IOpenWeatherList } from '@typing/apiTypes/openWeatherAPITypes';
import {
  NormalizedWeatherItemDataType,
  WeatherIconVariants,
} from '@typing/storeTypes/weatherStateType';
import { AxiosInstance } from 'axios';
import { v1 } from 'uuid';

function getOpenWeatherIcon(code: number) {
  if (code >= 200 && code <= 299) {
    return WeatherIconVariants.Thunder;
  }

  if (code >= 300 && code <= 399) {
    return WeatherIconVariants.Shower;
  }

  if (code >= 500 && code <= 599) {
    return WeatherIconVariants.Rain;
  }

  if (code >= 600 && code <= 699) {
    return WeatherIconVariants.Snow;
  }

  if (code >= 700 && code <= 799) {
    return WeatherIconVariants.Fog;
  }

  if (code === 800) {
    return WeatherIconVariants.Sun;
  }

  if (code >= 801 && code <= 804) {
    return WeatherIconVariants.Cloudy;
  }

  return WeatherIconVariants.Windy;
}

function getDayName(dayNumber: number) {
  const daysName = [
    DayNames.Sunday,
    DayNames.Monday,
    DayNames.Tuesday,
    DayNames.Wednesday,
    DayNames.Thursday,
    DayNames.Friday,
    DayNames.Saturday,
  ];

  return daysName[dayNumber];
}

function normalizeOpenWeatherDaily(
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

function normalizeOpenWeatherHourly(
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

function getBackground(weather: WeatherIconVariants) {
  switch (weather) {
    case WeatherIconVariants.Cloudy:
      return [backgrounds.cloudsMain, backgrounds.cloudsSecondary];

    case WeatherIconVariants.Fog:
      return [backgrounds.fogMain, backgrounds.fogSecondary];

    case WeatherIconVariants.PartySunny:
      return [backgrounds.partlySunnyMain, backgrounds.partlySunnySecondary];

    case WeatherIconVariants.Rain:
      return [backgrounds.rainMain, backgrounds.rainSecondary];

    case WeatherIconVariants.Shower:
      return [backgrounds.showerMain, backgrounds.showerSEcondary];

    case WeatherIconVariants.Snow:
      return [backgrounds.snowMain, backgrounds.snowSecondary];

    case WeatherIconVariants.Sun:
      return [backgrounds.sunMain, backgrounds.sunSecondary];

    case WeatherIconVariants.Thunder:
      return [backgrounds.thunderMain, backgrounds.thunderSecondary];

    default:
      return [backgrounds.windyMain, backgrounds.windySecondary];
  }
}

function getOpenMeteoIcon(code: number) {
  if (code === 1 || code === 2 || code === 3)
    return WeatherIconVariants.PartySunny;

  if (code === 45 || code === 48) return WeatherIconVariants.Fog;

  if (
    code === 51 ||
    code === 53 ||
    code === 55 ||
    code === 57 ||
    code === 56 ||
    code === 80 ||
    code === 81 ||
    code === 82 ||
    code === 85 ||
    code === 86
  )
    return WeatherIconVariants.Shower;

  if (code === 61 || code === 63 || code === 65 || code === 66 || code === 67)
    return WeatherIconVariants.Rain;

  if (code === 71 || code === 73 || code === 75 || code === 76 || code === 77)
    return WeatherIconVariants.Snow;

  if (code > 90) return WeatherIconVariants.Thunder;

  return WeatherIconVariants.Sun;
}

function normalizeOpenMeteoHourly({
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

function normalizeOpenMeteoDaily({
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

const cacheService = async <T>(url: string, instance: AxiosInstance) => {
  const cache = await window.caches.open('openMeteo');

  const cacheItem = await cache.match(url);

  if (cacheItem) {
    const response = await cacheItem.json();

    if (Math.abs(response.cacheTime - new Date().getTime()) <= 3600000) {
      return response;
    }
  }

  const response = await instance.get<T>(url);

  if (!response) return null;

  await cache.put(
    response.config.url as string,
    new Response(
      JSON.stringify({ ...response.data, cacheTime: new Date().getTime() }),
    ),
  );

  return response.data;
};

export {
  cacheService,
  normalizeOpenMeteoDaily,
  normalizeOpenMeteoHourly,
  getDayName,
  getOpenMeteoIcon,
  normalizeOpenWeatherDaily,
  getOpenWeatherIcon,
  normalizeOpenWeatherHourly,
  getBackground,
};
