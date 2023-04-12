import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ForecastItemInfoType } from '@Types/storeTypes/weatherStateType';

const initialState: ForecastItemInfoType[] = [];

const WeatherByDaySlice = createSlice({
  name: 'SET_WEATHER',
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<ForecastItemInfoType[]>) =>
      action.payload,
  },
});

const WeatherReducer = WeatherByDaySlice.reducer;
const WeatherActions = WeatherByDaySlice.actions;
export { WeatherReducer, WeatherActions };
