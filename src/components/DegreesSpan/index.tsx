import React from 'react';

import StyledDegreeSpan from './styled';
import { DegreesSpanPropsType } from './types';

function DegreesSpan({ value, size = 'default' }: DegreesSpanPropsType) {
  return (
    <StyledDegreeSpan size={size}>{`${value.toFixed(0)}°`}</StyledDegreeSpan>
  );
}
export default DegreesSpan;
