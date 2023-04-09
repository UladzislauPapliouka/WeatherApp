import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import RootSaga from './Sagas/rootSaga';
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

sagaMiddleware.run(RootSaga);

export type RootAppType = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootAppType> = useSelector;
export { Store, useAppDispatch, useAppSelector };
