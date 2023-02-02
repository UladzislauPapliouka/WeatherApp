import { AxiosResponse } from 'axios';
import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';
import { v1 } from 'uuid';
import { OpenWeatherAPI, OpenWeatherPlaceResponseType, OpenWeatherResponseType } from '../../API';
import { PlaceActions, PlaceReducer, WeatherActions } from '../Reducers';
import {
  getOpenWeatherIcon,
  openWeatherAPIConverterByDay,
  openWeatherAPIConverterByHours,
} from '../../Services';

const findPlaceByCoordsOpenWeatherAC = (lat: number, lon: number, hourly: boolean = false) => ({
  type: 'FIND_PLACE_BY_COORDS_OPEN_WEATHER',
  payload: {
    lat, lon, hourly,
  },
});
const findPlaceByNameOpenWeatherAC = (name:string, hourly: boolean = false) => ({
  type: 'FIND_PLACE_BY_NAME_OPEN_WEATHER',
  payload: {
    name, hourly,
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
    const location: ReturnType<typeof PlaceReducer> = yield select((state) => state.PlaceReducer);
    const response: AxiosResponse<OpenWeatherResponseType> = yield call(
      OpenWeatherAPI.getWeatherDaily,
      location.coord.lat,
      location.coord.lon,
    );
    const { list } = response.data;
    yield put(WeatherActions.setInfo([
      {
        icon: getOpenWeatherIcon(list[0].weather[0].id),
        name: 'Today',
        degrees: list[0].main.temp,
        id: v1(),
      },
    ].concat(openWeatherAPIConverterByDay(list))));
  } catch (e) {
    throw new Error('Error');
  }
}

function* fetchOpenWeatherAPIHourly() {
  try {
    const location: ReturnType<typeof PlaceReducer> = yield select((state) => state.PlaceReducer);
    const response: AxiosResponse<OpenWeatherResponseType> = yield call(
      OpenWeatherAPI.getWeatherHourly,
      location.coord.lat,
      location.coord.lon,
    );
    const { list } = response.data;
    yield put(WeatherActions.setInfo(
      [
        {
          icon: getOpenWeatherIcon(list[0].weather[0].id),
          name: 'Now',
          degrees: list[0].main.temp,
          id: v1(),
        },
      ].concat(openWeatherAPIConverterByHours(list.slice(1, 7))),
    ));
  } catch (e) {
    throw new Error('Error');
  }
}

function* findPlaceByCoordsOpenWeather(action: ReturnType<typeof findPlaceByCoordsOpenWeatherAC>) {
  try {
    const response: AxiosResponse<OpenWeatherPlaceResponseType[]> = yield call(
      OpenWeatherAPI.getPlaceByCoords,
      action.payload.lat,
      action.payload.lon,
    );
    const place = response.data[0];
    yield put(
      PlaceActions.setPlace(
        {
          city: place.local_names.en || place.local_names.ascii,
          country: new Intl.DisplayNames(['en'], { type: 'region' }).of(place.country) as string,
          coord: {
            lat: place.lat,
            lon: place.lon,
          },
        },
      ),
    );
    if (place) {
      if (action.payload.hourly) {
        yield put(fetchHourlyOpenWeatherAC());
      } else {
        yield put(fetchDailyOpenWeatherAC());
      }
    }
  } catch (e) {
    throw new Error('Error');
  }
}
function* findPlaceByNameOpenWeather(action: ReturnType<typeof findPlaceByNameOpenWeatherAC>) {
  try {
    const response: AxiosResponse<OpenWeatherPlaceResponseType[]> = yield call(
      OpenWeatherAPI.getPlaceByName,
      action.payload.name,
    );
    const place = response.data[0];
    yield put(
      PlaceActions.setPlace(
        {
          city: place.local_names.en || place.local_names.ascii,
          country: new Intl.DisplayNames(['en'], { type: 'region' }).of(place.country) as string,
          coord: {
            lat: place.lat,
            lon: place.lon,
          },
        },
      ),
    );
    if (place) {
      if (action.payload.hourly) {
        yield put(fetchHourlyOpenWeatherAC());
      } else {
        yield put(fetchDailyOpenWeatherAC());
      }
    }
  } catch (e) {
    throw new Error('Error');
  }
}

function* OpenWeatherSaga() {
  yield takeLatest('FETCH_OPEN_WEATHER_DAILY', fetchOpenWeatherAPIDaily);
  yield takeLatest('FETCH_OPEN_WEATHER_HOURLY', fetchOpenWeatherAPIHourly);
  yield takeLatest('FIND_PLACE_BY_COORDS_OPEN_WEATHER', findPlaceByCoordsOpenWeather);
  yield takeLatest('FIND_PLACE_BY_NAME_OPEN_WEATHER', findPlaceByNameOpenWeather);
}

export {
  OpenWeatherSaga,
  fetchHourlyOpenWeatherAC,
  findPlaceByCoordsOpenWeatherAC,
  fetchDailyOpenWeatherAC,
  findPlaceByNameOpenWeatherAC,
};
