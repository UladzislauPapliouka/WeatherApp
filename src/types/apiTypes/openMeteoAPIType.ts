export interface IOpenMeteoHourlyResponse {
  hourly: {
    time: Array<string>;
    temperature_2m: Array<number>;
    weathercode: Array<number>;
  };
}

export interface IOpenMeteoDailyResponse {
  daily: {
    time: Array<string>;
    temperature_2m_max: Array<number>;
    temperature_2m_min: Array<number>;
    weathercode: Array<number>;
  };
}
export interface IOpenMeteoGeocodeResponse {
  results: Array<{
    name: string;
    latitude: number;
    longitude: number;
    country: string;
  }>;
}
