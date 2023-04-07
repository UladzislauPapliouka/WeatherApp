import React, { useState } from 'react';

import styles from './CustomSelect.module.scss';

interface ICustomSelect {
  options: string[];
  selected: string;
  onChangeSelected: (value: any) => void;
}

export default function CustomSelect({
  options,
  selected,
  onChangeSelected,
}: ICustomSelect) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const toggleSelect = () => setIsActive(!isActive);
  const onChangeSelectedHandler = (value: string) => {
    toggleSelect();
    onChangeSelected(value);
  };
  const onKeyDownHandler = () => {
    setIsActive(isActive);
  };
  return (
    <div
      tabIndex={0}
      onKeyDown={onKeyDownHandler}
      role="button"
      className={styles.customSelect}
      onClick={toggleSelect}
    >
      <div>
        <span>{selected}</span>
        <div className={`${styles.arrow} ${isActive && styles.activeArrow}`} />
      </div>
      {isActive && (
        <div
          tabIndex={-1}
          onKeyDown={onKeyDownHandler}
          role="button"
          onClick={(event) => {
            event.stopPropagation();
          }}
          className={styles.dropdownMenu}
        >
          {options.map((opt, i) => (
            <span
              tabIndex={-i - 2}
              onKeyDown={(e) => e.key}
              role="button"
              key={opt}
              onClick={() => onChangeSelectedHandler(opt)}
            >
              {opt}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
