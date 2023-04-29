import React from 'react';
import * as weatherImages from '@assets/weatherIcons';

import WeatherImage from './styles';
import { IWeatherIconProps } from './types';

export default function WeatherIcon({
  icon,
  size = 'default',
}: IWeatherIconProps) {
  return (
    <WeatherImage size={size} src={weatherImages[icon]} alt="Weather icon" />
  );
}
