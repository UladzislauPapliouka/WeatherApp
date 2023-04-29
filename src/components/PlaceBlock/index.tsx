import React from 'react';
import { useSelector } from 'react-redux';

import { RootAppType } from '@/store';

import { CityName, CountryName, PlaceBlockWrapper } from './styled';

export default function PlaceBlock() {
  const { city, country } = useSelector(
    (state: RootAppType) => state.placeInfo,
  );

  return (
    <PlaceBlockWrapper>
      <CityName>{city}</CityName>
      <CountryName>{country}</CountryName>
    </PlaceBlockWrapper>
  );
}
