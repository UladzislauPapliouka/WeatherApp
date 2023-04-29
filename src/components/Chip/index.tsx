import React from 'react';

import { ChipText, ChipWrapper } from './styled';
import { IChipProps } from './types';

const Chip = ({ text, variant = 'default' }: IChipProps) => (
  <ChipWrapper variant={variant}>
    <ChipText>{text}</ChipText>
  </ChipWrapper>
);

export default Chip;
