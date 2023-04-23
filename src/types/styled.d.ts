import { colorsType } from '@constants/styles/colors';
import { sizesType } from '@constants/styles/sizes';
import { ColorType, IFontWeight, IGreyscale, ISize } from '@Types/themeTypes';

import 'styled-components';

type sizesKeys = keyof sizesType;
type colorsKeys = keyof colorsType;
declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: Record<sizesKeys, ISize>;
    colors: Record<colorsKeys, ColorType>;
    greyscale: IGreyscale;
    fontWeight: IFontWeight;
  }
}
