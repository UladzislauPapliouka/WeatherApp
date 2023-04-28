import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@store/reducers/userReducer';
import RootSaga from '@store/sagas/rootSaga';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import {
  GoogleEventsReducer,
  PersistedAppReducer,
  PersistedPlaceReducer,
  SearchAutocompleteReducer,
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
