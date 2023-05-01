import React from 'react';
import { v1 } from 'uuid';

import { SelectListWrapper, SelectOption } from './styled';
import { ISelectListProps } from './types';

const SelectItemsList = <T extends { toString: () => string }>({
  options,
  handleChangeSelected,
}: ISelectListProps<T>) => {
  const handleWrapperClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <SelectListWrapper onClick={handleWrapperClick}>
      {options.map((option) => {
        const handleSelect = () =>
          ((option: T) => handleChangeSelected(option))(option);

        return (
          <SelectOption key={v1()} onClick={handleSelect}>
            {option.toString()}
          </SelectOption>
        );
      })}
    </SelectListWrapper>
  );
};

export default React.memo(SelectItemsList) as typeof SelectItemsList;
