import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaceInitialStateType } from '@Types/storeTypes/placeStateType';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState: PlaceInitialStateType = {
  city: '',
  country: '',
  coord: {
    lat: 0,
    lon: 0,
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
    setPlace: (state, action: PayloadAction<PlaceInitialStateType>) =>
      action.payload,
  },
});
const PlaceReducer = PlaceSlice.reducer;
const PersistedPlaceReducer = persistReducer(persistConfig, PlaceSlice.reducer);
const PlaceActions = PlaceSlice.actions;
export { PlaceActions, PlaceReducer, PersistedPlaceReducer };
