import React from 'react';
import Chip from '@components/Chip';
import { GoogleEventPropsType } from '@Types/propsTypes/googleEventTypes';

import { GoogleEventTitle, GoogleEventWrapper } from './styled';

function GoogleEvent({ time, eventTitle }: GoogleEventPropsType) {
  return (
    <GoogleEventWrapper>
      <Chip text={time.slice(0, 5)} />
      <GoogleEventTitle>{eventTitle}</GoogleEventTitle>
    </GoogleEventWrapper>
  );
}

export default GoogleEvent;
