import { ColorType } from '@typing/themeTypes';

const textColorLight: ColorType = '#f1eaea';
const textColorDark: ColorType = '#100f0f';
const primaryDarkBlue: ColorType = '#353e4d';
const selectBackground: ColorType = '#353E4DB2';
const borderColor: ColorType = '#000';
const whiteColor: ColorType = '#FFF';
const lightHoverColor: ColorType = '#F5F4FB';
const lightHoverColor03: ColorType = 'rgba(245,244,251,0.3)';

const colors = {
  textColor: textColorLight,
  textColorDark,
  primaryDarkBlue,
  selectBackground,
  borderColor,
  whiteColor,
  lightHoverColor,
  lightHoverColor03,
};
export type colorsType = typeof colors;
export default colors;
