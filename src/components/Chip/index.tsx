import React from 'react';

import { ChipText, ChipWrapper } from './styled';
import { IChipProps } from './types';

function Chip({ text, variant = 'default' }: IChipProps) {
  return (
    <ChipWrapper variant={variant}>
      <ChipText>{text}</ChipText>
    </ChipWrapper>
  );
}

export default Chip;
