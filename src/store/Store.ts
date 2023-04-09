import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import RootSaga from './Sagas/rootSaga';
import {
  AppReducer,
  GoogleEventsReducer,
  PersistedAppReducer,
  PersistedPlaceReducer,
  WeatherReducer,
} from './Reducers';

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    PlaceReducer: PersistedPlaceReducer,
    GoogleEventsReducer,
    WeatherByDayReducer: WeatherReducer,
    AppReducer: PersistedAppReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(RootSaga);

export type RootAppType = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootAppType> = useSelector;
const persistor = persistStore(Store);
export { Store, persistor, useAppDispatch, useAppSelector };
