import { colorsType } from '@constants/styles/colors';
import { sizesType } from '@constants/styles/sizes';
import { ColorType, IFontWeight, IGreyscale, ISize } from '@Types/themeTypes';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: { [key in keyof sizesType]: ISize };
    colors: { [key in keyof colorsType]: ColorType };
    greyscale: IGreyscale;
    fontWeight: IFontWeight;
  }
}
