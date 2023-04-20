import React from 'react';
import { DegreesSpanPropsType } from '@components/DegreesSpan/types';

import StyledDegreeSpan from './styled';

function DegreesSpan({ value, size = 'default' }: DegreesSpanPropsType) {
  return (
    <StyledDegreeSpan size={size}>{`${value.toFixed(0)}°`}</StyledDegreeSpan>
  );
}
export default DegreesSpan;
