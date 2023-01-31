import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import WeatherForecastContainer from './Containers/WeatherForecastContainer';
import DateBlock from './Components/DateBlock';
import PlaceBlock from './Components/PlaceBlock';
import GoogleEventsContainer from './Containers/GoogleEventsContainer';
import bg1 from './assets/backgrounds/bg1.jpg';
import bg2 from './assets/backgrounds/bg2.jpg';
import { SettingIcon } from './Components/Icons';
import SettingsModal from './Components/SettingsModal';
import { useAppDispatch } from './Store/Store';
import { findPlaceByCoordsOpenWeatherAC } from './Store/Sagas/OpenWeatherSaga';

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((res) => {
      dispatch(findPlaceByCoordsOpenWeatherAC(res.coords.latitude, res.coords.longitude, true));
    });
  }, []);
  return (
    <div style={{ backgroundImage: `url(${bg1})` }} className={styles.App}>

      <div className={styles.AppBackground}>
        <div style={{ backgroundImage: `url(${bg2})` }} className={styles.container}>
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
