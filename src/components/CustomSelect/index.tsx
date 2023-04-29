import React, { useLayoutEffect, useRef, useState } from 'react';
import { CheckIcon } from '@components/Icons';
import SelectItemsList from '@components/SelectItemsList';

import {
  CustomSelectWrapper,
  SelectArrow,
  SelectedVariantText,
  SelectedVariantWrapper,
} from './styled';
import { ICustomSelectProps } from './types';

function CustomSelect<T>({
  options,
  selected,
  onChangeSelected,
}: ICustomSelectProps<T>) {
  const [isActive, setIsActive] = useState(false);
  const toggleSelect = () => setIsActive(!isActive);
  const selectRef = useRef(null);
  const handleChangeSelected = (value: T) => {
    toggleSelect();
    onChangeSelected(value);
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
    <CustomSelectWrapper
      data-cy="select"
      ref={selectRef}
      onClick={toggleSelect}
    >
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

export default React.memo(CustomSelect) as typeof CustomSelect;
