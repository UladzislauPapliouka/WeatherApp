import React, { useLayoutEffect, useState } from 'react';
import styles from './App.module.scss';
import WeatherForecastContainer from './Containers/WeatherForecastContainer';
import DateBlock from './Components/DateBlock';
import PlaceBlock from './Components/PlaceBlock';
import GoogleEventsContainer from './Containers/GoogleEventsContainer';
import { SettingIcon } from './Components/Icons';
import SettingsModal from './Components/SettingsModal';
import { useAppDispatch, useAppSelector } from './Store';
import { getBackground } from './Services';
import { bg1, bg2 } from './assets/backgrounds';
import { WeatherIconVariants } from './Components/WeatherIcon';
import { APIVariants, WeatherRepresentVariant } from './Store/Reducers/AppReducer';
import { findPlaceWeatherByCoordsAC, findPlaceWeatherByNameAC } from './Store/Sagas/WeatherSaga';
import { findPlaceByCoordsOpenWeatherAC, findPlaceByNameOpenWeatherAC } from './Store/Sagas/OpenWeatherSaga';

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const AppState = useAppSelector((state) => state.AppReducer);
  const place = useAppSelector((state) => state.PlaceReducer);
  useLayoutEffect(() => {
    window.navigator.geolocation.getCurrentPosition((res) => {
      if (place.city) {
        if (AppState.preferredAPI === APIVariants.openWeatherAPI) {
          dispatch(findPlaceByNameOpenWeatherAC(
            place.city,
            AppState.weatherRepresent === WeatherRepresentVariant.hourly,
          ));
        } else {
          dispatch(
            findPlaceWeatherByNameAC(
              place.city,
              AppState.weatherRepresent === WeatherRepresentVariant.hourly,
            ),
          );
        }
      } else if (AppState.preferredAPI === APIVariants.openWeatherAPI) {
        dispatch(findPlaceByCoordsOpenWeatherAC(
          res.coords.latitude,
          res.coords.longitude,
          AppState.weatherRepresent === WeatherRepresentVariant.hourly,
        ));
      } else {
        dispatch(
          findPlaceWeatherByCoordsAC(
            res.coords.latitude,
            res.coords.longitude,
            AppState.weatherRepresent === WeatherRepresentVariant.hourly,
          ),
        );
      }
    });
  }, []);
  const currentWeather = useAppSelector((state) => state.WeatherByDayReducer[0]);
  const [backgrounds, setBackgrounds] = useState(getBackground(WeatherIconVariants.Sun));
  useLayoutEffect(() => {
    if (currentWeather) setBackgrounds(getBackground(currentWeather.icon));
  }, [currentWeather]);
  return (
    <div style={{ backgroundImage: `url(${backgrounds ? backgrounds[1] : bg2})` }} className={styles.App}>

      <div className={styles.AppBackground}>
        <div style={{ backgroundImage: `url(${backgrounds ? backgrounds[0] : bg1})` }} className={styles.container}>
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
