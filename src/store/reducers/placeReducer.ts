import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NormalizedPlaceDataType } from '@typing/storeTypes/placeStateType';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const initialState: NormalizedPlaceDataType = {
  city: '',
  country: '',
  coordinates: {
    latitude: 0,
    longitude: 0,
  },
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
