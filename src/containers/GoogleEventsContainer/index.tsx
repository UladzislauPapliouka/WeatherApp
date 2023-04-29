import React from 'react';

import { useAppSelector } from '@/store';
import GoogleEvent from '@components/GoogleEvent';

import { GoogleEventsWrapper, NoEventsText } from './styled';

const GoogleEventsContainer = () => {
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
};

export default GoogleEventsContainer;
