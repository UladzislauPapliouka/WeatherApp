import React, { useCallback, useLayoutEffect, useState } from 'react';
import { bg1, bg2 } from '@assets/backgrounds';
import DateBlock from '@components/DateBlock';
import { SettingIcon } from '@components/Icons';
import PlaceBlock from '@components/PlaceBlock';
import SettingsModal from '@components/SettingsModal';
import GoogleEventsContainer from '@containers/GoogleEventsContainer';
import WeatherForecastContainer from '@containers/WeatherForecastContainer';
import { useAppSelector } from '@store';
import { WeatherIconVariants } from '@typing/storeTypes/weatherStateType';

import useUserLocation from '@/hooks/locationHook';
import { getBackground } from '@/services';

import {
  AppBackground,
  AppWrapper,
  Container,
  Info,
  SettingButtonWrapper,
  WithGoogleEvents,
} from './styled';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useUserLocation();

  const currentWeather = useAppSelector((state) => state.weatherInfo[0]);

  const [backgrounds, setBackgrounds] = useState(
    getBackground(WeatherIconVariants.Sun),
  );

  useLayoutEffect(() => {
    if (currentWeather) setBackgrounds(getBackground(currentWeather.icon));
  }, [currentWeather]);
  const handleToggleModalWindow = useCallback(
    () => setIsModalOpen(!isModalOpen),
    [isModalOpen],
  );

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
            data-cy="settingsButton"
            onClick={handleToggleModalWindow}
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
            onClose={handleToggleModalWindow}
          />
        </Container>
      </AppBackground>
    </AppWrapper>
  );
};

export default App;
