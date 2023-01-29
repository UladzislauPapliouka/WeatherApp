import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherIconVariants } from '../../Components/WeatherIcon';

type DayInfoType = {
  name: string,
  degrees: number,
  icon:WeatherIconVariants
};

const initialState:DayInfoType[] = [
  {
    icon: WeatherIconVariants.Sun,
    name: 'Tuday',
    degrees: 12,
  },
  {
    icon: WeatherIconVariants.Sun,
    name: 'TUE',
    degrees: 12,
  },
  {
    icon: WeatherIconVariants.PartySunny,
    name: 'WED',
    degrees: 10,
  },
  {
    icon: WeatherIconVariants.Cloudy,
    name: 'THU',
    degrees: 8,
  },
  {
    icon: WeatherIconVariants.Rain,
    name: 'FRI',
    degrees: 8,
  },
  {
    icon: WeatherIconVariants.Fog,
    name: 'SAT',
    degrees: 4,
  },
  {
    icon: WeatherIconVariants.Snow,
    name: 'SUN',
    degrees: -2,
  },
];

const WeatherByDaySlice = createSlice({
  name: 'WEATHER_BY_DAY',
  initialState,
  reducers: {
    setInfo: (state, action:PayloadAction<DayInfoType[]>) => action.payload,
  },
});

const WeatherByDayReducer = WeatherByDaySlice.reducer;
const WeatherByDayActions = WeatherByDaySlice.actions;

export {
  WeatherByDayReducer,
  WeatherByDayActions,
};
