import React from 'react';
import Chip from '@components/Chip';
import DegreesSpan from '@components/DegreesSpan';
import WeatherIcon from '@components/WeatherIcon';
import { WeatherItemPropsType } from '@Types/propsTypes/weatherItemTypes';

import {
  ChipContainer,
  DegreeSpanContainer,
  IconContainer,
  WeatherItemWrapper,
} from './styled';

export default function WeatherItem({
  chipText,
  weatherIcon,
  temperature,
  variant = 'compact',
}: WeatherItemPropsType) {
  return (
    <WeatherItemWrapper variant={variant}>
      <ChipContainer>
        <Chip
          variant={`${variant === 'compact' ? 'default' : 'large'}`}
          text={chipText}
        />
      </ChipContainer>
      <IconContainer>
        <WeatherIcon
          size={`${variant === 'compact' ? 'small' : 'default'}`}
          icon={weatherIcon}
        />
      </IconContainer>
      <DegreeSpanContainer>
        <DegreesSpan
          size={`${variant === 'compact' ? 'default' : 'large'}`}
          value={temperature}
        />
      </DegreeSpanContainer>
    </WeatherItemWrapper>
  );
}
