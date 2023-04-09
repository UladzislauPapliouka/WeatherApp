import React, { SyntheticEvent, useState } from 'react';
import { findPlaceByNameOpenWeatherAC } from '@store/Sagas/OpenWeatherSaga';
import { findPlaceWeatherByNameAC } from '@store/Sagas/WeatherSaga';
import { APIVariants } from '@Types/storeTypes/appStateTypes';

import { useAppDispatch, useAppSelector } from '@/store';

import { PlaceSearchWrapper, SearchButton, SearchInput } from './styled';

export default function PlaceSearch({
  preferredAPI,
  hourly,
}: {
  preferredAPI: APIVariants;
  hourly: boolean;
}) {
  const initialField = useAppSelector((state) => state.PlaceReducer.city);
  const [field, setField] = useState<string>(initialField);
  const onChangeHandler = (e: SyntheticEvent<any>) => {
    e.preventDefault();
    setField(e.currentTarget.value);
  };
  const dispatch = useAppDispatch();
  const onClickHandler = () => {
    dispatch(
      preferredAPI === APIVariants.openWeatherAPI
        ? findPlaceByNameOpenWeatherAC(field, hourly)
        : findPlaceWeatherByNameAC(field, hourly),
    );
  };

  return (
    <PlaceSearchWrapper>
      <SearchInput
        value={field}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onClickHandler();
          }
        }}
        onChange={onChangeHandler}
      />
      <SearchButton onClick={onClickHandler}>Search</SearchButton>
    </PlaceSearchWrapper>
  );
}
