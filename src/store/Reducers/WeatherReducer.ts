import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DayInfoType } from '@Types/storeTypes/weatherStateType';

const initialState: DayInfoType[] = [];

const WeatherByDaySlice = createSlice({
  name: 'SET_WEATHER',
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<DayInfoType[]>) => action.payload,
  },
});

const WeatherReducer = WeatherByDaySlice.reducer;
const WeatherActions = WeatherByDaySlice.actions;
export { WeatherReducer, WeatherActions };
