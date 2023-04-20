import React from 'react';
import * as weatherImages from '@assets/weather-icons';
import { WeatherIconPropsType } from '@components/WeatherIcon/types';

import WeatherImage from './styles';

export default function WeatherIcon({
  icon,
  size = 'default',
}: WeatherIconPropsType) {
  return (
    <WeatherImage size={size} src={weatherImages[icon]} alt="Weather icon" />
  );
}
