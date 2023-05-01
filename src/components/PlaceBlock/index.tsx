import React from 'react';
import { useSelector } from 'react-redux';

import { RootAppType } from '@/store';
import { getPlace } from '@store/selectors/selector';

import { CityName, CountryName, PlaceBlockWrapper } from './styled';

const PlaceBlock = () => {
  const { city, country } = useSelector(getPlace);

  return (
    <PlaceBlockWrapper>
      <CityName>{city}</CityName>
      <CountryName>{country}</CountryName>
    </PlaceBlockWrapper>
  );
};

export default PlaceBlock;
