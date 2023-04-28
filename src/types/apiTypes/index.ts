import {
  IOpenWeatherList,
  IOpenWeatherPlaceResponse,
  IOpenWeatherResponse,
} from '@Types/apiTypes/openWeatherAPITypes';

import {
  IGoogleEventEntity,
  IGoogleUserEntity,
} from './googleCalendarAPITypes';
import {
  IOpenMeteoDailyResponse,
  IOpenMeteoHourlyResponse,
} from './openMeteoAPIType';
import {
  IWeatherAPIForecastResponse,
  WeatherPlaceResponseType,
} from './weatherAPITypes';

export type {
  IGoogleEventEntity,
  IGoogleUserEntity,
  IOpenWeatherPlaceResponse,
  IOpenWeatherResponse,
  IOpenWeatherList,
  IWeatherAPIForecastResponse,
  WeatherPlaceResponseType,
  IOpenMeteoHourlyResponse,
  IOpenMeteoDailyResponse,
};
