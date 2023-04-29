import styled from 'styled-components';

import { IWeatherImageProps } from './types';

const WeatherImage = styled.img<IWeatherImageProps>`
  aspect-ratio: 1;
  width: ${({ size, theme: { sizes } }) => {
    switch (size) {
      case 'small':
        return sizes.WeatherIconSizes.sm;

      case 'large':
        return sizes.WeatherIconSizes.lg;

      default:
        return sizes.WeatherIconSizes.md;
    }
  }}px;
`;

export default WeatherImage;
