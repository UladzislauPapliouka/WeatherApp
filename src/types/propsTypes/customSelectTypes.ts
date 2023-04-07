export type SelectArrowPropsType = {
  isActive: boolean;
};
export interface ICustomSelect {
  options: string[];
  selected: string;
  onChangeSelected: (value: any) => void;
}
