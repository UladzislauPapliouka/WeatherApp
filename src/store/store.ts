import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import RootSaga from './sagas/rootSaga';
import {
  GoogleEventsReducer,
  PersistedAppReducer,
  PersistedPlaceReducer,
  SearchAutocompleteReducer,
  userReducer,
  WeatherReducer,
} from './reducers';

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    placeInfo: PersistedPlaceReducer,
    googleEvents: GoogleEventsReducer,
    weatherInfo: WeatherReducer,
    appState: PersistedAppReducer,
    userReducer,
    autocompleteVariants: SearchAutocompleteReducer,
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
