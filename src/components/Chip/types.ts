export type ChipSizeVariants = 'small' | 'default' | 'large';
export interface IChipProps {
  text: string;
  variant?: ChipSizeVariants;
}
export interface IChipWrapperProps {
  variant?: ChipSizeVariants;
}
