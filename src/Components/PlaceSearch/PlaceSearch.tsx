import React, { SyntheticEvent, useState } from 'react';
import styles from './PlaceSearch.module.scss';
import { action } from '../../Store/Store';

export default function PlaceSearch() {
  const [field, setField] = useState<string>('');
  const onChangeHandler = (e:SyntheticEvent<any>) => {
    e.preventDefault();
    setField(e.currentTarget.value);
  };
  return (
    <div className={styles.search}>
      <input value={field} onChange={onChangeHandler} type="text" />
      <button
        type="button"
        onClick={() => {
          action('FIND_PLACE', { name: field });
        }}
      >
        Search
      </button>
    </div>
  );
}
