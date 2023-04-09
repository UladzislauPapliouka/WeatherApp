import React from 'react';
import { useSelector } from 'react-redux';

import { RootAppType } from '@/store';

import { CityName, CountryName, PlaceBlockWrapper } from './styled';

export default function PlaceBlock() {
  const place = useSelector((state: RootAppType) => state.PlaceReducer);
  return (
    <PlaceBlockWrapper>
      <CityName>{place.city}</CityName>
      <CountryName>{place.country}</CountryName>
    </PlaceBlockWrapper>
  );
}
