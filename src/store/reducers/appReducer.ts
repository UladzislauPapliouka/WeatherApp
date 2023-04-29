import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  APIVariants,
  AppStateType,
  WeatherRepresentVariants,
} from '@typing/storeTypes/appStateTypes';

const initialState: AppStateType = {
  preferredAPI: APIVariants.weatherAPI,
  weatherRepresent: WeatherRepresentVariants.daily,
  isWeatherFetching: false,
  isWeatherError: false,
};

const persistConfig = {
  key: 'AppState',
  storage,
};

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

      return result;
    },
    setWeatherRepresent: (
      state,
      action: PayloadAction<{
        weatherRepresent: WeatherRepresentVariants;
      }>,
    ) => {
      const result = {
        ...state,
        weatherRepresent: action.payload.weatherRepresent,
      };

      return result;
    },
    startWeatherFetching: (state) => ({
      ...state,
      isWeatherFetching: true,
      isWeatherError: false,
    }),
    finishWeatherFetching: (state) => ({
      ...state,
      isWeatherFetching: false,
    }),
    finishFetchingWithError: (state) => ({
      ...state,
      isWeatherFetching: false,
      isWeatherError: true,
    }),
  },
});

const AppReducer = AppSlice.reducer;

const PersistedAppReducer = persistReducer(persistConfig, AppSlice.reducer);

const AppActions = AppSlice.actions;

export { AppActions, PersistedAppReducer, AppReducer };
