import React from 'react';
import styles from './GoogleEventsContainer.module.scss';
import { GoogleEvent } from '../../components/GoogleEvent';
import { useAppSelector } from '../../store';

export default function GoogleEventsContainer() {
  const events = useAppSelector((state) => state.GoogleEventsReducer);
  return (
    <div className={styles.googleEventsContainer}>
      {events.length
        ? (
          <>
            {events.map((event) => <GoogleEvent time={event.time} eventTitle={event.title} />)}
          </>
        )
        : (
          <span>No events or not logged in</span>
        )}
    </div>
  );
}
