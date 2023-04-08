import React from 'react';

import GoogleEvent from '../../components/GoogleEvent';
import { useAppSelector } from '../../store';

import { GoogleEventsWrapper, NoEventsText } from './styled';

export default function GoogleEventsContainer() {
  const events = useAppSelector((state) => state.GoogleEventsReducer);
  return (
    <GoogleEventsWrapper>
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
        <NoEventsText>No events or not logged in</NoEventsText>
      )}
    </GoogleEventsWrapper>
  );
}
