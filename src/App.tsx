import React, { useState } from 'react';
import styles from './App.module.scss';
import WeatherForecastContainer from './Containers/WeatherForecastContainer';
import DateBlock from './Components/DateBlock';
import PlaceBlock from './Components/PlaceBlock';
import GoogleEventsContainer from './Containers/GoogleEventsContainer';
import bg1 from './assets/backgrounds/bg1.jpg';
import bg2 from './assets/backgrounds/bg2.jpg';
import { SettingIcon } from './Components/Icons';
import SettingsModal from './Components/SettingsModal';
import { action } from './Store/Store';

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
            <button type="button" onClick={() => action('FETCH_OPEN_BY_HOURS')}>Fetch</button>
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
