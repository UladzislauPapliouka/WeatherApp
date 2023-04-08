import React from 'react';

import { GoogleEventPropsType } from '../../types/propsTypes/googleEventTypes';
import Chip from '../Chip';

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
