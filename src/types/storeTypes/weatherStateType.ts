import { WeatherIconVariants } from '@Types/propsTypes/weatherIcon';

export type DayInfoType = {
  name: string;
  degrees: number;
  icon: WeatherIconVariants;
  id: string;
};
