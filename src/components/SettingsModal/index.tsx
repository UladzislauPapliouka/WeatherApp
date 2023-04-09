import React, { useEffect } from 'react';
import CustomSelect from '@components/CustomSelect';
import LoginGoogleButton from '@components/LoginGoogleButton';
import ModalWindow from '@components/Modal';
import PlaceSearch from '@components/PlaceSearch';
import {
  APIVariants,
  AppActions,
  WeatherRepresentVariant,
} from '@store/Reducers/AppReducer';
import {
  fetchDailyOpenWeatherAC,
  fetchHourlyOpenWeatherAC,
} from '@store/Sagas/OpenWeatherSaga';
import {
  fetchWeatherAPIDailyAC,
  fetchWeatherAPIHourlyAC,
} from '@store/Sagas/WeatherSaga';

import { useAppDispatch, useAppSelector } from '@/store';

import { SettingsModalWrapper, SubTitle, Title } from './styled';

type SettingModalPropsTyp = {
  isOpen: boolean;
  onClose: () => void;
};
export default function Index({ isOpen, onClose }: SettingModalPropsTyp) {
  const preferredService = useAppSelector(
    (state) => state.AppReducer.preferredAPI,
  );
  const weatherRepresent = useAppSelector(
    (state) => state.AppReducer.weatherRepresent,
  );
  const dispatch = useAppDispatch();
  const setPreferredService = (value: APIVariants) => {
    dispatch(AppActions.setPreferredAPI({ preferredAPI: value }));
  };
  const setWeatherRepresent = (value: WeatherRepresentVariant) => {
    dispatch(AppActions.setWeatherRepresent({ weatherRepresent: value }));
  };
  useEffect(() => {
    dispatch(
      preferredService === APIVariants.openWeatherAPI
        ? dispatch(
            weatherRepresent === WeatherRepresentVariant.daily
              ? fetchDailyOpenWeatherAC()
              : fetchHourlyOpenWeatherAC(),
          )
        : dispatch(
            weatherRepresent === WeatherRepresentVariant.daily
              ? fetchWeatherAPIDailyAC()
              : fetchWeatherAPIHourlyAC(),
          ),
    );
  }, [dispatch, preferredService, weatherRepresent]);
  const onClickModalBackgroundHandler = () => {
    onClose();
  };
  return isOpen ? (
    <ModalWindow handleClose={onClickModalBackgroundHandler}>
      <SettingsModalWrapper>
        <Title>Settings</Title>
        <SubTitle>Find place</SubTitle>
        <PlaceSearch
          hourly={weatherRepresent === WeatherRepresentVariant.hourly}
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
            WeatherRepresentVariant.daily,
            WeatherRepresentVariant.hourly,
          ]}
          selected={weatherRepresent}
          onChangeSelected={setWeatherRepresent}
        />
        <LoginGoogleButton />
      </SettingsModalWrapper>
    </ModalWindow>
  ) : null;
}
