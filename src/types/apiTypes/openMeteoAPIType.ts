export type OpenMeteoHourlyResponse = {
  hourly: {
    time: Array<string>;
    temperature_2m: Array<number>;
    weathercode: Array<number>;
  };
};

export type OpenMeteoDailyResponse = {
  daily: {
    time: Array<string>;
    temperature_2m_max: Array<number>;
    temperature_2m_min: Array<number>;
    weathercode: Array<number>;
  };
};
export type OpenMeteoGeocodeResponse = {
  results: Array<{
    name: string;
    latitude: number;
    longitude: number;
    country: string;
  }>;
};
