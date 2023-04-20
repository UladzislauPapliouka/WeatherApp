import { WeatherImagePropsType } from '@components/WeatherIcon/types';
import styled from 'styled-components';

const WeatherImage = styled.img<WeatherImagePropsType>`
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
