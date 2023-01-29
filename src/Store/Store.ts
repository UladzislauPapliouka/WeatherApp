// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { PlaceReducer, GoogleEventsReducer, WeatherByDayReducer } from './Reducers';

const Store = configureStore({
  reducer: {
    PlaceReducer,
    GoogleEventsReducer,
    WeatherByDayReducer,
  },
});

export type RootAppType = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootAppType> = useSelector;

export {
  Store,
  useAppDispatch,
  useAppSelector,
};
