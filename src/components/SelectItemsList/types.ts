export interface ISelectListProps<Option extends { toString: () => string }> {
  handleChangeSelected: (value: Option) => void;
  options: Option[];
}
