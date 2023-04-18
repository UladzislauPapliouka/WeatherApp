import { useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store';
import { findPlaceByCoordsOpenWeatherAC } from '@store/Sagas/OpenWeatherSaga';
import { findPlaceWeatherByCoordsAC } from '@store/Sagas/WeatherSaga';
import { APIVariants, WeatherRepresentVariant } from '@Types/storeTypes';

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
};
export default useUserLocation;
