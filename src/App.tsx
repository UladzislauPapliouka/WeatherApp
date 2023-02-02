import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import WeatherForecastContainer from './Containers/WeatherForecastContainer';
import DateBlock from './Components/DateBlock';
import PlaceBlock from './Components/PlaceBlock';
import GoogleEventsContainer from './Containers/GoogleEventsContainer';
import { SettingIcon } from './Components/Icons';
import SettingsModal from './Components/SettingsModal';
import { useAppDispatch, useAppSelector } from './Store/Store';
import { findPlaceWeatherByCoordsAC } from './Store/Sagas/WeatherSaga';
import { getBackground } from './Services/services';

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((res) => {
      // dispatch(findPlaceByCoordsOpenWeatherAC(res.coords.latitude, res.coords.longitude, true));
      dispatch(findPlaceWeatherByCoordsAC(res.coords.latitude, res.coords.longitude));
    });
  }, []);
  const currentWeather = useAppSelector((state) => state.WeatherByDayReducer[0]);
  const [backgrounds, setBackgrounds] = useState(getBackground(currentWeather.icon));
  useEffect(() => {
    setBackgrounds(getBackground(currentWeather.icon));
  }, [currentWeather]);
  return (
    <div style={{ backgroundImage: `url(${backgrounds[1]})` }} className={styles.App}>

      <div className={styles.AppBackground}>
        <div style={{ backgroundImage: `url(${backgrounds[0]})` }} className={styles.container}>
          <div
            tabIndex={-1}
            onKeyDown={() => {
            }}
            onClick={() => {
              setIsModalOpen(true);
            }}
            role="button"
            className={styles.settingButton}
          >
            <SettingIcon color="#f1eaea" scale={1} />
          </div>
          <div className={styles.withGoogleEvents}>
            <div className={styles.info}>
              <DateBlock />
              <PlaceBlock />
            </div>
            <GoogleEventsContainer />
          </div>
          <WeatherForecastContainer />
          <SettingsModal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
