import React from 'react';
import Chip from '@components/Chip';

import { GoogleEventTitle, GoogleEventWrapper } from './styled';
import { IGoogleEventProps } from './types';

const GoogleEvent = ({ time, eventTitle }: IGoogleEventProps) => (
  <GoogleEventWrapper>
    <Chip text={time.slice(0, 5)} />
    <GoogleEventTitle>{eventTitle}</GoogleEventTitle>
  </GoogleEventWrapper>
);

export default GoogleEvent;
