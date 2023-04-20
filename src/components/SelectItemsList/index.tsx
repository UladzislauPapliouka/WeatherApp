import React from 'react';
import { SelectListProps } from '@components/SelectItemsList/types';

import { SelectListWrapper, SelectOption } from './styled';

export default function SelectItemsList({
  options,
  handleChangeSelected,
}: SelectListProps) {
  return (
    <SelectListWrapper
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      {options.map((option) => (
        <SelectOption
          key={option.toString()}
          onClick={() => handleChangeSelected(option)}
        >
          {option.toString()}
        </SelectOption>
      ))}
    </SelectListWrapper>
  );
}
