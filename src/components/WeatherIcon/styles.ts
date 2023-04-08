import styled from 'styled-components';

import { WeatherImagePropsType } from '../../types/propsTypes/weatherIcon';

const WeatherImage = styled.img<WeatherImagePropsType>`
  aspect-ratio: 1;
  width: ${({ size }) => {
    switch (size) {
      case 'small':
        return 50;
      case 'large':
        return 150;
      default:
        return 100;
    }
  }}px;
`;

export default WeatherImage;
