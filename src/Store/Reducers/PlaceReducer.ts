// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PlaceInitialStateType = {
  city:string,
  country:string
};
const initialState: PlaceInitialStateType = {
  city: 'Minsk',
  country: 'Belarus',
};
const PlaceSlice = createSlice({
  name: 'PLACE',
  initialState,
  reducers: {
    setPlace: (state, action:PayloadAction<PlaceInitialStateType>) => action.payload,
  },
});
const PlaceReducer = PlaceSlice.reducer;
const PlaceActions = PlaceSlice.actions;
export {
  PlaceActions,
  PlaceReducer,
};
