import { PlaceInitialStateType } from '@Types/storeTypes/placeStateType';

export interface SelectListProps {
  handleChangeSelected: (value: string | PlaceInitialStateType) => void;
  options: string[] | Array<PlaceInitialStateType>;
}
