import { fork } from 'redux-saga/effects';

import { GoogleSaga } from './GoogleSaga';
import { OpenWeatherSaga } from './OpenWeatherSaga';
import { WeatherSaga } from './WeatherSaga';

export default function* RootSaga() {
  yield fork(GoogleSaga);
  yield fork(OpenWeatherSaga);
  yield fork(WeatherSaga);
}
