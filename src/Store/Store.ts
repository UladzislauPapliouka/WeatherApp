// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import createSagaMiddleware from 'redux-saga';
import { PlaceReducer, GoogleEventsReducer, WeatherByDayReducer } from './Reducers';
import mySaga from './Sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    PlaceReducer,
    GoogleEventsReducer,
    WeatherByDayReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);
export type RootAppType = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootAppType> = useSelector;
const action = (type:string, payload?:any) => Store.dispatch({ type, payload });
export {
  Store,
  useAppDispatch,
  useAppSelector,
  action,
};
