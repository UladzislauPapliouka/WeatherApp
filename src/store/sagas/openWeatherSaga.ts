import { AutocompleteActions } from '@store/reducers/searchAutocompleteReducer';
import {
  IOpenWeatherPlaceResponse,
  IOpenWeatherResponse,
} from '@typing/apiTypes/openWeatherAPITypes';
import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { v1 } from 'uuid';

import { OpenWeatherAPI } from '@/api';
import {
  getOpenWeatherIcon,
  normalizeOpenWeatherDaily,
  normalizeOpenWeatherHourly,
} from '@/services';

import {
  fetchDailyOpenWeatherAC,
  fetchHourlyOpenWeatherAC,
  findPlaceByCoordsOpenWeatherAC,
  findPlaceByNameOpenWeatherAC,
  openWeatherActionTypes,
} from '../actionCreators';
import {
  AppActions,
  PlaceActions,
  PlaceReducer,
  WeatherActions,
} from '../reducers';

function* fetchOpenWeatherAPIDaily() {
  try {
    const location: ReturnType<typeof PlaceReducer> = yield select(
      (state) => state.placeInfo,
    );

    yield put(AppActions.startWeatherFetching());
    const response: IOpenWeatherResponse = yield call(
      OpenWeatherAPI.fetchDailyWeather,
      location.coordinates.latitude,
      location.coordinates.longitude,
    );

    const { list } = response;

    yield put(AppActions.finishWeatherFetching());
    yield put(
      WeatherActions.setInfo(
        [
          {
            icon: getOpenWeatherIcon(list[0].weather[0].id),
            name: 'Today',
            degrees: list[0].main.temp,
            id: v1(),
          },
        ].concat(normalizeOpenWeatherDaily(list)),
      ),
    );
  } catch (e) {
    yield put(AppActions.finishFetchingWithError());
  }
}

function* fetchOpenWeatherAPIHourly() {
  try {
    const location: ReturnType<typeof PlaceReducer> = yield select(
      (state) => state.placeInfo,
    );

    yield put(AppActions.startWeatherFetching());
    const response: IOpenWeatherResponse = yield call(
      OpenWeatherAPI.fetchHourlyWeather,
      location.coordinates.latitude,
      location.coordinates.longitude,
    );

    yield put(AppActions.finishWeatherFetching());
    const { list } = response;

    yield put(
      WeatherActions.setInfo(
        [
          {
            icon: getOpenWeatherIcon(list[0].weather[0].id),
            name: 'Now',
            degrees: list[0].main.temp,
            id: v1(),
          },
        ].concat(normalizeOpenWeatherHourly(list.slice(1, 7))),
      ),
    );
  } catch (e) {
    yield put(AppActions.finishFetchingWithError());
  }
}

function* findPlaceByCoordsOpenWeather(
  action: ReturnType<typeof findPlaceByCoordsOpenWeatherAC>,
) {
  try {
    const response: IOpenWeatherPlaceResponse[] = yield call(
      OpenWeatherAPI.fetchPlacesByCoordinates,
      action.payload.lat,
      action.payload.lon,
    );

    const place = response[0];

    yield put(
      PlaceActions.setPlace({
        city: place.local_names.en || place.local_names.ascii,
        country: new Intl.DisplayNames(['en'], { type: 'region' }).of(
          place.country,
        ) as string,
        coordinates: {
          latitude: place.lat,
          longitude: place.lon,
        },
      }),
    );
    if (place) {
      if (action.payload.hourly) {
        yield put(fetchHourlyOpenWeatherAC());
      } else {
        yield put(fetchDailyOpenWeatherAC());
      }
    }
  } catch (e) {
    put(AppActions.finishFetchingWithError());
  }
}

function* findPlaceByNameOpenWeather(
  action: ReturnType<typeof findPlaceByNameOpenWeatherAC>,
) {
  try {
    const response: IOpenWeatherPlaceResponse[] = yield call(
      OpenWeatherAPI.fetchPlacesByName,
      action.payload.name,
    );

    const place = response[0];

    yield put(
      PlaceActions.setPlace({
        city: place.local_names.en || place.local_names.ascii,
        country: new Intl.DisplayNames(['en'], { type: 'region' }).of(
          place.country,
        ) as string,
        coordinates: {
          latitude: place.lat,
          longitude: place.lon,
        },
      }),
    );
    if (place) {
      if (action.payload.hourly) {
        yield put(fetchHourlyOpenWeatherAC());
      } else {
        yield put(fetchDailyOpenWeatherAC());
      }
    }
  } catch (e) {
    put(AppActions.finishFetchingWithError());
  }
}

function* getAutocomplete(
  action: ReturnType<typeof findPlaceByNameOpenWeatherAC>,
) {
  try {
    delay(2000);
    const response: IOpenWeatherPlaceResponse[] = yield call(
      OpenWeatherAPI.fetchPlacesByName,
      action.payload.name,
    );

    yield put(
      AutocompleteActions.setVariant(
        response.slice(0, 4).map((place) => ({
          city: place.name,
          country: place.country,
          coordinates: {
            latitude: place.lat,
            longitude: place.lon,
          },
        })),
      ),
    );
  } catch (e) {
    // TODO: add another case
    put(AppActions.finishFetchingWithError());
  }
}

function* OpenWeatherSaga() {
  yield takeLatest(
    openWeatherActionTypes.FETCH_OPEN_WEATHER_DAILY,
    fetchOpenWeatherAPIDaily,
  );
  yield takeLatest(
    openWeatherActionTypes.FETCH_OPEN_WEATHER_HOURLY,
    fetchOpenWeatherAPIHourly,
  );
  yield takeLatest(
    openWeatherActionTypes.FIND_PLACE_BY_COORDS_OPEN_WEATHER,
    findPlaceByCoordsOpenWeather,
  );
  yield takeLatest(
    openWeatherActionTypes.FIND_PLACE_BY_NAME_OPEN_WEATHER,
    findPlaceByNameOpenWeather,
  );
  yield takeLatest(
    openWeatherActionTypes.TAKE_AUTO_COMPLETE_OPEN,
    getAutocomplete,
  );
}

export default OpenWeatherSaga;
