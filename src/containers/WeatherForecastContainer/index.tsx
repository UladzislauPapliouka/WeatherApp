import React from 'react';

import { useAppSelector } from '@/store';
import Loader from '@components/Loader';
import WeatherItem from '@components/WeatherItem';
import { getAppState, getForecast } from '@store/selectors/selector';

import ForecastWrapper from './styled';

const WeatherForecastContainer = () => {
  const weatherItems = useAppSelector(getForecast);

  const { isWeatherFetching } = useAppSelector(getAppState);

  return (
    <ForecastWrapper>
      {isWeatherFetching ? (
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
