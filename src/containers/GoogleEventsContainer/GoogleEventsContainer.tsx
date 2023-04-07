import React from 'react';

import { GoogleEvent } from '../../components/GoogleEvent';
import { useAppSelector } from '../../store';

import styles from './GoogleEventsContainer.module.scss';

export default function GoogleEventsContainer() {
  const events = useAppSelector((state) => state.GoogleEventsReducer);
  return (
    <div className={styles.googleEventsContainer}>
      {events.length ? (
        <>
          {events.map((event) => (
            <GoogleEvent
              key={event.time}
              time={event.time}
              eventTitle={event.title}
            />
          ))}
        </>
      ) : (
        <span>No events or not logged in</span>
      )}
    </div>
  );
}
