import React from 'react';

import { Chip } from '../Chip';
import { DegreesSpan } from '../DegreesSpan';
import { WeatherIcon, WeatherIconVariants } from '../WeatherIcon';

import styles from './WeatherItem.module.scss';

export type WeatherItemPropsType = {
  chipText: string;
  weatherIcon: WeatherIconVariants;
  temperature: number;
  variant?: 'compact' | 'full';
};

export function WeatherItem({
  chipText,
  weatherIcon,
  temperature,
  variant = 'compact',
}: WeatherItemPropsType) {
  return (
    <div className={`${styles.weatherItem} ${styles[variant]}`}>
      <div
        className={styles.chipContainer}
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <Chip
          variant={`${variant === 'compact' ? 'default' : 'large'}`}
          text={chipText}
        />
      </div>
      <div
        className={styles.iconContainer}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <WeatherIcon
          size={`${variant === 'compact' ? 'small' : 'default'}`}
          icon={weatherIcon}
        />
      </div>
      <div
        className={styles.spanContainer}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <DegreesSpan
          size={`${variant === 'compact' ? 'default' : 'large'}`}
          value={temperature}
        />
      </div>
    </div>
  );
}

WeatherItem.defaultProps = {
  variant: 'compact',
};
