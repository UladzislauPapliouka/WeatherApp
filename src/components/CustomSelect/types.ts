import {
  APIVariants,
  WeatherRepresentVariants,
} from '@Types/storeTypes/appStateTypes';

export type SelectArrowPropsType = {
  isActive: boolean;
};
export interface ICustomSelect {
  options: string[];
  selected: string;
  onChangeSelected: (
    value: APIVariants | WeatherRepresentVariants | string,
  ) => void;
}
