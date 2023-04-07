import React, { useState } from 'react';

import SelectItemsList from '../SelectItemsList';

import {
  CustomSelectWrapper,
  SelectArrow,
  SelectedVariantText,
  SelectedVariantWrapper,
} from './styled';

interface ICustomSelect {
  options: string[];
  selected: string;
  onChangeSelected: (value: any) => void;
}
function CustomSelect({ options, selected, onChangeSelected }: ICustomSelect) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const toggleSelect = () => setIsActive(!isActive);
  const handleChangeSelected = (value: string) => {
    toggleSelect();
    onChangeSelected(value);
  };
  return (
    <CustomSelectWrapper onClick={toggleSelect}>
      <SelectedVariantWrapper>
        <SelectedVariantText>{selected}</SelectedVariantText>
        <SelectArrow isActive={isActive} />
      </SelectedVariantWrapper>
      {isActive && (
        <SelectItemsList
          options={options}
          handleChangeSelected={handleChangeSelected}
        />
      )}
    </CustomSelectWrapper>
  );
}

export default CustomSelect;
