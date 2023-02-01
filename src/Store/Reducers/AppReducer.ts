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
const initialState:AppInitialStateType = {
  preferredAPI: APIVariants.weatherAPI,
  weatherRepresent: WeatherRepresentVariant.daily,
};
const AppSlice = createSlice({
  name: 'APP',
  initialState,
  reducers: {
    setPreferredAPI: (state, action:PayloadAction<{ preferredAPI:APIVariants }>) => (
      {
        ...state,
        preferredAPI: action.payload.preferredAPI,
      }),
    setWeatherRepresent: (state, action:PayloadAction<{
      weatherRepresent:WeatherRepresentVariant
    }>) => ({
      ...state,
      weatherRepresent: action.payload.weatherRepresent,
    }),
  },
});

const AppReducer = AppSlice.reducer;
const AppActions = AppSlice.actions;

export {
  AppActions,
  AppReducer,
};
