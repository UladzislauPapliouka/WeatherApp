import { AutocompleteActions } from '@store/Reducers/SearchAutocompleteReducer';
import {
  OpenWeatherPlaceResponseType,
  OpenWeatherResponseType,
} from '@Types/apiTypes/openWeatherAPITypes';
import { AxiosResponse } from 'axios';
import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
  takeLeading,
} from 'redux-saga/effects';
import { v1 } from 'uuid';

import { OpenWeatherAPI } from '@/api';
import {
  getOpenWeatherIcon,
  openWeatherAPIConverterByDay,
  openWeatherAPIConverterByHours,
} from '@/services';

import {
  AppActions,
  PlaceActions,
  PlaceReducer,
  WeatherActions,
} from '../Reducers';

const findPlaceByCoordsOpenWeatherAC = (
  lat: number,
  lon: number,
  hourly = false,
) => ({
  type: 'FIND_PLACE_BY_COORDS_OPEN_WEATHER',
  payload: {
    lat,
    lon,
    hourly,
  },
});
const findPlaceByNameOpenWeatherAC = (name: string, hourly = false) => ({
  type: 'FIND_PLACE_BY_NAME_OPEN_WEATHER',
  payload: {
    name,
    hourly,
  },
});
const getAutocompleteAC = (name: string) => ({
  type: 'TAKE_AUTO_COMPLETE_OPEN',
  payload: {
    name,
  },
});
const fetchDailyOpenWeatherAC = () => ({
  type: 'FETCH_OPEN_WEATHER_DAILY',
});
const fetchHourlyOpenWeatherAC = () => ({
  type: 'FETCH_OPEN_WEATHER_HOURLY',
});

function* fetchOpenWeatherAPIDaily() {
  try {
    const location: ReturnType<typeof PlaceReducer> = yield select(
      (state) => state.PlaceReducer,
    );
    yield put(AppActions.startWeatherFetching());
    const response: AxiosResponse<OpenWeatherResponseType> = yield call(
      OpenWeatherAPI.fetchDailyWeather,
      location.coordinates.latitude,
      location.coordinates.longitude,
    );
    const { list } = response.data;
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
        ].concat(openWeatherAPIConverterByDay(list)),
      ),
    );
  } catch (e) {
    yield put(AppActions.finishWeatherFetching());
  }
}

function* fetchOpenWeatherAPIHourly() {
  try {
    const location: ReturnType<typeof PlaceReducer> = yield select(
      (state) => state.PlaceReducer,
    );
    yield put(AppActions.startWeatherFetching());
    const response: AxiosResponse<OpenWeatherResponseType> = yield call(
      OpenWeatherAPI.fetchHourlyWeather,
      location.coordinates.latitude,
      location.coordinates.longitude,
    );
    yield put(AppActions.finishWeatherFetching());
    const { list } = response.data;
    yield put(
      WeatherActions.setInfo(
        [
          {
            icon: getOpenWeatherIcon(list[0].weather[0].id),
            name: 'Now',
            degrees: list[0].main.temp,
            id: v1(),
          },
        ].concat(openWeatherAPIConverterByHours(list.slice(1, 7))),
      ),
    );
  } catch (e) {
    yield put(AppActions.finishWeatherFetching());
  }
}

function* findPlaceByCoordsOpenWeather(
  action: ReturnType<typeof findPlaceByCoordsOpenWeatherAC>,
) {
  try {
    const response: AxiosResponse<OpenWeatherPlaceResponseType[]> = yield call(
      OpenWeatherAPI.fetchPlacesByCoordinates,
      action.payload.lat,
      action.payload.lon,
    );
    const place = response.data[0];
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
    put(WeatherActions.error());
  }
}
function* findPlaceByNameOpenWeather(
  action: ReturnType<typeof findPlaceByNameOpenWeatherAC>,
) {
  try {
    console.log('here');
    const response: AxiosResponse<OpenWeatherPlaceResponseType[]> = yield call(
      OpenWeatherAPI.fetchPlacesByName,
      action.payload.name,
    );
    const place = response.data[0];
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
    put(WeatherActions.error());
  }
}
function* getAutocomplete(
  action: ReturnType<typeof findPlaceByNameOpenWeatherAC>,
) {
  try {
    delay(2000);
    const response: AxiosResponse<OpenWeatherPlaceResponseType[]> = yield call(
      OpenWeatherAPI.fetchPlacesByName,
      action.payload.name,
    );
    const places = response.data;
    yield put(
      AutocompleteActions.setVariant(
        places.slice(0, 4).map((place) => ({
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
    put(WeatherActions.error());
  }
}
function* OpenWeatherSaga() {
  yield takeLatest('FETCH_OPEN_WEATHER_DAILY', fetchOpenWeatherAPIDaily);
  yield takeLatest('FETCH_OPEN_WEATHER_HOURLY', fetchOpenWeatherAPIHourly);
  yield takeLatest(
    'FIND_PLACE_BY_COORDS_OPEN_WEATHER',
    findPlaceByCoordsOpenWeather,
  );
  yield takeLatest(
    'FIND_PLACE_BY_NAME_OPEN_WEATHER',
    findPlaceByNameOpenWeather,
  );
  yield takeLatest('TAKE_AUTO_COMPLETE_OPEN', getAutocomplete);
}

export {
  OpenWeatherSaga,
  fetchHourlyOpenWeatherAC,
  findPlaceByCoordsOpenWeatherAC,
  fetchDailyOpenWeatherAC,
  findPlaceByNameOpenWeatherAC,
  getAutocompleteAC,
};
