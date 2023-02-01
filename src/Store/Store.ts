// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import createSagaMiddleware from 'redux-saga';
import { PlaceReducer, GoogleEventsReducer, WeatherReducer } from './Reducers';
import { GoogleSaga } from './Sagas/GoogleSaga';
import { OpenWeatherSaga } from './Sagas/OpenWeatherSaga';
import { WeatherSaga } from './Sagas/WeatherSaga';

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    PlaceReducer,
    GoogleEventsReducer,
    WeatherByDayReducer: WeatherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(GoogleSaga);
sagaMiddleware.run(OpenWeatherSaga);
sagaMiddleware.run(WeatherSaga);

export type RootAppType = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootAppType> = useSelector;
export {
  Store,
  useAppDispatch,
  useAppSelector,
};
