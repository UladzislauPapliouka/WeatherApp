import { WeatherIconVariants } from '@Types/propsTypes/weatherIcon';

export type ForecastItemInfoType = {
  name: string;
  degrees: number;
  icon: WeatherIconVariants;
  id: string;
};
