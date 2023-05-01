import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { NormalizedPlaceDataType } from '@typing/storeTypes/placeStateType';

export const initialState: NormalizedPlaceDataType = {
  city: '',
  country: '',
  coordinates: {
    latitude: 0,
    longitude: 0,
  },
  id: '',
};
const persistConfig = {
  key: 'PlaceState',
  storage,
};

const PlaceSlice = createSlice({
  name: 'PLACE',
  initialState,
  reducers: {
    setPlace: (state, action: PayloadAction<NormalizedPlaceDataType>) =>
      action.payload,
  },
});

const PlaceReducer = PlaceSlice.reducer;

const PersistedPlaceReducer = persistReducer(persistConfig, PlaceSlice.reducer);

const PlaceActions = PlaceSlice.actions;

export { PlaceActions, PlaceReducer, PersistedPlaceReducer };
