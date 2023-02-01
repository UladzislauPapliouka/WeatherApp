import React, { MouseEvent, useEffect } from 'react';
import styles from './SettingsModal.module.scss';
import CustomSelect from '../CustomSelect';
import LoginGoogleButton from '../LoginGoogleButton';
import PlaceSearch from '../PlaceSearch';
import { APIVariants, AppActions, WeatherRepresentVariant } from '../../Store/Reducers/AppReducer';
import { useAppDispatch, useAppSelector } from '../../Store';
import { fetchDailyOpenWeatherAC, fetchHourlyOpenWeatherAC } from '../../Store/Sagas/OpenWeatherSaga';
import { fetchWeatherAPIDailyAC, fetchWeatherAPIHourlyAC } from '../../Store/Sagas/WeatherSaga';

type SettingModalPropsTyp = {
  isOpen:boolean,
  onClose: ()=>void
};
export default function SettingsModal({ isOpen, onClose }:SettingModalPropsTyp) {
  const preferredService = useAppSelector((state) => state.AppReducer.preferredAPI);
  const weatherRepresent = useAppSelector((state) => state.AppReducer.weatherRepresent);
  const dispatch = useAppDispatch();
  const setPreferredService = (value:APIVariants) => {
    dispatch(AppActions.setPreferredAPI({ preferredAPI: value }));
  };
  const setWeatherRepresent = (value:WeatherRepresentVariant) => {
    dispatch(AppActions.setWeatherRepresent({ weatherRepresent: value }));
  };
  useEffect(() => {
    dispatch(preferredService === APIVariants.openWeatherAPI
      ? dispatch(weatherRepresent === WeatherRepresentVariant.daily
        ? fetchDailyOpenWeatherAC()
        : fetchHourlyOpenWeatherAC())
      : dispatch(weatherRepresent === WeatherRepresentVariant.daily
        ? fetchWeatherAPIDailyAC()
        : fetchWeatherAPIHourlyAC()));
  }, [dispatch, preferredService, weatherRepresent]);
  const onClickModalBackgroundHandler = () => {
    onClose();
  };
  const onClickModalWindow = (event:MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const onKeyDownAny = () => {};
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
        <h2>Settings</h2>
        <h4>Find place</h4>
        <PlaceSearch
          hourly={weatherRepresent === WeatherRepresentVariant.hourly}
          preferredAPI={preferredService}
        />
        <h4>Service</h4>
        <CustomSelect
          options={[APIVariants.weatherAPI, APIVariants.openWeatherAPI]}
          selected={preferredService}
          onChangeSelected={setPreferredService}
        />
        <h4>How to represent weather</h4>
        <CustomSelect
          options={[WeatherRepresentVariant.daily, WeatherRepresentVariant.hourly]}
          selected={weatherRepresent}
          onChangeSelected={setWeatherRepresent}
        />
        <LoginGoogleButton />

      </div>
    </div>
  ) : (null);
}
