export interface ISelectArrowProps {
  isActive: boolean;
}
export interface ICustomSelectProps<Option> {
  options: Option[];
  selected: string;
  onChangeSelected: (value: Option) => void;
}
