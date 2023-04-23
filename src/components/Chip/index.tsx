import React from 'react';
import { IChipProps } from '@components/Chip/types';

import { ChipText, ChipWrapper } from './styled';

function Chip({ text, variant = 'default' }: IChipProps) {
  return (
    <ChipWrapper variant={variant}>
      <ChipText>{text}</ChipText>
    </ChipWrapper>
  );
}

export default Chip;
