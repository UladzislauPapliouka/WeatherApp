import React from 'react';
import styles from './WeatherIcon.module.scss';
import * as weatherImages from '../../assets/weather-icons';

export type WeatherIconPropsType = {
  icon:
  'cloudy' |
  'fog' |
  'moon' |
  'partlySunny' |
  'rain' |
  'shower' |
  'snow' |
  'sun' |
  'sunnyRain' |
  'thunder' |
  'windy'
  size?: 'small' | 'default' | 'large'
};

export default function WeatherIcon({ icon, size = 'default' }: WeatherIconPropsType) {
  return <img className={`${styles.weatherIcon} ${styles[size]}`} src={weatherImages[icon]} alt="Weather icon" />;
}
WeatherIcon.defaultProps = {
  size: 'default',
};
