import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum APIVariants {
  weatherAPI = 'Weather API',
  openWeatherAPI = 'OpenWeather API',
}
export enum WeatherRepresentVariant {
  daily = 'Daily',
  hourly = 'Hourly',
}
export type AppInitialStateType = {
  preferredAPI:APIVariants,
  weatherRepresent:WeatherRepresentVariant,
};
let initialState:AppInitialStateType = {
  preferredAPI: APIVariants.weatherAPI,
  weatherRepresent: WeatherRepresentVariant.daily,
};
if (localStorage.getItem('AppState')) {
  // eslint-disable-next-line no-debugger
  debugger;
  const item = localStorage.getItem('AppState') as string;
  initialState = JSON.parse(item);
}
const AppSlice = createSlice({
  name: 'APP',
  initialState,
  reducers: {
    setPreferredAPI: (state, action:PayloadAction<{ preferredAPI:APIVariants }>) => {
      const result = {
        ...state,
        preferredAPI: action.payload.preferredAPI,
      };
      localStorage.setItem('AppState', JSON.stringify(result));
      return result;
    },
    setWeatherRepresent: (state, action:PayloadAction<{
      weatherRepresent:WeatherRepresentVariant
    }>) => {
      const result = {
        ...state,
        weatherRepresent: action.payload.weatherRepresent,
      };
      localStorage.setItem('AppState', JSON.stringify(result));
      return result;
    },
  },
});

const AppReducer = AppSlice.reducer;
const AppActions = AppSlice.actions;

export {
  AppActions,
  AppReducer,
};
