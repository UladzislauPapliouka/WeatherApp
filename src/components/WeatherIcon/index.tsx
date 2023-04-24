import React from 'react';
import * as weatherImages from '@assets/weather-icons';
import { IWeatherIconProps } from '@components/WeatherIcon/types';

import WeatherImage from './styles';

export default function WeatherIcon({
  icon,
  size = 'default',
}: IWeatherIconProps) {
  return (
    <WeatherImage size={size} src={weatherImages[icon]} alt="Weather icon" />
  );
}
