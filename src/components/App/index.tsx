import React, { useCallback, useLayoutEffect, useState } from 'react';

import useUserLocation from '@/hooks/locationHook';
import { getBackground } from '@/services';
import { SettingIcon } from '@assets/icons';
import DateBlock from '@components/DateBlock';
import Layout from '@components/Layout';
import PlaceBlock from '@components/PlaceBlock';
import SettingsModal from '@components/SettingsModal';
import GoogleEventsContainer from '@containers/GoogleEventsContainer';
import WeatherForecastContainer from '@containers/WeatherForecastContainer';
import { useAppSelector } from '@store';
import { getCurrentWeather } from '@store/selectors/selector';
import { WeatherIconVariants } from '@typing/storeTypes/weatherStateType';

import { Info, SettingButtonWrapper, WithGoogleEvents } from './styled';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useUserLocation();

  const currentWeather = useAppSelector(getCurrentWeather);

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
    <Layout backgrounds={backgrounds}>
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
      <SettingsModal isOpen={isModalOpen} onClose={handleToggleModalWindow} />
    </Layout>
  );
};

export default App;
