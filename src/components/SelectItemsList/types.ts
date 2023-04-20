import { NormalizedPlaceDataType } from '@Types/storeTypes/placeStateType';

export interface SelectListProps {
  handleChangeSelected: (value: string | NormalizedPlaceDataType) => void;
  options: string[] | Array<NormalizedPlaceDataType>;
}
