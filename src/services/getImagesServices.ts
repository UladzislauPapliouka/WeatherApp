import { WeatherIconVariants } from '@/types/storeTypes/weatherStateType';
import * as backgrounds from '@assets/backgrounds';

export function getOpenWeatherIcon(code: number) {
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

export function getBackground(weather: WeatherIconVariants) {
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

export function getOpenMeteoIcon(code: number) {
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
