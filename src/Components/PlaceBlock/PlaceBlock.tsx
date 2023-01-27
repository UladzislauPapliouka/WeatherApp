import React from 'react';
import styles from './PlaceBlock.module.scss';

export default function PlaceBlock() {
  // const location = window.navigator.geolocation;
  // const coords = location.getCurrentPosition((co) => co.coords);
  // TODO: implement geocoder API
  return (
    <div className={styles.placeBlock}>
      <span className={styles.city}>Minsk</span>
      <span className={styles.country}>Belarus</span>
    </div>
  );
}
