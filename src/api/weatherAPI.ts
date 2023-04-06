import axios from 'axios';

const insnatce = axios.create({
  baseURL: 'http://api.weatherapi.com/v1/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public,must-revalidate',
  },
});
type WeatherAPIForecastResponseType = {
  location:{
    'name': string,
    'region':string,
    'country': string,
    'lat': number,
    'lon': number,
    'tz_id': string,
    'localtime_epoch':number,
    'localtime': string
  },
  current:{
    'temp_c': number,
    'temp_f': number,
    'is_day': number,
    'condition': {
      'text': string,
      'icon': string,
      'code': number
    },
    'uv': number
  },
  forecast:{
    forecastday: Array<{
      date:string,
      date_epoch: number,
      day:{
        'maxtemp_c': number,
        'maxtemp_f': number,
        'mintemp_c': number,
        'mintemp_f': number,
        'avgtemp_c': number,
        'avgtemp_f': number,
        'maxwind_mph': number,
        'maxwind_kph': number,
        'totalprecip_mm': number,
        'totalprecip_in': number,
        'totalsnow_cm': number,
        'avgvis_km': number,
        'avgvis_miles': number,
        'avghumidity': number,
        'daily_will_it_rain': number,
        'daily_chance_of_rain': number,
        'daily_will_it_snow': number,
        'daily_chance_of_snow': number,
        'condition': {
          'text': string,
          'icon': string,
          'code': number
        },
        'uv': number
      },
      'astro': {
        'sunrise': string,
        'sunset': string,
        'moonrise': string,
        'moonset': string,
        'moon_phase': string,
        'moon_illumination': string
      },
      'hour': Array<{
        'time_epoch': number,
        'time':string,
        'temp_c': number,
        'temp_f': number,
        'is_day': number,
        'condition': {
          'text': string,
          'icon': string,
          'code': number
        },
        'wind_mph': number,
        'wind_kph': number,
        'wind_degree': number,
        'wind_dir': string,
        'pressure_mb':number,
        'pressure_in': number,
        'precip_in': number,
        'precip_mm': number,
        'humidity': number,
        'cloud': number,
        'feelslike_c': number,
        'feelslike_f': number,
        'windchill_c': number,
        'windchill_f': number,
        'heatindex_c': number,
        'heatindex_f': number,
        'dewpoint_c': number,
        'dewpoint_f': number,
        'will_it_rain':number,
        'chance_of_rain':number,
        'will_it_snow': number,
        'chance_of_snow': number,
        'vis_km':number,
        'vis_miles': number,
        'gust_mph': number,
        'gust_kph':number,
        'uv': number,
      }>
    }>
  },

};
type WeatherPlaceResponseType = Array<{
  'id': number,
  'name': string,
  'region': string,
  'country': string,
  'lat': number,
  'lon': number,
  'url': string
}>;
const weatherAPI = {
  getWeatherDaily: (lat:number, lon:number) => insnatce.get<WeatherAPIForecastResponseType>(`forecast.json?key=7e5fc8f7edca45498ea180325233001&q=${lat},${lon}&days=7&aqi=no&alerts=no`),
  getWeatherHourly: (lat:number, lon:number) => insnatce.get<WeatherAPIForecastResponseType>(`forecast.json?key=7e5fc8f7edca45498ea180325233001&q=${lat},${lon}&days=1&aqi=no&alerts=no`),
  getFindPlaceByCoords: (lat:number, lon:number) => insnatce.get<WeatherPlaceResponseType>(`search.json?key=7e5fc8f7edca45498ea180325233001&q=${lat},${lon}`),
  getFindPlaceByName: (name:string) => insnatce.get<WeatherPlaceResponseType>(`search.json?key=7e5fc8f7edca45498ea180325233001&q=${name}`),
};
export default weatherAPI;
export type {
  WeatherPlaceResponseType,
  WeatherAPIForecastResponseType,
};
