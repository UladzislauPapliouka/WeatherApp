import React from 'react';

import { Chip } from '../Chip';

import styles from './GoogleEvent.module.scss';

export type GoogleEventPropsType = {
  time: string;
  eventTitle: string;
};

export function GoogleEvent({ time, eventTitle }: GoogleEventPropsType) {
  return (
    <div className={styles.googleEvent}>
      <Chip text={time.slice(0, 5)} />
      <span>{eventTitle}</span>
    </div>
  );
}
