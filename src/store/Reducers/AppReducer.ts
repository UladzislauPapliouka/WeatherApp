import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  APIVariants,
  AppInitialStateType,
  WeatherRepresentVariant,
} from '@Types/storeTypes/appStateTypes';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState: AppInitialStateType = {
  preferredAPI: APIVariants.weatherAPI,
  weatherRepresent: WeatherRepresentVariant.daily,
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
        weatherRepresent: WeatherRepresentVariant;
      }>,
    ) => {
      const result = {
        ...state,
        weatherRepresent: action.payload.weatherRepresent,
      };
      return result;
    },
  },
});

const AppReducer = AppSlice.reducer;
const PersistedAppReducer = persistReducer(persistConfig, AppSlice.reducer);
const AppActions = AppSlice.actions;

export { AppActions, PersistedAppReducer, AppReducer };
