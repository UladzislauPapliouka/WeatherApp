import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PlaceInitialStateType = {
  city:string,
  country:string,
  coord: {
    lat:number,
    lon:number
  }
};
const initialState: PlaceInitialStateType = {
  city: 'Minsk',
  country: 'Belarus',
  coord: {
    lat: 0,
    lon: 0,
  },
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
