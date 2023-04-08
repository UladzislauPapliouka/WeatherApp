import React, { useLayoutEffect, useState } from 'react';

import { bg1, bg2 } from '../../assets/backgrounds';
import GoogleEventsContainer from '../../containers/GoogleEventsContainer';
import WeatherForecastContainer from '../../containers/WeatherForecastContainer';
import { getBackground } from '../../services';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  APIVariants,
  WeatherRepresentVariant,
} from '../../store/Reducers/AppReducer';
import { findPlaceByCoordsOpenWeatherAC } from '../../store/Sagas/OpenWeatherSaga';
import { findPlaceWeatherByCoordsAC } from '../../store/Sagas/WeatherSaga';
import { WeatherIconVariants } from '../../types/propsTypes/weatherIcon';
import DateBlock from '../DateBlock';
import { SettingIcon } from '../Icons';
import PlaceBlock from '../PlaceBlock';
import SettingsModal from '../SettingsModal';

import {
  AppBackground,
  AppWrapper,
  Container,
  Info,
  SettingButtonWrapper,
  WithGoogleEvents,
} from './styled';

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const AppState = useAppSelector((state) => state.AppReducer);
  const place = useAppSelector((state) => state.PlaceReducer);
  useLayoutEffect(() => {
    window.navigator.geolocation.getCurrentPosition((res) => {
      if (place.city) {
        if (AppState.preferredAPI === APIVariants.openWeatherAPI) {
          dispatch(
            findPlaceByCoordsOpenWeatherAC(
              place.coord.lat,
              place.coord.lon,
              AppState.weatherRepresent === WeatherRepresentVariant.hourly,
            ),
          );
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
        dispatch(
          findPlaceByCoordsOpenWeatherAC(
            res.coords.latitude,
            res.coords.longitude,
            AppState.weatherRepresent === WeatherRepresentVariant.hourly,
          ),
        );
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
  }, [
    AppState.preferredAPI,
    AppState.weatherRepresent,
    dispatch,
    place.coord.lat,
    place.coord.lon,
    place.city,
  ]);
  const currentWeather = useAppSelector(
    (state) => state.WeatherByDayReducer[0],
  );
  const [backgrounds, setBackgrounds] = useState(
    getBackground(WeatherIconVariants.Sun),
  );
  useLayoutEffect(() => {
    if (currentWeather) setBackgrounds(getBackground(currentWeather.icon));
  }, [currentWeather]);
  return (
    <AppWrapper
      style={{ backgroundImage: `url(${backgrounds ? backgrounds[1] : bg2})` }}
    >
      <AppBackground>
        <Container
          style={{
            backgroundImage: `url(${backgrounds ? backgrounds[0] : bg1})`,
          }}
        >
          <SettingButtonWrapper
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <SettingIcon color="#f1eaea" scale={1} />
          </SettingButtonWrapper>
          <WithGoogleEvents>
            <Info>
              <DateBlock />
              <PlaceBlock />
            </Info>
            <GoogleEventsContainer />
          </WithGoogleEvents>
          <WeatherForecastContainer />
          <SettingsModal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
            }}
          />
        </Container>
      </AppBackground>
    </AppWrapper>
  );
}

export default App;
