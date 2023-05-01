export interface ISelectArrowProps {
  isActive: boolean;
}
export interface ICustomSelectProps<Option extends { toString: () => string }> {
  options: Option[];
  selected: string;
  onChangeSelected: (value: Option) => void;
}
