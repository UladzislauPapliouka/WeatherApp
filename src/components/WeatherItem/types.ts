import { WeatherIconVariants } from '@Types/storeTypes/weatherStateType';

type weatherItemSizeVariants = 'compact' | 'full';
export interface IWeatherItemProps {
  chipText: string;
  weatherIcon: WeatherIconVariants;
  temperature: number;
  variant?: weatherItemSizeVariants;
}
export interface IWeatherItemWrapperProps {
  variant: weatherItemSizeVariants;
}
