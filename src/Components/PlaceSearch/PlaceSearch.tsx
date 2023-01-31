import React, { SyntheticEvent, useState } from 'react';
import styles from './PlaceSearch.module.scss';
import { useAppDispatch } from '../../Store/Store';
import { findPlaceByNameOpenWeatherAC } from '../../Store/Sagas/OpenWeatherSaga';

export default function PlaceSearch() {
  const [field, setField] = useState<string>('');
  const onChangeHandler = (e:SyntheticEvent<any>) => {
    e.preventDefault();
    setField(e.currentTarget.value);
  };
  const dispatch = useAppDispatch();
  return (
    <div className={styles.search}>
      <input value={field} onChange={onChangeHandler} type="text" />
      <button
        type="button"
        onClick={() => {
          dispatch(findPlaceByNameOpenWeatherAC(field));
        }}
      >
        Search
      </button>
    </div>
  );
}
