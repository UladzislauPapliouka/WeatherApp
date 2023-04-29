import React from 'react';

import StyledDegreeSpan from './styled';
import { DegreesSpanPropsType } from './types';

const DegreesSpan = ({ value, size = 'default' }: DegreesSpanPropsType) => (
  <StyledDegreeSpan size={size}>{`${value.toFixed(0)}°`}</StyledDegreeSpan>
);

export default DegreesSpan;
