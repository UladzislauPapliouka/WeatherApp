export enum APIVariants {
  weatherAPI = 'Weather API',
  openWeatherAPI = 'OpenWeather API',
}
export enum WeatherRepresentVariant {
  daily = 'Daily',
  hourly = 'Hourly',
}
export type AppInitialStateType = {
  preferredAPI: APIVariants;
  weatherRepresent: WeatherRepresentVariant;
  isWeatherFetching: boolean;
};
