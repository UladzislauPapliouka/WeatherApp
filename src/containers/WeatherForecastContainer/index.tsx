import React from 'react';
import Loader from '@components/Loader';
import WeatherItem from '@components/WeatherItem';

import { useAppSelector } from '@/store';

import ForecastWrapper from './styled';

const WeatherForecastContainer = () => {
  const weatherItems = useAppSelector((state) => state.weatherInfo);

  const isFetching = useAppSelector(
    (state) => state.appState.isWeatherFetching,
  );

  return (
    <ForecastWrapper>
      {isFetching ? (
        <Loader />
      ) : (
        weatherItems.map(({ id, degrees, name, icon }, itemIndex) => (
          <WeatherItem
            key={id}
            chipText={name}
            variant={itemIndex === 0 ? 'full' : 'compact'}
            weatherIcon={icon}
            temperature={degrees}
          />
        ))
      )}
    </ForecastWrapper>
  );
};

export default WeatherForecastContainer;
