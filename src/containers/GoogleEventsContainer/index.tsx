import React from 'react';

import { useAppSelector } from '@/store';
import Chip from '@components/Chip';

import {
  GoogleEventsWrapper,
  GoogleEventTitle,
  GoogleEventWrapper,
  NoEventsText,
} from './styled';

const GoogleEventsContainer = () => {
  const events = useAppSelector((state) => state.googleEvents);

  return (
    <GoogleEventsWrapper data-cy="googleEventsList">
      {events.length ? (
        <>
          {events.map(({ time, title }) => (
            <GoogleEventWrapper key={time + title}>
              <Chip text={time.slice(0, 5)} />
              <GoogleEventTitle>{title}</GoogleEventTitle>
            </GoogleEventWrapper>
          ))}
        </>
      ) : (
        <NoEventsText>No events or not logged in</NoEventsText>
      )}
    </GoogleEventsWrapper>
  );
};

export default GoogleEventsContainer;
