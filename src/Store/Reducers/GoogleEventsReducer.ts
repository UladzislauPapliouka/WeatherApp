import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type GoogleEventsInitialStateType = {
  time: string,
  title:string
};
const initialState:GoogleEventsInitialStateType[] = [
  { time: '8:00', title: '1gghfhfhffgffgfffgfgffgfgffgfggffgfggfgfgfgfgfgfgfgfgffjgfjhgjhgjgjhgjhgg' },
  { time: '9:00', title: '2' },
  { time: '10:00', title: '3' },
  { time: '11:00', title: '4' },
  { time: '12:00', title: '5' },
  { time: '13:00', title: '6' },
  { time: '14:00', title: '7' },
];
const GoogleEventsSlice = createSlice({
  name: 'GOOGLE_EVENTS',
  initialState,
  reducers: {
    setEvents:
        (state, action:PayloadAction< GoogleEventsInitialStateType[] >) => (
          action.payload),
  },
});

const GoogleEventsReducer = GoogleEventsSlice.reducer;
const GoogleEventsActions = GoogleEventsSlice.actions;

export {
  GoogleEventsActions,
  GoogleEventsReducer,
};
