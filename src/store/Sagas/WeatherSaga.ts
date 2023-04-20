import {
  normalizeOpenMeteoDaily,
  normalizeOpenMeteoHourly,
} from '@services/services';
import { AutocompleteActions } from '@store/Reducers/SearchAutocompleteReducer';
import {
  OpenMeteoDailyResponse,
  OpenMeteoHourlyResponse,
} from '@Types/apiTypes';
import { OpenMeteoGeocodeResponse } from '@Types/apiTypes/openMeteoAPIType';
import { AxiosResponse } from 'axios';
import { call, delay, put, select, takeLatest } from 'redux-saga/effects';

import { openMeteoAPI, weatherAPI } from '@/api';
import { WeatherPlaceResponseType } from '@/types/apiTypes/weatherAPITypes';

import {
  AppActions,
  PlaceActions,
  PlaceReducer,
  WeatherActions,
} from '../Reducers';

const fetchWeatherAPIDailyAC = () => ({
  type: 'FETCH_WEATHER_DAILY',
});
const fetchWeatherAPIHourlyAC = () => ({
  type: 'FETCH_WEATHER_HOURLY',
});
const findPlaceWeatherByCoordsAC = (
  lat: number,
  lon: number,
  hourly = false,
) => ({
  type: 'FIND_PLACE_BY_COORDS_WEATHER',
  payload: {
    lat,
    lon,
    hourly,
  },
});
const findPlaceWeatherByNameAC = (name: string, hourly = false) => ({
  type: 'FIND_PLACE_BY_NAME_WEATHER',
  payload: {
    name,
    hourly,
  },
});
const getAutocompleteWeatherAC = (name: string) => ({
  type: 'TAKE_AUTO_COMPLETE_WEATHER',
  payload: {
    name,
  },
});

export function* fetchWeatherAPIDaily() {
  try {
    const location: ReturnType<typeof PlaceReducer> = yield select(
      (state) => state.PlaceReducer,
    );
    yield put(AppActions.startWeatherFetching());
    const response: OpenMeteoDailyResponse = yield call(
      openMeteoAPI.fetchDailyWeather,
      location.coordinates.latitude,
      location.coordinates.longitude,
    );
    yield put(AppActions.finishWeatherFetching());
    yield put(WeatherActions.setInfo(normalizeOpenMeteoDaily(response)));
  } catch (e) {
    yield put(AppActions.finishWeatherFetching());
  }
}
function* fetchWeatherAPIHourly() {
  try {
    const location: ReturnType<typeof PlaceReducer> = yield select(
      (state) => state.PlaceReducer,
    );
    yield put(AppActions.startWeatherFetching());
    const response: OpenMeteoHourlyResponse = yield call(
      openMeteoAPI.fetchHourlyWeather,
      location.coordinates.latitude,
      location.coordinates.longitude,
    );
    yield put(AppActions.finishWeatherFetching());
    yield put(WeatherActions.setInfo(normalizeOpenMeteoHourly(response)));
  } catch (e) {
    yield put(AppActions.finishWeatherFetching());
  }
}

function* findPlaceWeatherByCoords(
  action: ReturnType<typeof findPlaceWeatherByCoordsAC>,
) {
  try {
    const response: AxiosResponse<WeatherPlaceResponseType> = yield call(
      weatherAPI.getFindPlaceByCoords,
      action.payload.lat,
      action.payload.lon,
    );
    const place = response.data[0];
    yield put(
      PlaceActions.setPlace({
        city: place.name,
        country: place.country,
        coordinates: {
          latitude: place.lat,
          longitude: place.lon,
        },
      }),
    );
    if (place) {
      if (action.payload.hourly) {
        yield put(fetchWeatherAPIHourlyAC());
      } else {
        yield put(fetchWeatherAPIDailyAC());
      }
    }
  } catch (e) {
    put(WeatherActions.error());
  }
}

function* findPlaceWeatherByName(
  action: ReturnType<typeof findPlaceWeatherByNameAC>,
) {
  try {
    const response: OpenMeteoGeocodeResponse = yield call(
      openMeteoAPI.fetchPlacesByName,
      action.payload.name,
    );
    const place = response.results[0];
    yield put(
      PlaceActions.setPlace({
        city: place.name,
        country: place.country,
        coordinates: {
          latitude: place.latitude,
          longitude: place.longitude,
        },
      }),
    );
    if (place) {
      if (action.payload.hourly) {
        yield put(fetchWeatherAPIHourlyAC());
      } else {
        yield put(fetchWeatherAPIDailyAC());
      }
    }
  } catch (e) {
    put(WeatherActions.error());
  }
}
function* getAutoCompleteWeather(
  action: ReturnType<typeof findPlaceWeatherByNameAC>,
) {
  yield delay(2000);
  try {
    const response: OpenMeteoGeocodeResponse = yield call(
      openMeteoAPI.fetchPlacesByName,
      action.payload.name,
    );
    const places = response.results;
    yield put(
      AutocompleteActions.setVariant(
        places.slice(0, 4).map((place) => ({
          city: place.name,
          country: place.country,
          coordinates: {
            latitude: place.latitude,
            longitude: place.longitude,
          },
        })),
      ),
    );
  } catch (e) {
    put(WeatherActions.error());
  }
}
function* WeatherSaga() {
  yield takeLatest('FETCH_WEATHER_DAILY', fetchWeatherAPIDaily);
  yield takeLatest('FETCH_WEATHER_HOURLY', fetchWeatherAPIHourly);
  yield takeLatest('FIND_PLACE_BY_COORDS_WEATHER', findPlaceWeatherByCoords);
  yield takeLatest('FIND_PLACE_BY_NAME_WEATHER', findPlaceWeatherByName);
  yield takeLatest('TAKE_AUTO_COMPLETE_WEATHER', getAutoCompleteWeather);
}

export {
  WeatherSaga,
  fetchWeatherAPIDailyAC,
  fetchWeatherAPIHourlyAC,
  findPlaceWeatherByNameAC,
  findPlaceWeatherByCoordsAC,
  getAutocompleteWeatherAC,
};
