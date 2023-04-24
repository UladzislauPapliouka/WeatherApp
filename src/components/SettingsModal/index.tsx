import React, { useEffect } from 'react';
import CustomSelect from '@components/CustomSelect';
import LoginGoogleButton from '@components/LoginGoogleButton';
import ModalWindow from '@components/Modal';
import PlaceSearch from '@components/PlaceSearch';
import ISettingModalProps from '@components/SettingsModal/types';
import { AppActions } from '@store/Reducers/AppReducer';
import {
  APIVariants,
  WeatherRepresentVariants,
} from '@Types/storeTypes/appStateTypes';

import { useAppDispatch, useAppSelector } from '@/store';

import { SettingsModalWrapper, SubTitle, Title } from './styled';

export default function Index({ isOpen, onClose }: ISettingModalProps) {
  const preferredService = useAppSelector(
    (state) => state.AppReducer.preferredAPI,
  );
  const weatherRepresent = useAppSelector(
    (state) => state.AppReducer.weatherRepresent,
  );
  const dispatch = useAppDispatch();
  const setPreferredService = (value: string) => {
    dispatch(
      AppActions.setPreferredAPI({ preferredAPI: value as APIVariants }),
    );
  };
  const setWeatherRepresent = (value: string) => {
    dispatch(
      AppActions.setWeatherRepresent({
        weatherRepresent: value as WeatherRepresentVariants,
      }),
    );
  };
  const onClickModalBackgroundHandler = () => {
    onClose();
  };
  return isOpen ? (
    <ModalWindow handleClose={onClickModalBackgroundHandler}>
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
}
