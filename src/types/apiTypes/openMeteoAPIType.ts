export type OpenMeteoHourlyResponse = {
  hourly: {
    time: Array<string>;
    temperature_2m: Array<number>;
    weathercode: Array<number>;
  };
};
