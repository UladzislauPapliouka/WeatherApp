import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store';
import { findPlaceByCoordsOpenWeatherAC } from '@store/sagas/openWeatherSaga';
import { findPlaceWeatherByCoordsAC } from '@store/sagas/weatherSaga';
import { APIVariants, WeatherRepresentVariants } from '@Types/storeTypes';

const useUserLocation = () => {
  const dispatch = useAppDispatch();
  const { weatherRepresent, preferredAPI } = useAppSelector(
    (state) => state.appState,
  );
  const {
    coordinates: { longitude, latitude },
    city,
  } = useAppSelector((state) => state.placeInfo);
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      if (city) {
        if (preferredAPI === APIVariants.openWeatherAPI) {
          dispatch(
            findPlaceByCoordsOpenWeatherAC(
              latitude,
              longitude,
              weatherRepresent === WeatherRepresentVariants.hourly,
            ),
          );
        } else {
          dispatch(
            findPlaceWeatherByCoordsAC(
              latitude,
              longitude,
              weatherRepresent === WeatherRepresentVariants.hourly,
            ),
          );
        }
      } else if (preferredAPI === APIVariants.openWeatherAPI) {
        dispatch(
          findPlaceByCoordsOpenWeatherAC(
            coords.latitude,
            coords.longitude,
            weatherRepresent === WeatherRepresentVariants.hourly,
          ),
        );
      } else {
        dispatch(
          findPlaceWeatherByCoordsAC(
            coords.latitude,
            coords.longitude,
            weatherRepresent === WeatherRepresentVariants.hourly,
          ),
        );
      }
    });
  }, [preferredAPI, weatherRepresent, dispatch, latitude, longitude, city]);
};
export default useUserLocation;
