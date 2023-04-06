import React, { SyntheticEvent, useState } from 'react';

import { APIVariants } from '../../store/Reducers/AppReducer';
import { findPlaceByNameOpenWeatherAC } from '../../store/Sagas/OpenWeatherSaga';
import { findPlaceWeatherByNameAC } from '../../store/Sagas/WeatherSaga';
import { useAppDispatch, useAppSelector } from '../../store/Store';

import styles from './PlaceSearch.module.scss';

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
    <div className={styles.search}>
      <input
        value={field}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onClickHandler();
          }
        }}
        onChange={onChangeHandler}
        type="text"
      />
      <button type="button" onClick={onClickHandler}>
        Search
      </button>
    </div>
  );
}
