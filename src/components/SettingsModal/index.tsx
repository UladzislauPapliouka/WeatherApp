import React, { useCallback } from 'react';
import CustomSelect from '@components/CustomSelect';
import LoginGoogleButton from '@components/LoginGoogleButton';
import ModalWindow from '@components/Modal';
import PlaceSearch from '@components/PlaceSearch';
import ISettingModalProps from '@components/SettingsModal/types';
import { AppActions } from '@store/reducers/appReducer';
import {
  APIVariants,
  WeatherRepresentVariants,
} from '@Types/storeTypes/appStateTypes';

import { useAppDispatch, useAppSelector } from '@/store';

import { SettingsModalWrapper, SubTitle, Title } from './styled';

const SettingsModal = React.memo(({ isOpen, onClose }: ISettingModalProps) => {
  const preferredService = useAppSelector(
    (state) => state.appState.preferredAPI,
  );
  const weatherRepresent = useAppSelector(
    (state) => state.appState.weatherRepresent,
  );
  const dispatch = useAppDispatch();
  const setPreferredService = useCallback(
    (value: string) => {
      dispatch(
        AppActions.setPreferredAPI({ preferredAPI: value as APIVariants }),
      );
    },
    [dispatch],
  );
  const setWeatherRepresent = useCallback(
    (value: string) => {
      dispatch(
        AppActions.setWeatherRepresent({
          weatherRepresent: value as WeatherRepresentVariants,
        }),
      );
    },
    [dispatch],
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
          preferredAPI={preferredService}
        />
        <SubTitle>Service</SubTitle>
        <CustomSelect
          options={[APIVariants.weatherAPI, APIVariants.openWeatherAPI]}
          selected={preferredService}
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
