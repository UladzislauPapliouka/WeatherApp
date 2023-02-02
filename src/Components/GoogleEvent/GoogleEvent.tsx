import React from 'react';
import styles from './GoogleEvent.module.scss';
import { Chip } from '../Chip';

export type GoogleEventPropsType = {
  time: string,
  eventTitle: string
};

export function GoogleEvent({ time, eventTitle }: GoogleEventPropsType) {
  return (
    <div className={styles.googleEvent}>
      <Chip text={time.slice(0, 5)} />
      <span>{eventTitle}</span>
    </div>
  );
}
