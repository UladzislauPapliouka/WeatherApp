import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GoogleEventsInitialStateType } from '@Types/storeTypes/googleStateTypes';

const initialState: GoogleEventsInitialStateType[] = [];
const GoogleEventsSlice = createSlice({
  name: 'GOOGLE_EVENTS',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<GoogleEventsInitialStateType[]>) =>
      action.payload,
  },
});

const GoogleEventsReducer = GoogleEventsSlice.reducer;
const GoogleEventsActions = GoogleEventsSlice.actions;

export { GoogleEventsActions, GoogleEventsReducer };
