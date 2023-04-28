import * as backgrounds from '@assets/backgrounds';
import {
  getBackground,
  getOpenMeteoIcon,
  getOpenWeatherIcon,
} from '@services/services';
import { WeatherIconVariants } from '@typing/storeTypes/weatherStateType';

describe('Correct images chould be choosen due to weatherCode', () => {
  test('OpenMeteo weather code should be correct transform in weatherIcon', () => {
    expect(getOpenMeteoIcon(1)).toBe(WeatherIconVariants.PartySunny);
    expect(getOpenMeteoIcon(45)).toBe(WeatherIconVariants.Fog);
    expect(getOpenMeteoIcon(80)).toBe(WeatherIconVariants.Shower);
    expect(getOpenMeteoIcon(73)).toBe(WeatherIconVariants.Snow);
    expect(getOpenMeteoIcon(91)).toBe(WeatherIconVariants.Thunder);
    expect(getOpenMeteoIcon(0)).toBe(WeatherIconVariants.Sun);
  });
  test('Correct app backgrounds should be chosen doe to weather icon', () => {
    expect(getBackground(WeatherIconVariants.Sun)[0]).toBe(backgrounds.sunMain);
    expect(getBackground(WeatherIconVariants.Sun)[1]).toBe(
      backgrounds.sunSecondary,
    );
    expect(getBackground(WeatherIconVariants.Cloudy)[0]).toBe(
      backgrounds.cloudsMain,
    );
    expect(getBackground(WeatherIconVariants.Cloudy)[1]).toBe(
      backgrounds.cloudsSecondary,
    );
    expect(getBackground(WeatherIconVariants.Fog)[0]).toBe(backgrounds.fogMain);
    expect(getBackground(WeatherIconVariants.Fog)[1]).toBe(
      backgrounds.fogSecondary,
    );
    expect(getBackground(WeatherIconVariants.PartySunny)[0]).toBe(
      backgrounds.partlySunnyMain,
    );
    expect(getBackground(WeatherIconVariants.PartySunny)[1]).toBe(
      backgrounds.partlySunnySecondary,
    );
    expect(getBackground(WeatherIconVariants.Rain)[0]).toBe(
      backgrounds.rainMain,
    );
    expect(getBackground(WeatherIconVariants.Rain)[1]).toBe(
      backgrounds.rainSecondary,
    );
    expect(getBackground(WeatherIconVariants.Shower)[0]).toBe(
      backgrounds.showerMain,
    );
    expect(getBackground(WeatherIconVariants.Shower)[1]).toBe(
      backgrounds.showerSEcondary,
    );
    expect(getBackground(WeatherIconVariants.Snow)[0]).toBe(
      backgrounds.snowMain,
    );
    expect(getBackground(WeatherIconVariants.Snow)[1]).toBe(
      backgrounds.snowSecondary,
    );
    expect(getBackground(WeatherIconVariants.Thunder)[0]).toBe(
      backgrounds.thunderMain,
    );
    expect(getBackground(WeatherIconVariants.Thunder)[1]).toBe(
      backgrounds.thunderSecondary,
    );
    expect(getBackground(WeatherIconVariants.Windy)[0]).toBe(
      backgrounds.windyMain,
    );
    expect(getBackground(WeatherIconVariants.Windy)[1]).toBe(
      backgrounds.windySecondary,
    );
  });
  test('OpenWeather weather code should be correct transform in weatherIcon', () => {
    expect(getOpenWeatherIcon(250)).toBe(WeatherIconVariants.Thunder);
    expect(getOpenWeatherIcon(350)).toBe(WeatherIconVariants.Shower);
    expect(getOpenWeatherIcon(550)).toBe(WeatherIconVariants.Rain);
    expect(getOpenWeatherIcon(650)).toBe(WeatherIconVariants.Snow);
    expect(getOpenWeatherIcon(750)).toBe(WeatherIconVariants.Fog);
    expect(getOpenWeatherIcon(800)).toBe(WeatherIconVariants.Sun);
    expect(getOpenWeatherIcon(802)).toBe(WeatherIconVariants.Cloudy);
    expect(getOpenWeatherIcon(1030)).toBe(WeatherIconVariants.Windy);
  });
});
