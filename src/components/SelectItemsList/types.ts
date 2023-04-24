export interface SelectListProps<Option> {
  handleChangeSelected: (value: Option) => void;
  options: Option[];
}
