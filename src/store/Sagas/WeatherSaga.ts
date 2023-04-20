import { AutocompleteActions } from '@store/Reducers/SearchAutocompleteReducer';
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

import { weatherAPI } from '@/api';
import { getDayName, getWeatherIcon } from '@/services';
import {
  WeatherAPIForecastResponseType,
  WeatherPlaceResponseType,
} from '@/types/apiTypes/weatherAPITypes';

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
    const response: AxiosResponse<WeatherAPIForecastResponseType> = yield call(
      weatherAPI.getWeatherDaily,
      location.coord.lat,
      location.coord.lon,
    );
    yield put(AppActions.finishWeatherFetching());
    yield put(
      WeatherActions.setInfo([
        {
          icon: getWeatherIcon(response.data.current.condition.code),
          name: 'Today',
          degrees: response.data.current.temp_c,
          id: v1(),
        },
        ...response.data.forecast.forecastday
          .slice(1)
          .map(
            (
              obj: WeatherAPIForecastResponseType['forecast']['forecastday'][0],
              i: number,
            ) => ({
              icon: getWeatherIcon(obj.day.condition.code),
              name: getDayName(
                new Date(response.data.location.localtime).getDay(),
                i,
              ),
              degrees: obj.day.avgtemp_c,
              id: v1(),
            }),
          ),
      ]),
    );
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
    const response: AxiosResponse<WeatherAPIForecastResponseType> = yield call(
      weatherAPI.getWeatherHourly,
      location.coord.lat,
      location.coord.lon,
    );
    yield put(AppActions.finishWeatherFetching());
    const currentHours = new Date().getHours();
    yield put(
      WeatherActions.setInfo([
        {
          icon: getWeatherIcon(
            response.data.forecast.forecastday[0].hour[currentHours].condition
              .code,
          ),
          name: 'Now',
          degrees:
            response.data.forecast.forecastday[0].hour[currentHours].temp_c,
          id: v1(),
        },
        ...response.data.forecast.forecastday[0].hour
          .slice(currentHours + 1, currentHours + 7)
          .map(
            (
              obj: WeatherAPIForecastResponseType['forecast']['forecastday'][0]['hour'][0],
            ) => ({
              icon: getWeatherIcon(obj.condition.code),
              name: `${new Date(obj.time).getHours()}:00`,
              degrees: obj.temp_c,
              id: v1(),
            }),
          ),
      ]),
    );
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
        coord: {
          lat: place.lat,
          lon: place.lon,
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
    const response: AxiosResponse<WeatherPlaceResponseType> = yield call(
      weatherAPI.getFindPlaceByName,
      action.payload.name,
    );
    const place = response.data[0];
    yield put(
      PlaceActions.setPlace({
        city: place.name,
        country: place.country,
        coord: {
          lat: place.lat,
          lon: place.lon,
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
    const response: AxiosResponse<WeatherPlaceResponseType> = yield call(
      weatherAPI.getFindPlaceByName,
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
