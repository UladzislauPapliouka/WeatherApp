export enum APIVariants {
  weatherAPI = 'Weather API',
  openWeatherAPI = 'OpenWeather API',
}
export enum WeatherRepresentVariants {
  daily = 'Daily',
  hourly = 'Hourly',
}
export type AppStateType = {
  preferredAPI: APIVariants;
  weatherRepresent: WeatherRepresentVariants;
  isWeatherFetching: boolean;
};
