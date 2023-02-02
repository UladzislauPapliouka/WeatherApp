import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PlaceInitialStateType = {
  city:string,
  country:string,
  coord: {
    lat:number,
    lon:number
  }
};
let initialState: PlaceInitialStateType = {
  city: '',
  country: '',
  coord: {
    lat: 0,
    lon: 0,
  },
};
if (localStorage.getItem('Place')) {
  const item = localStorage.getItem('Place') as string;
  initialState = JSON.parse(item);
}
const PlaceSlice = createSlice({
  name: 'PLACE',
  initialState,
  reducers: {
    setPlace: (state, action:PayloadAction<PlaceInitialStateType>) => {
      localStorage.setItem('Place', JSON.stringify(action.payload));
      return action.payload;
    },
  },
});
const PlaceReducer = PlaceSlice.reducer;
const PlaceActions = PlaceSlice.actions;
export {
  PlaceActions,
  PlaceReducer,
};
