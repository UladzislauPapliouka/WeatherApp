import React from 'react';

import { useAppSelector } from '@/store';
import Chip from '@components/Chip';
import { getGoogleEvents } from '@store/selectors/selector';

import {
  GoogleEventsWrapper,
  GoogleEventTitle,
  GoogleEventWrapper,
  NoEventsText,
} from './styled';

const GoogleEventsContainer = () => {
  const events = useAppSelector(getGoogleEvents);

  return (
    <GoogleEventsWrapper data-cy="googleEventsList">
      {events.length ? (
        <>
          {events.map(({ time, title, id }) => (
            <GoogleEventWrapper key={id}>
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
