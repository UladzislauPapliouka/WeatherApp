import React from 'react';
import Loader from '@components/Loader';
import WeatherItem from '@components/WeatherItem';

import { useAppSelector } from '@/store';

import ForecastWrapper from './styled';

export default function WeatherForecastContainer() {
  const infoByDays = useAppSelector((state) => state.WeatherByDayReducer);
  const isFetching = useAppSelector(
    (state) => state.AppReducer.isWeatherFetching,
  );
  return (
    <ForecastWrapper>
      {isFetching ? (
        <Loader />
      ) : (
        infoByDays.map((info, i) => (
          <WeatherItem
            key={info.id}
            chipText={info.name}
            variant={i === 0 ? 'full' : 'compact'}
            weatherIcon={info.icon}
            temperature={info.degrees}
          />
        ))
      )}
    </ForecastWrapper>
  );
}
