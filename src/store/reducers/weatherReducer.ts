import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NormalizedWeatherItemDataType } from '@typing/storeTypes/weatherStateType';

const initialState: NormalizedWeatherItemDataType[] = [];

const WeatherByDaySlice = createSlice({
  name: 'SET_WEATHER',
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<NormalizedWeatherItemDataType[]>) =>
      action.payload,
  },
});

const WeatherReducer = WeatherByDaySlice.reducer;
const WeatherActions = WeatherByDaySlice.actions;
export { WeatherReducer, WeatherActions };
