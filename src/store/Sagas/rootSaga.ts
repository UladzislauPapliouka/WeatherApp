import { fork } from 'redux-saga/effects';

import { GoogleEventsWatcher } from './GoogleEventsWatcher';
import { OpenWeatherSaga } from './OpenWeatherSaga';
import { WeatherSaga } from './WeatherSaga';

export default function* RootSaga() {
  yield fork(GoogleEventsWatcher);
  yield fork(OpenWeatherSaga);
  yield fork(WeatherSaga);
}
