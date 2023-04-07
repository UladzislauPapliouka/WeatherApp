export type ChipSizeVariants = 'small' | 'default' | 'large';
export interface ChipPropsType {
  text: string;
  variant?: ChipSizeVariants;
}
export interface ChipWrapperPropsTypes {
  variant?: ChipSizeVariants;
}
