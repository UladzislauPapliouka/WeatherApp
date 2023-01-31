// eslint-disable-next-line import/no-extraneous-dependencies
import { call, put, takeLatest } from 'redux-saga/effects';
import ApiCalendar from 'react-google-calendar-api';
import { GoogleEventsActions, PlaceActions, WeatherByDayActions } from '../Reducers';
import weatherAPI from '../../API/weatherAPI';
import {
  getWeatherIcon, getDayName, openWeatherAPIConverterByDay,
  getOpenWeatherIcon, openWeatherAPIConverterByHours,
} from '../../Services/services';
import openWeatherAPI from '../../API/openWeatherAPI';

const config = {
  clientId: '573990938888-37r8rfbfecr9dne6q7m3ht0li3pf17ed.apps.googleusercontent.com',
  apiKey: 'AIzaSyCyrCsJylVwzKnPBaHD1nMs8b2hlc2wgzc',
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
};
const apiCalendar = new ApiCalendar(config);

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
  try {
    const listEventConfig = {
      timeMin: new Date().toISOString(),
      timeMax: new Date(new Date().getTime() + 12 * 60 * 60 * 1000).toISOString(),
      showDeleted: true,
      maxResults: 10,
      orderBy: 'updated',
    };
    // @ts-ignore
    const response = yield call(apiCalendar.listEvents, listEventConfig);
    const eventsList:Array<any> = response.result.items;
    yield put({
      type: GoogleEventsActions.setEvents.type,
      payload: eventsList.map((event:any) => ({
        time: new Intl.DateTimeFormat('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }).format(new Date(event.start.dateTime)),
        title: event.summary,
      })),
    });
  } catch (e) {
    // @ts-ignore
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}
function* loginGoogle(action:any) {
  try {
    apiCalendar.tokenClient = action.payload;
    yield put({ type: 'USER_FETCH_REQUESTED' });
  } catch (e) {
    console.log(e);
  }
}
function* fetchWeatherAPIByDay() {
  try {
    // @ts-ignore
    const response = yield call(weatherAPI.getWeatherByDay);
    yield put(
      {
        type: PlaceActions.setPlace.type,
        payload: { city: response.data.location.name, country: response.data.location.country },
      },
    );
    yield put(
      {
        type: WeatherByDayActions.setInfo.type,
        payload: [
          {
            icon: getWeatherIcon(response.data.current.condition.code),
            name: 'Today',
            degrees: response.data.current.temp_c,
          },
          ...response.data.forecast.forecastday.slice(1).map((obj:any, i:number) => ({
            icon: getWeatherIcon(obj.day.condition.code),
            name: getDayName(new Date(response.data.location.localtime).getDay(), i),
            degrees: obj.day.avgtemp_c,
          })),
        ],
      },
    );
  } catch (e) {
    console.log(e);
  }
}

function* fetchWeatherAPIByHours() {
  try {
    // @ts-ignore
    const response = yield call(weatherAPI.getWeatherByHours);
    const currentHours = new Date().getHours();
    yield put(
      {
        type: PlaceActions.setPlace.type,
        payload: { city: response.data.location.name, country: response.data.location.country },
      },
    );
    yield put(
      {
        type: WeatherByDayActions.setInfo.type,
        payload: [
          {
            icon: getWeatherIcon(response.data
              .forecast.forecastday[0].hour[currentHours].condition.code),
            name: 'Now',
            degrees: response.data.forecast.forecastday[0].hour[currentHours].temp_c,
          },
          ...response.data
            .forecast.forecastday[0]
            .hour.slice(currentHours + 1, currentHours + 7).map((obj:any) => ({
              icon: getWeatherIcon(obj.condition.code),
              name: `${new Date(obj.time).getHours()}:00`,
              degrees: obj.temp_c,
            })),
        ],
      },
    );
  } catch (e) {
    console.log(e);
  }
}

function* fetchOpenWeatherAPIByDay() {
  try {
    // @ts-ignore
    const response = yield call(openWeatherAPI.getWeatherByDay);
    const { list } = response.data;
    yield put(
      {
        type: PlaceActions.setPlace.type,
        payload: { city: response.data.city.name, country: response.data.city.country },
      },
    );
    yield put(
      {
        type: WeatherByDayActions.setInfo.type,
        payload: [
          {
            icon: getOpenWeatherIcon(list[0].weather[0].id),
            name: 'Today',
            degrees: list[0].main.temp,
          },
        ].concat(openWeatherAPIConverterByDay(list.slice(8))),
      },
    );
  } catch (e) {
    console.log(e);
  }
}

function* fetchOpenWeatherAPIByHours() {
  try {
    // @ts-ignore
    const response = yield call(openWeatherAPI.getWeatherByHours);
    const { list } = response.data;
    yield put(
      {
        type: PlaceActions.setPlace.type,
        payload: { city: response.data.city.name, country: new Intl.DisplayNames(['en'], { type: 'region' }).of(response.data.city.country) },
      },
    );
    yield put(
      {
        type: WeatherByDayActions.setInfo.type,
        payload: [
          {
            icon: getOpenWeatherIcon(list[0].weather[0].id),
            name: 'Now',
            degrees: list[0].main.temp,
          },
        ].concat(openWeatherAPIConverterByHours(list.slice(1, 7))),
      },
    );
  } catch (e) {
    console.log(e);
  }
}

/*
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
  yield takeLatest('GOOGLE_LOGIN', loginGoogle);
  yield takeLatest('FETCH_STORM_BY_DAY', fetchWeatherAPIByDay);
  yield takeLatest('FETCH_STORM_BY_HOURS', fetchWeatherAPIByHours);
  yield takeLatest('FETCH_OPEN_BY_DAY', fetchOpenWeatherAPIByDay);
  yield takeLatest('FETCH_OPEN_BY_HOURS', fetchOpenWeatherAPIByHours);
}

export default mySaga;
