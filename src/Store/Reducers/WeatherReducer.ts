import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherIconVariants } from '../../Components/WeatherIcon';

type DayInfoType = {
  name: string,
  degrees: number,
  icon:WeatherIconVariants
};

const initialState:DayInfoType[] = [];

const WeatherByDaySlice = createSlice({
  name: 'SET_WEATHER',
  initialState,
  reducers: {
    setInfo: (state, action:PayloadAction<DayInfoType[]>) => action.payload,
  },
});

const WeatherReducer = WeatherByDaySlice.reducer;
const WeatherActions = WeatherByDaySlice.actions;
export {
  WeatherReducer,
  WeatherActions,
};
