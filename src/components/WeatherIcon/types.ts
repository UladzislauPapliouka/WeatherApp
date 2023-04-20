import { WeatherIconVariants } from '@Types/storeTypes/weatherStateType';

export type WeatherIconPropsType = {
  icon: WeatherIconVariants;
  size?: 'small' | 'default' | 'large';
};
export type WeatherImagePropsType = {
  size: 'small' | 'default' | 'large';
};
