import { AxiosResponse } from 'axios';
import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';
import { v1 } from 'uuid';
import { weatherAPI, WeatherAPIForecastResponseType, WeatherPlaceResponseType } from '../../API';
import { PlaceActions, PlaceReducer, WeatherActions } from '../Reducers';
import { getDayName, getWeatherIcon } from '../../Services';

const fetchWeatherAPIDailyAC = () => ({
  type: 'FETCH_WEATHER_DAILY',
});
const fetchWeatherAPIHourlyAC = () => ({
  type: 'FETCH_WEATHER_HOURLY',
});
const findPlaceWeatherByCoordsAC = (lat: number, lon: number, hourly:boolean = false) => ({
  type: 'FIND_PLACE_BY_COORDS_WEATHER',
  payload: {
    lat, lon, hourly,
  },
});
const findPlaceWeatherByNameAC = (name: string, hourly:boolean = false) => ({
  type: 'FIND_PLACE_BY_NAME_WEATHER',
  payload: {
    name, hourly,
  },
});

export function* fetchWeatherAPIDaily() {
  try {
    const location: ReturnType<typeof PlaceReducer> = yield select((state) => state.PlaceReducer);
    const response: AxiosResponse<WeatherAPIForecastResponseType> = yield call(
      weatherAPI.getWeatherDaily,
      location.coord.lat,
      location.coord.lon,
    );
    yield put(WeatherActions.setInfo(
      [
        {
          icon: getWeatherIcon(response.data.current.condition.code),
          name: 'Today',
          degrees: response.data.current.temp_c,
          id: v1(),
        },
        ...response.data.forecast.forecastday.slice(1).map((obj: any, i: number) => ({
          icon: getWeatherIcon(obj.day.condition.code),
          name: getDayName(new Date(response.data.location.localtime).getDay(), i),
          degrees: obj.day.avgtemp_c,
          id: v1(),
        })),
      ],
    ));
  } catch (e) {
    throw new Error('Error');
  }
}
function* fetchWeatherAPIHourly() {
  try {
    const location: ReturnType<typeof PlaceReducer> = yield select((state) => state.PlaceReducer);
    const response: AxiosResponse<WeatherAPIForecastResponseType> = yield call(
      weatherAPI.getWeatherHourly,
      location.coord.lat,
      location.coord.lon,
    );
    const currentHours = new Date().getHours();
    yield put(WeatherActions.setInfo([
      {
        icon: getWeatherIcon(
          response
            .data
            .forecast
            .forecastday[0]
            .hour[currentHours]
            .condition
            .code,
        ),
        name: 'Now',
        degrees: response
          .data
          .forecast
          .forecastday[0]
          .hour[currentHours]
          .temp_c,
        id: v1(),
      },
      ...response
        .data
        .forecast
        .forecastday[0]
        .hour
        .slice(currentHours + 1, currentHours + 7)
        .map((obj: any) => ({
          icon: getWeatherIcon(obj.condition.code),
          name: `${new Date(obj.time).getHours()}:00`,
          degrees: obj.temp_c,
          id: v1(),
        })),
    ]));
  } catch (e) {
    throw new Error('Error');
  }
}

function* findPlaceWeatherByCoords(action: ReturnType<typeof findPlaceWeatherByCoordsAC>) {
  try {
    const response: AxiosResponse<WeatherPlaceResponseType> = yield call(
      weatherAPI.getFindPlaceByCoords,
      action.payload.lat,
      action.payload.lon,
    );
    const place = response.data[0];
    yield put(PlaceActions.setPlace(
      {
        city: place.name,
        country: place.country,
        coord: {
          lat: place.lat,
          lon: place.lon,
        },
      },
    ));
    if (place) {
      if (action.payload.hourly) {
        yield put(fetchWeatherAPIHourlyAC());
      } else {
        yield put(fetchWeatherAPIDailyAC());
      }
    }
  } catch (e) {
    throw new Error('Error');
  }
}

function* findPlaceWeatherByName(action: ReturnType<typeof findPlaceWeatherByNameAC>) {
  try {
    const response: AxiosResponse<WeatherPlaceResponseType> = yield call(
      weatherAPI.getFindPlaceByName,
      action.payload.name,
    );
    const place = response.data[0];
    yield put(PlaceActions.setPlace(
      {
        city: place.name,
        country: place.country,
        coord: {
          lat: place.lat,
          lon: place.lon,
        },
      },
    ));
    if (place) {
      if (action.payload.hourly) {
        yield put(fetchWeatherAPIHourlyAC());
      } else {
        yield put(fetchWeatherAPIDailyAC());
      }
    }
  } catch (e) {
    throw new Error('Error');
  }
}
function* WeatherSaga() {
  yield takeLatest('FETCH_WEATHER_DAILY', fetchWeatherAPIDaily);
  yield takeLatest('FETCH_WEATHER_HOURLY', fetchWeatherAPIHourly);
  yield takeLatest('FIND_PLACE_BY_COORDS_WEATHER', findPlaceWeatherByCoords);
  yield takeLatest('FIND_PLACE_BY_NAME_WEATHER', findPlaceWeatherByName);
}

export {
  WeatherSaga,
  fetchWeatherAPIDailyAC,
  fetchWeatherAPIHourlyAC,
  findPlaceWeatherByNameAC,
  findPlaceWeatherByCoordsAC,
};
