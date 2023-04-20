import { useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store';
import { findPlaceByCoordsOpenWeatherAC } from '@store/Sagas/OpenWeatherSaga';
import { findPlaceWeatherByCoordsAC } from '@store/Sagas/WeatherSaga';
import { APIVariants, WeatherRepresentVariants } from '@Types/storeTypes';

const useUserLocation = () => {
  const dispatch = useAppDispatch();
  const AppState = useAppSelector((state) => state.AppReducer);
  const place = useAppSelector((state) => state.PlaceReducer);
  useLayoutEffect(() => {
    window.navigator.geolocation.getCurrentPosition((res) => {
      if (place.city) {
        if (AppState.preferredAPI === APIVariants.openWeatherAPI) {
          dispatch(
            findPlaceByCoordsOpenWeatherAC(
              place.coordinates.latitude,
              place.coordinates.longitude,
              AppState.weatherRepresent === WeatherRepresentVariants.hourly,
            ),
          );
        } else {
          dispatch(
            findPlaceWeatherByCoordsAC(
              place.coordinates.latitude,
              place.coordinates.longitude,
              AppState.weatherRepresent === WeatherRepresentVariants.hourly,
            ),
          );
        }
      } else if (AppState.preferredAPI === APIVariants.openWeatherAPI) {
        dispatch(
          findPlaceByCoordsOpenWeatherAC(
            res.coords.latitude,
            res.coords.longitude,
            AppState.weatherRepresent === WeatherRepresentVariants.hourly,
          ),
        );
      } else {
        dispatch(
          findPlaceWeatherByCoordsAC(
            res.coords.latitude,
            res.coords.longitude,
            AppState.weatherRepresent === WeatherRepresentVariants.hourly,
          ),
        );
      }
    });
  }, [
    AppState.preferredAPI,
    AppState.weatherRepresent,
    dispatch,
    place.coordinates.latitude,
    place.coordinates.longitude,
    place.city,
  ]);
};
export default useUserLocation;
