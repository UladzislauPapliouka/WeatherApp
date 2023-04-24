export interface ISelectListProps<Option> {
  handleChangeSelected: (value: Option) => void;
  options: Option[];
}
