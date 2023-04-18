import React, { useLayoutEffect, useState } from 'react';
import { bg1, bg2 } from '@assets/backgrounds';
import DateBlock from '@components/DateBlock';
import { SettingIcon } from '@components/Icons';
import PlaceBlock from '@components/PlaceBlock';
import SettingsModal from '@components/SettingsModal';
import GoogleEventsContainer from '@containers/GoogleEventsContainer';
import WeatherForecastContainer from '@containers/WeatherForecastContainer';
import { findPlaceByCoordsOpenWeatherAC } from '@store/Sagas/OpenWeatherSaga';
import { findPlaceWeatherByCoordsAC } from '@store/Sagas/WeatherSaga';
import { WeatherIconVariants } from '@Types/propsTypes/weatherIcon';
import {
  APIVariants,
  WeatherRepresentVariant,
} from '@Types/storeTypes/appStateTypes';

import useUserLocation from '@/hooks/locationHook';
import { getBackground } from '@/services';
import { useAppDispatch, useAppSelector } from '@/store';

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
  useUserLocation();
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
