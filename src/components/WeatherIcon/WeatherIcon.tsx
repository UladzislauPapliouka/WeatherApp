import React from 'react';

import * as weatherImages from '../../assets/weather-icons';

import styles from './WeatherIcon.module.scss';

export enum WeatherIconVariants {
  Cloudy = 'cloudy',
  Fog = 'fog',
  Moon = 'moon',
  PartySunny = 'partlySunny',
  Rain = 'rain',
  Shower = 'shower',
  Snow = 'snow',
  Sun = 'sun',
  SunnyRain = 'sunnyRain',
  Thunder = 'thunder',
  Windy = 'windy',
}

export type WeatherIconPropsType = {
  icon: WeatherIconVariants;
  size?: 'small' | 'default' | 'large';
};

export default function WeatherIcon({
  icon,
  size = 'default',
}: WeatherIconPropsType) {
  return (
    <img
      className={`${styles.weatherIcon} ${styles[size]}`}
      src={weatherImages[icon]}
      alt="Weather icon"
    />
  );
}
WeatherIcon.defaultProps = {
  size: 'default',
};
