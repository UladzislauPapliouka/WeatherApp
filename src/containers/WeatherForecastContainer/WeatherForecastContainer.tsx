import React from 'react';

import WeatherItem from '../../components/WeatherItem';
import { useAppSelector } from '../../store';

import styles from './WeatherForecastContainer.module.scss';

export default function WeatherForecastContainer() {
  const infoByDays = useAppSelector((state) => state.WeatherByDayReducer);
  return (
    <div className={styles.forecastContainer}>
      {infoByDays.map((info, i) => (
        <WeatherItem
          key={info.id}
          chipText={info.name}
          variant={i === 0 ? 'full' : 'compact'}
          weatherIcon={info.icon}
          temperature={info.degrees}
        />
      ))}
    </div>
  );
}
