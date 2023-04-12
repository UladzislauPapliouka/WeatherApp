import {
  APIVariants,
  WeatherRepresentVariant,
} from '@Types/storeTypes/appStateTypes';

export type SelectArrowPropsType = {
  isActive: boolean;
};
export interface ICustomSelect {
  options: string[];
  selected: string;
  onChangeSelected: (
    value: APIVariants | WeatherRepresentVariant | string,
  ) => void;
}
