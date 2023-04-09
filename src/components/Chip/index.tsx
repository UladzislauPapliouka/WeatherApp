import React from 'react';
import { ChipPropsType } from '@Types/propsTypes/chipTypes';

import { ChipText, ChipWrapper } from './styled';

function Chip({ text, variant = 'default' }: ChipPropsType) {
  return (
    <ChipWrapper variant={variant}>
      <ChipText>{text}</ChipText>
    </ChipWrapper>
  );
}

export default Chip;
