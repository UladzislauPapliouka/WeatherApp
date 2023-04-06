import React, { useLayoutEffect, useState } from 'react';
import styles from './App.module.scss';
import WeatherForecastContainer from './containers/WeatherForecastContainer';
import DateBlock from './components/DateBlock';
import PlaceBlock from './components/PlaceBlock';
import GoogleEventsContainer from './containers/GoogleEventsContainer';
import { SettingIcon } from './components/Icons';
import SettingsModal from './components/SettingsModal';
import { useAppDispatch, useAppSelector } from './store';
import { getBackground } from './services';
import { bg1, bg2 } from './assets/backgrounds';
import { WeatherIconVariants } from './components/WeatherIcon';
import { APIVariants, WeatherRepresentVariant } from './store/Reducers/AppReducer';
import { findPlaceWeatherByCoordsAC } from './store/Sagas/WeatherSaga';
import { findPlaceByCoordsOpenWeatherAC } from './store/Sagas/OpenWeatherSaga';

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const AppState = useAppSelector((state) => state.AppReducer);
  const place = useAppSelector((state) => state.PlaceReducer);
  useLayoutEffect(() => {
    window.navigator.geolocation.getCurrentPosition((res) => {
      if (place.city) {
        if (AppState.preferredAPI === APIVariants.openWeatherAPI) {
          dispatch(findPlaceByCoordsOpenWeatherAC(
            place.coord.lat,
            place.coord.lon,
            AppState.weatherRepresent === WeatherRepresentVariant.hourly,
          ));
        } else {
          dispatch(
            findPlaceWeatherByCoordsAC(
              place.coord.lat,
              place.coord.lon,
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
