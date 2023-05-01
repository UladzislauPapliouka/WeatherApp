export enum openWeatherActionTypes {
  FIND_PLACE_BY_COORDS_OPEN_WEATHER = 'FIND_PLACE_BY_COORDS_OPEN_WEATHER',
  FIND_PLACE_BY_NAME_OPEN_WEATHER = 'FIND_PLACE_BY_NAME_OPEN_WEATHER',
  TAKE_AUTO_COMPLETE_OPEN = 'TAKE_AUTO_COMPLETE_OPEN',
  FETCH_OPEN_WEATHER_DAILY = 'FETCH_OPEN_WEATHER_DAILY',
  FETCH_OPEN_WEATHER_HOURLY = 'FETCH_OPEN_WEATHER_HOURLY',
}
export const findPlaceByCoordsOpenWeatherAC = (
  lat: number,
  lon: number,
  hourly = false,
) => ({
  type: openWeatherActionTypes.FIND_PLACE_BY_COORDS_OPEN_WEATHER,
  payload: {
    lat,
    lon,
    hourly,
  },
});

export const findPlaceByNameOpenWeatherAC = (name: string, hourly = false) => ({
  type: openWeatherActionTypes.FIND_PLACE_BY_NAME_OPEN_WEATHER,
  payload: {
    name,
    hourly,
  },
});

export const getAutocompleteAC = (name: string) => ({
  type: openWeatherActionTypes.TAKE_AUTO_COMPLETE_OPEN,
  payload: {
    name,
  },
});

export const fetchDailyOpenWeatherAC = () => ({
  type: openWeatherActionTypes.FETCH_OPEN_WEATHER_DAILY,
});

export const fetchHourlyOpenWeatherAC = () => ({
  type: openWeatherActionTypes.FETCH_OPEN_WEATHER_HOURLY,
});
