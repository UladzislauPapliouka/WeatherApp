export enum openMeteoActionsType {
  FETCH_WEATHER_DAILY = 'FETCH_WEATHER_DAILY',
  FETCH_WEATHER_HOURLY = 'FETCH_WEATHER_HOURLY',
  FIND_PLACE_BY_COORDS_WEATHER = 'FIND_PLACE_BY_COORDS_WEATHER',
  FIND_PLACE_BY_NAME_WEATHER = 'FIND_PLACE_BY_NAME_WEATHER',
  TAKE_AUTO_COMPLETE_WEATHER = 'TAKE_AUTO_COMPLETE_WEATHER',
}
export const fetchWeatherAPIDailyAC = () => ({
  type: openMeteoActionsType.FETCH_WEATHER_DAILY,
});

export const fetchWeatherAPIHourlyAC = () => ({
  type: openMeteoActionsType.FETCH_WEATHER_HOURLY,
});

export const findPlaceWeatherByCoordsAC = (
  lat: number,
  lon: number,
  hourly = false,
) => ({
  type: openMeteoActionsType.FIND_PLACE_BY_COORDS_WEATHER,
  payload: {
    lat,
    lon,
    hourly,
  },
});

export const findPlaceWeatherByNameAC = (name: string, hourly = false) => ({
  type: openMeteoActionsType.FIND_PLACE_BY_NAME_WEATHER,
  payload: {
    name,
    hourly,
  },
});

export const getAutocompleteWeatherAC = (name: string) => ({
  type: openMeteoActionsType.TAKE_AUTO_COMPLETE_WEATHER,
  payload: {
    name,
  },
});
