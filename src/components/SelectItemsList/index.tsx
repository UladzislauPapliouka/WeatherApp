import React from 'react';

import { SelectListProps } from '../../types/propsTypes/selectItemsListTypes';

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
        <SelectOption key={option} onClick={() => handleChangeSelected(option)}>
          {option}
        </SelectOption>
      ))}
    </SelectListWrapper>
  );
}
