import { v1 } from 'uuid';

import { OpenWeatherListType } from '../api/openWeatherAPI';
import * as backgrounds from '../assets/backgrounds';
import { WeatherIconVariants } from '../types/propsTypes/weatherIcon';

function getWeatherIcon(code: number) {
  if (code === 1006 || code === 1009) {
    return WeatherIconVariants.Cloudy;
  }
  if (code === 1003) {
    return WeatherIconVariants.PartySunny;
  }
  if (
    code === 1180 ||
    code === 1183 ||
    code === 1186 ||
    code === 1189 ||
    code === 1192 ||
    code === 1195 ||
    code === 1198 ||
    code === 1201 ||
    code === 1273 ||
    code === 1276
  ) {
    return WeatherIconVariants.Rain;
  }
  if (
    code === 1063 ||
    code === 1069 ||
    code === 1150 ||
    code === 1153 ||
    code === 1168 ||
    code === 1171 ||
    code === 1201 ||
    code === 1204 ||
    code === 1207 ||
    code === 1240 ||
    code === 1243 ||
    code === 1246 ||
    code === 1249 ||
    code === 1252 ||
    code === 1255 ||
    code === 1258 ||
    code === 1261 ||
    code === 1264
  ) {
    return WeatherIconVariants.Shower;
  }
  if (
    code === 1066 ||
    code === 1072 ||
    code === 1114 ||
    code === 1117 ||
    code === 1210 ||
    code === 1213 ||
    code === 1216 ||
    code === 1219 ||
    code === 1222 ||
    code === 1225 ||
    code === 1237
  ) {
    return WeatherIconVariants.Snow;
  }
  if (code === 1000) {
    return WeatherIconVariants.Sun;
  }
  if (code === 1087 || code === 1279 || code === 1282) {
    return WeatherIconVariants.Thunder;
  }
  if (code === 1030 || code === 1135 || code === 1147) {
    return WeatherIconVariants.Fog;
  }
  return WeatherIconVariants.Windy;
}

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
function getDayName(dayNumber: number, index: number) {
  const resultIndex =
    dayNumber + index > 6 ? dayNumber + index - 7 : dayNumber + index;
  const daysName = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  return daysName[resultIndex];
}
function openWeatherAPIConverterByDay(
  array: Array<OpenWeatherListType>,
): Array<any> {
  const result: any[] = [];
  array.forEach((obj, i) => {
    if (!(i % 8)) {
      result.push({
        icon: getOpenWeatherIcon(obj.weather[0].id),
        name: getDayName(new Date(obj.dt_txt).getDay(), 0),
        degrees: obj.main.temp,
        id: v1(),
      });
    }
    return null;
  });
  return result;
}
function openWeatherAPIConverterByHours(
  array: Array<OpenWeatherListType>,
): Array<any> {
  const result: any[] = [];
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
export {
  getDayName,
  getWeatherIcon,
  openWeatherAPIConverterByDay,
  getOpenWeatherIcon,
  openWeatherAPIConverterByHours,
  getBackground,
};
