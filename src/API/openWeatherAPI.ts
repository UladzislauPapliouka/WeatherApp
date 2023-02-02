import axios from 'axios';

const weatherInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  headers: {
    'Cache-Control': 'public,must-revalidate',
  },
});

const locationInstance = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0/',
});

type OpenWeatherPlaceResponseType = {
  country:string,
  lat:number,
  lon:number,
  name:string,
  state:string
  local_names:{
    [key:string]:string
  }
};

type OpenWeatherResponseType = {
  cnt:number
  message: number
  cod:string
  city: {
    coord: { lat: number, lon: number }
    country:string
    id: number
    name: string
    population: number
    sunrise: number
    sunset: number
    timezone: number
  }
  list: Array<{
    clouds:{
      all:number
    },
    dt: number,
    dt_txt:string,
    pop:number
    wind: {
      speed:number,
      deg:number,
      gust:number
    },
    weather: Array<{
      id:number,
      main:string,
      description:string,
      icon:string
    }>
    visibility: number,
    main: {
      feels_like: number
      grnd_level: number
      humidity: number
      pressure: number
      sea_level: number
      temp: number
      temp_kf: number
      temp_max: number
      temp_min: number
    }
  }>
};
const openWeatherAPI = {
  getWeatherDaily: (lat:number, lon:number) => weatherInstance.get<OpenWeatherResponseType>(`forecast?lat=${lat}&lon=${lon}&appid=be4e4f1db7d4bfa1854ee2145c155b97&units=metric&cnt=48`),
  getWeatherHourly: (lat:number, lon:number) => weatherInstance.get<OpenWeatherResponseType>(`forecast?lat=${lat}&lon=${lon}&appid=be4e4f1db7d4bfa1854ee2145c155b97&units=metric&cnt=16`),
  getPlaceByCoords: (lat:number, lon:number) => locationInstance.get<OpenWeatherPlaceResponseType[]>(`reverse?lat=${lat}&lon=${lon}&limit=5&appid=be4e4f1db7d4bfa1854ee2145c155b97`),
  getPlaceByName: (name:string) => locationInstance.get<OpenWeatherPlaceResponseType[]>(`direct?q=${name}&limit=5&appid=be4e4f1db7d4bfa1854ee2145c155b97`),
};
export default openWeatherAPI;
export type {
  OpenWeatherPlaceResponseType, OpenWeatherResponseType,
};
