import React from 'react';
import GoogleEvent from '@components/GoogleEvent';

import { useAppSelector } from '@/store';

import { GoogleEventsWrapper, NoEventsText } from './styled';

export default function GoogleEventsContainer() {
  const events = useAppSelector((state) => state.googleEvents);
  return (
    <GoogleEventsWrapper data-cy="googleEventsList">
      {events.length ? (
        <>
          {events.map(({ time, title }) => (
            <GoogleEvent key={time + title} time={time} eventTitle={title} />
          ))}
        </>
      ) : (
        <NoEventsText>No events or not logged in</NoEventsText>
      )}
    </GoogleEventsWrapper>
  );
}
