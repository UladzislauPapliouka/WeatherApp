import { WeatherIconVariants } from '@Types/storeTypes/weatherStateType';

export type WeatherItemPropsType = {
  chipText: string;
  weatherIcon: WeatherIconVariants;
  temperature: number;
  variant?: 'compact' | 'full';
};
export type WeatherItemWrapperProps = {
  variant: 'compact' | 'full';
};
