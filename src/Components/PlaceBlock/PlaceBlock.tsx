import React from 'react';
import { useSelector } from 'react-redux';
import styles from './PlaceBlock.module.scss';
import { RootAppType } from '../../Store';

export default function PlaceBlock() {
  const place = useSelector((state:RootAppType) => state.PlaceReducer);
  return (
    <div className={styles.placeBlock}>
      <span className={styles.city}>{place.city}</span>
      <span className={styles.country}>{place.country}</span>
    </div>
  );
}
