import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  APIVariants,
  AppInitialStateType,
  WeatherRepresentVariant,
} from '@Types/storeTypes/appStateTypes';

let initialState: AppInitialStateType = {
  preferredAPI: APIVariants.weatherAPI,
  weatherRepresent: WeatherRepresentVariant.daily,
};
if (localStorage.getItem('AppState')) {
  const item = localStorage.getItem('AppState') as string;
  initialState = JSON.parse(item);
}
const AppSlice = createSlice({
  name: 'APP',
  initialState,
  reducers: {
    setPreferredAPI: (
      state,
      action: PayloadAction<{ preferredAPI: APIVariants }>,
    ) => {
      const result = {
        ...state,
        preferredAPI: action.payload.preferredAPI,
      };
      localStorage.setItem('AppState', JSON.stringify(result));
      return result;
    },
    setWeatherRepresent: (
      state,
      action: PayloadAction<{
        weatherRepresent: WeatherRepresentVariant;
      }>,
    ) => {
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

export { AppActions, AppReducer };
