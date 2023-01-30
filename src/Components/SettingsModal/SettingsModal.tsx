import React, { MouseEvent, useState } from 'react';
import styles from './SettingsModal.module.scss';
import CustomSelect from '../CustomSelect';
import LoginGoogleButton from '../LoginGoogleButton';

type SettingModalPropsTyp = {
  isOpen:boolean,
  onClose: ()=>void
};
export default function SettingsModal({ isOpen, onClose }:SettingModalPropsTyp) {
  const [preferredService, setPreferredService] = useState<string>('OpenWeather');
  const onClickModalBackgroundHandler = () => {
    onClose();
  };
  const onClickModalWindow = (event:MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const onKeyDownAny = () => {};
  // TODO: Restyling
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
        <h4>Service</h4>
        <CustomSelect options={['OpenWeather', 'StormGlass']} selected={preferredService} onChangeSelected={setPreferredService} />
        <LoginGoogleButton />
      </div>
    </div>
  ) : (null);
}
