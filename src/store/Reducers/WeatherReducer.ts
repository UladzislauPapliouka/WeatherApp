import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NormalizedWeatherItemDataType } from '@Types/storeTypes/weatherStateType';

const initialState: NormalizedWeatherItemDataType[] = [];

const WeatherByDaySlice = createSlice({
  name: 'SET_WEATHER',
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<NormalizedWeatherItemDataType[]>) =>
      action.payload,
    error: () => initialState,
  },
});

const WeatherReducer = WeatherByDaySlice.reducer;
const WeatherActions = WeatherByDaySlice.actions;
export { WeatherReducer, WeatherActions };
