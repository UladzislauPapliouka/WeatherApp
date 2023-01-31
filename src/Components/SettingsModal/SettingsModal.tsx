import React, { MouseEvent, useState } from 'react';
import styles from './SettingsModal.module.scss';
import CustomSelect from '../CustomSelect';
import LoginGoogleButton from '../LoginGoogleButton';
import PlaceSearch from '../PlaceSearch';

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
    <div tabIndex={0} role="button" onKeyDown={onKeyDownAny} onMouseDown={onClickModalBackgroundHandler} className={styles.modalContainer}>
      <div
        tabIndex={-1}
        role="button"
        onKeyDown={onKeyDownAny}
        onClick={onClickModalWindow}
        onMouseDown={onClickModalWindow}
        className={styles.modalWindow}
      >
        <h3>Settings</h3>
        <h4>Service</h4>
        <CustomSelect options={['OpenWeather', 'StormGlass']} selected={preferredService} onChangeSelected={setPreferredService} />
        <LoginGoogleButton />
        <PlaceSearch />
      </div>
    </div>
  ) : (null);
}
