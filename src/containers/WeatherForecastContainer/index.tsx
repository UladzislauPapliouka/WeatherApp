import React from 'react';
import Loader from '@components/Loader';
import WeatherItem from '@components/WeatherItem';

import { useAppSelector } from '@/store';

import ForecastWrapper from './styled';

export default function WeatherForecastContainer() {
  const weatherItems = useAppSelector((state) => state.weatherInfo);
  const isFetching = useAppSelector(
    (state) => state.appState.isWeatherFetching,
  );
  return (
    <ForecastWrapper>
      {isFetching ? (
        <Loader />
      ) : (
        weatherItems.map(({ id, degrees, name, icon }, i) => (
          <WeatherItem
            key={id}
            chipText={name}
            variant={i === 0 ? 'full' : 'compact'}
            weatherIcon={icon}
            temperature={degrees}
          />
        ))
      )}
    </ForecastWrapper>
  );
}
