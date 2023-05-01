import React, { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/store';
import CustomSelect from '@components/CustomSelect';
import LoginGoogleButton from '@components/LoginGoogleButton';
import ModalWindow from '@components/Modal';
import PlaceSearch from '@components/PlaceSearch';
import { AppActions } from '@store/reducers/appReducer';
import {
  APIVariants,
  WeatherRepresentVariants,
} from '@typing/storeTypes/appStateTypes';

import { SettingsModalWrapper, SubTitle, Title } from './styled';
import ISettingModalProps from './types';

const SettingsModal = React.memo(({ isOpen, onClose }: ISettingModalProps) => {
  const { preferredAPI, weatherRepresent } = useAppSelector(
    (state) => state.appState,
  );

  const dispatch = useAppDispatch();

  const setPreferredService = useCallback(
    (value: string) => {
      onClose();
      dispatch(
        AppActions.setPreferredAPI({ preferredAPI: value as APIVariants }),
      );
    },
    [onClose],
  );

  const setWeatherRepresent = useCallback(
    (value: string) => {
      onClose();
      dispatch(
        AppActions.setWeatherRepresent({
          weatherRepresent: value as WeatherRepresentVariants,
        }),
      );
    },
    [onClose],
  );

  const handleBackgroundClick = () => {
    onClose();
  };

  return isOpen ? (
    <ModalWindow handleClose={handleBackgroundClick}>
      <SettingsModalWrapper>
        <Title>Settings</Title>
        <SubTitle>Find place</SubTitle>
        <PlaceSearch
          hourly={weatherRepresent === WeatherRepresentVariants.hourly}
          preferredAPI={preferredAPI}
          chooseCallback={onClose}
        />
        <SubTitle>Service</SubTitle>
        <CustomSelect
          options={[APIVariants.weatherAPI, APIVariants.openWeatherAPI]}
          selected={preferredAPI}
          onChangeSelected={setPreferredService}
        />
        <SubTitle>How to represent weather</SubTitle>
        <CustomSelect
          options={[
            WeatherRepresentVariants.daily,
            WeatherRepresentVariants.hourly,
          ]}
          selected={weatherRepresent}
          onChangeSelected={setWeatherRepresent}
        />
        <LoginGoogleButton />
      </SettingsModalWrapper>
    </ModalWindow>
  ) : null;
});

SettingsModal.displayName = 'SettingModal';
export default SettingsModal;
