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

import { PlaceActions, PlaceReducer, WeatherActions } from '../Reducers';

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
    const response: AxiosResponse<OpenWeatherResponseType> = yield call(
      OpenWeatherAPI.getWeatherDaily,
      location.coord.lat,
      location.coord.lon,
    );
    const { list } = response.data;
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
    throw new Error('Error');
  }
}

function* fetchOpenWeatherAPIHourly() {
  try {
    const location: ReturnType<typeof PlaceReducer> = yield select(
      (state) => state.PlaceReducer,
    );
    const response: AxiosResponse<OpenWeatherResponseType> = yield call(
      OpenWeatherAPI.getWeatherHourly,
      location.coord.lat,
      location.coord.lon,
    );
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
    put(WeatherActions.error());
  }
}

function* findPlaceByCoordsOpenWeather(
  action: ReturnType<typeof findPlaceByCoordsOpenWeatherAC>,
) {
  try {
    const response: AxiosResponse<OpenWeatherPlaceResponseType[]> = yield call(
      OpenWeatherAPI.getPlaceByCoords,
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
        coord: {
          lat: place.lat,
          lon: place.lon,
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
      OpenWeatherAPI.getPlaceByName,
      action.payload.name,
    );
    const place = response.data[0];
    yield put(
      PlaceActions.setPlace({
        city: place.local_names.en || place.local_names.ascii,
        country: new Intl.DisplayNames(['en'], { type: 'region' }).of(
          place.country,
        ) as string,
        coord: {
          lat: place.lat,
          lon: place.lon,
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
      OpenWeatherAPI.getPlaceByName,
      action.payload.name,
    );
    const places = response.data;
    yield put(
      AutocompleteActions.setVariant(
        places.slice(0, 4).map((place) => ({
          city: place.name,
          country: place.country,
          coord: {
            lat: place.lat,
            lon: place.lon,
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
