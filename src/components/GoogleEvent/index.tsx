import React from 'react';
import Chip from '@components/Chip';

import { GoogleEventTitle, GoogleEventWrapper } from './styled';
import { IGoogleEventProps } from './types';

function GoogleEvent({ time, eventTitle }: IGoogleEventProps) {
  return (
    <GoogleEventWrapper>
      <Chip text={time.slice(0, 5)} />
      <GoogleEventTitle>{eventTitle}</GoogleEventTitle>
    </GoogleEventWrapper>
  );
}

export default GoogleEvent;
