import React from 'react';
import * as weatherImages from '@assets/weatherIcons';

import WeatherImage from './styles';
import { IWeatherIconProps } from './types';

const WeatherIcon = ({ icon, size = 'default' }: IWeatherIconProps) => (
  <WeatherImage size={size} src={weatherImages[icon]} alt="Weather icon" />
);

export default WeatherIcon;
