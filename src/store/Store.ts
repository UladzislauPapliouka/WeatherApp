import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { GoogleSaga } from './Sagas/GoogleSaga';
import { OpenWeatherSaga } from './Sagas/OpenWeatherSaga';
import { WeatherSaga } from './Sagas/WeatherSaga';
import {
  AppReducer,
  GoogleEventsReducer,
  PlaceReducer,
  WeatherReducer,
} from './Reducers';

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    PlaceReducer,
    GoogleEventsReducer,
    WeatherByDayReducer: WeatherReducer,
    AppReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(GoogleSaga);
sagaMiddleware.run(OpenWeatherSaga);
sagaMiddleware.run(WeatherSaga);

export type RootAppType = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootAppType> = useSelector;
export { Store, useAppDispatch, useAppSelector };
