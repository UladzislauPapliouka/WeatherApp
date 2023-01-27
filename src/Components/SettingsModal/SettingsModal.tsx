import React, { MouseEvent } from 'react';
import styles from './SettingsModal.module.scss';

type SettingModalPropsTyp = {
  isOpen:boolean,
  onClose: ()=>void
};
export default function SettingsModal({ isOpen, onClose }:SettingModalPropsTyp) {
  const onClickModalBackgroundHandler = () => {
    onClose();
  };
  const onClickModalWindow = (event:MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  const onKeyDownAny = () => {};
  return isOpen ? (
    <div tabIndex={0} role="button" onKeyDown={onKeyDownAny} onClick={onClickModalBackgroundHandler} className={styles.modalContainer}>
      <div
        tabIndex={-1}
        role="button"
        onKeyDown={onKeyDownAny}
        onClick={onClickModalWindow}
        className={styles.modalWindow}
      >
        <h3>Settings</h3>
      </div>
    </div>
  ) : (null);
}
