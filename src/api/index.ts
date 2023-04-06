import OpenWeatherAPI, {
  OpenWeatherListType,
  OpenWeatherPlaceResponseType,
  OpenWeatherResponseType,
} from './openWeatherAPI';
import weatherAPI, {
  WeatherAPIForecastResponseType,
  WeatherPlaceResponseType,
} from './weatherAPI';

export { OpenWeatherAPI, weatherAPI };
export type {
  OpenWeatherPlaceResponseType,
  OpenWeatherResponseType,
  WeatherAPIForecastResponseType,
  WeatherPlaceResponseType,
  OpenWeatherListType,
};
