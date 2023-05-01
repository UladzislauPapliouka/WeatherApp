import { fork } from 'redux-saga/effects';

import GoogleEventsWatcher from './googleEventsWatcher';
import OpenWeatherSaga from './openWeatherSaga';
import WeatherSaga from './weatherSaga';

export default function* RootSaga() {
  yield fork(GoogleEventsWatcher);
  yield fork(OpenWeatherSaga);
  yield fork(WeatherSaga);
}
