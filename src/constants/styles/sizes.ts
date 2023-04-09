import { ISize } from '@Types/themeTypes';

const displayBreakpoints: ISize = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const gap: ISize = {
  xs: 10,
  sm: 20,
  md: 30,
  lg: 40,
  xl: 50,
  xxl: 60,
};
const fontSizes: ISize = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 26,
  xl: 40,
  xxl: 50,
};
const marginSize: ISize = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 26,
  xl: 40,
  xxl: 50,
};
const paddingSize: ISize = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 26,
  xl: 40,
  xxl: 50,
};
const chipGapSize: ISize = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 10,
  xxl: 12,
};
const chipHeightSize: ISize = {
  md: 30,
};
const chipWidthSize: ISize = {
  md: 46,
  xl: 60,
};

const selectGapSizes: ISize = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};
const selectWidthSizes: ISize = {
  md: 400,
};
const selectArrowSizes: ISize = {
  md: 12,
};
const sizes = {
  displayBreakpoints,
  gap,
  fontSizes,
  paddingSize,
  marginSize,
  chipGapSize,
  chipHeightSize,
  selectWidthSizes,
  selectGapSizes,
  chipWidthSize,
  selectArrowSizes,
};
export type sizesType = typeof sizes;
export default sizes;