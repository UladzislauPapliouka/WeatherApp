import React, { MouseEvent, useEffect } from 'react';
import styles from './SettingsModal.module.scss';
import CustomSelect from '../CustomSelect';
import LoginGoogleButton from '../LoginGoogleButton';
import PlaceSearch from '../PlaceSearch';
import { APIVariants, AppActions, WeatherRepresentVariant } from '../../Store/Reducers/AppReducer';
import { useAppDispatch, useAppSelector } from '../../Store';
import { fetchDailyOpenWeatherAC, fetchHourlyOpenWeatherAC } from '../../Store/Sagas/OpenWeatherSaga';
import { fetchWeatherAPIHourlyAC, fetchWeatherAPIDailyAC } from '../../Store/Sagas/WeatherSaga';

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
        <CustomSelect
          options={[APIVariants.weatherAPI, APIVariants.openWeatherAPI]}
          selected={preferredService}
          onChangeSelected={setPreferredService}
        />
        <CustomSelect
          options={[WeatherRepresentVariant.daily, WeatherRepresentVariant.hourly]}
          selected={weatherRepresent}
          onChangeSelected={setWeatherRepresent}
        />
        <LoginGoogleButton />
        <PlaceSearch />
      </div>
    </div>
  ) : (null);
}
