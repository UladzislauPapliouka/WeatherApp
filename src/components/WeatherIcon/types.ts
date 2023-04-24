import { WeatherIconVariants } from '@Types/storeTypes/weatherStateType';

type sizeVariants = 'small' | 'default' | 'large';
export interface IWeatherIconProps {
  icon: WeatherIconVariants;
  size?: sizeVariants;
}
export interface IWeatherImageProps {
  size: sizeVariants;
}
