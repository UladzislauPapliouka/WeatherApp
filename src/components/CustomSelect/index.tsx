import React, { useLayoutEffect, useRef, useState } from 'react';
import { ICustomSelect } from '@components/CustomSelect/types';
import { CheckIcon } from '@components/Icons/Icons';
import { NormalizedPlaceDataType } from '@Types/storeTypes/placeStateType';

import SelectItemsList from '../SelectItemsList';

import {
  CustomSelectWrapper,
  SelectArrow,
  SelectedVariantText,
  SelectedVariantWrapper,
} from './styled';

function CustomSelect({ options, selected, onChangeSelected }: ICustomSelect) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const toggleSelect = () => setIsActive(!isActive);
  const selectRef = useRef(null);
  const handleChangeSelected = (value: string | NormalizedPlaceDataType) => {
    toggleSelect();
    if (typeof value === 'string') {
      onChangeSelected(value);
    }
  };
  useLayoutEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target !== selectRef.current) {
        setIsActive(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [selectRef]);
  return (
    <CustomSelectWrapper ref={selectRef} onClick={toggleSelect}>
      <SelectedVariantWrapper>
        <SelectedVariantText>{selected}</SelectedVariantText>
        <SelectArrow isActive={isActive}>
          <CheckIcon />
        </SelectArrow>
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
