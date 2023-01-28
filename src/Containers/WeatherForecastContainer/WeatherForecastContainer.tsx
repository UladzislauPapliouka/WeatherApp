import React from 'react';
import styles from './WeatherForecastContainer.module.scss';
import { WeatherItem } from '../../Components/WeatherItem';
import { WeatherIconVariants } from '../../Components/WeatherIcon';

export default function WeatherForecastContainer() {
  return (
    <div className={styles.forecastContainer}>
      <WeatherItem chipText="Today" variant="full" weatherIcon={WeatherIconVariants.Sun} temperature={12} />
      <WeatherItem chipText="tue" weatherIcon={WeatherIconVariants.Sun} temperature={12} />
      <WeatherItem chipText="wed" weatherIcon={WeatherIconVariants.PartySunny} temperature={10} />
      <WeatherItem chipText="thu" weatherIcon={WeatherIconVariants.Cloudy} temperature={8} />
      <WeatherItem chipText="fri" weatherIcon={WeatherIconVariants.Rain} temperature={8} />
      <WeatherItem chipText="sat" weatherIcon={WeatherIconVariants.Fog} temperature={4} />
      <WeatherItem chipText="sun" weatherIcon={WeatherIconVariants.Snow} temperature={-2} />
    </div>
  );
}
