import React from 'react';
import { ISelectListProps } from '@components/SelectItemsList/types';

import { SelectListWrapper, SelectOption } from './styled';

function SelectItemsList<T>({
  options,
  handleChangeSelected,
}: ISelectListProps<T>) {
  const handleWrapperClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <SelectListWrapper onClick={handleWrapperClick}>
      {options.map((option) => {
        const handleSelect = () =>
          ((option: T) => handleChangeSelected(option))(option);
        return (
          <SelectOption key={option?.toString()} onClick={handleSelect}>
            {option?.toString()}
          </SelectOption>
        );
      })}
    </SelectListWrapper>
  );
}
export default React.memo(SelectItemsList) as typeof SelectItemsList;
